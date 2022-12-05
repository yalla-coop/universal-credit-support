import { useRef, useReducer, useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import {
  Grid,
  Typography as T,
  Inputs as I,
  Button,
  Modal,
} from '../../../components';
import TopicFormWithResources from '../../../components/TopicFormWithResources';
import TextWithIcon from '../../../components/TextWithIcon';
import { defaultResources } from '../../../constants/resources';
import { useAdminOrg } from '../../../context/admin-org';
import { Section as validate } from '../../../validation/schemas';
import { Sections } from '../../../api-calls';
import { navRoutes, roles } from '../../../constants';
import { useAuth } from '../../../context/auth';

const { Row, Col } = Grid;

const initialState = {
  title: '',

  httpError: '',
  validationErrs: {},
  loading: false,
};

// to send the same body in the edit and create requests
const formatTopics = ({ topics: _topics }) => {
  return _topics.map((t) => ({
    id: t.id,
    content: {
      title: t.title,
      content: t.content,
      resources: t.resources.map((r) => {
        if (r.type === 'CUSTOM') {
          return {
            category: r.category,
            key: r.key,
            type: r.type,
          };
        }
        return {
          label: r.label,
          url: r.url,
          type: 'EXTERNAL',
        };
      }),
      tip1: t.tips[0]?.content,
      tip2: t.tips[1]?.content,
    },
    new: t.new,
  }));
};

function reducer(state, newState) {
  let value = newState;
  if (typeof newState === 'function') {
    value = newState(state);
  }

  return { ...state, ...value };
}

const SectionForm = ({ review }) => {
  const location = useLocation();
  const urlQuery = new URLSearchParams(location.search);
  const uniqueSlug = urlQuery.get('uniqueSlug');
  const organisationId = urlQuery.get('organisationId');
  const { user } = useAuth();
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);

  const navigate = useNavigate();
  const saveForPreview = useRef(false);
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const [topics, setTopics] = useState([
    {
      title: '',
      resources: [{ url: '', label: '', id: 0 }],
      tips: [{ content: '', id: 0 }],
      id: 0,
    },
  ]);
  const { title, httpError, validationErrs } = state;

  const { id } = useParams();
  const { adminOrg } = useAdminOrg();

  useEffect(() => {
    const getSectionData = async () => {
      setState({ loading: true });
      const { error, data } = await Sections.getSectionById({
        id,
        forPublic: false,
      });
      setState({ loading: false });
      if (error) {
        if (error.statusCode === 401 || error.statusCode === 404) {
          return navigate(navRoutes.GENERAL.NOT_FOUND);
        }
        return setState({ httpError: error.message });
      }
      setState({
        ...data,
      });
    };

    const fetchTopics = async () => {
      const { data, error } = await Sections.getTopics({
        sectionId: id,
        forPublic: false,
      });
      if (error) {
        return setState({ httpError: error.message });
      } else {
        setTopics(
          data.map((t) => ({
            id: t.id,
            content: t.content.content,
            title: t.content.title,
            resources: t.content.resources
              ?.map((resource, i) => {
                if (resource.type === 'CUSTOM') {
                  const defaultResource = defaultResources?.find(
                    (r) => r.key === resource.key
                  );
                  return {
                    ...defaultResource,
                    url: defaultResource.value,
                    type: 'CUSTOM',
                    id: i,
                  };
                }
                return { ...resource, id: i };
              })
              .filter((r) => !!r),
            tips: [
              { id: 0, content: t.content.tip1 },
              { id: 1, content: t.content.tip2 },
            ].filter((t) => t.content),
          }))
        );
      }
    };

    if (id !== 'new') {
      getSectionData();
      fetchTopics();
    }
  }, [id, navigate]);

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, topics]);

  const validateForm = () => {
    try {
      validate({
        title,
        topics: topics.map((t) => ({
          title: t.title,
          content: t.content,
          resources: t.resources.map((r) => ({
            label: r.label,
            url: r.url,
          })),
          tip1: t.tips[0]?.content,
          tip2: t.tips[1]?.content,
        })),
      });
      setState({ validationErrs: {} });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({ validationErrs: error.inner });
      }
      return false;
    }
  };

  const previewPage = navRoutes.PUBLIC_ORG.SECTION.replace(
    ':uniqueSlug',
    uniqueSlug || adminOrg.uniqueSlug
  ).replace(':id', id);

  const handleEditSection = async () => {
    setState({ loading: true });

    const { error } = await Sections.updateSectionWithTopics({
      id: id,
      body: {
        title,
        topics: formatTopics({ topics }),
        approved: review || null,
      },
    });

    setState({ loading: false });
    if (error) {
      setState({ httpError: error.message });
    } else {
      if (saveForPreview.current) {
        window.open(previewPage, '_blank');
      } else {
        setIsUpdateModalVisible(true);
      }
    }
    saveForPreview.current = false;
  };

  const handleCreateSection = async () => {
    setState({ loading: true });
    const { error } = await Sections.createSectionWithTopics({
      body: {
        title,
        topics: formatTopics({ topics }),
      },
    });

    setState({ loading: false });
    if (error) {
      setState({ httpError: error.message });
    } else {
      navigate(navRoutes.ADMIN.SECTION_ADDED);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      if (id === 'new') {
        handleCreateSection();
      } else {
        handleEditSection();
      }
    }
  };

  const addNewTopic = () => {
    setTopics((_topics) => {
      const largestId = _topics.reduce((acc, curr) => {
        if (curr.id > acc) {
          return curr.id;
        }
        return acc;
      }, 0);

      return [
        ...topics,
        {
          title: '',
          resources: [{ url: '', label: '' }],
          tips: [{ content: '', id: 0 }],
          id: largestId + 1,
          new: true,
        },
      ];
    });
  };

  const pageTitle = () => {
    if (review) return 'Approve section';
    if (id === 'new') return 'Add section';
    return 'Edit section';
  };

  const saveButtonLabel = () => {
    if (review) return 'Approve section';
    if (id === 'new') return 'Publish';
    return 'Save';
  };

  return (
    <>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mb="6" weight="bold">
            {pageTitle()}
          </T.H1>
        </Col>{' '}
        <Col w={[4, 12, 10]}>
          <T.P isSmall color="neutralDark" mb={6}>
            {id === 'new' && (
              <>
                Below you can add details for a new section with up to 5 topics.
                Please note that you can only add two new sections.
              </>
            )}
          </T.P>
        </Col>
      </Row>
      <Row>
        <Col w={[4, 6, 4]}>
          <I.BasicInput
            name="title"
            placeholder="Type title here..."
            label="Section title"
            helper="Add ** at the beginning and end of the word to make it bold"
            error={validationErrs.title}
            value={title}
            handleChange={(input) => setState({ title: input })}
          />
        </Col>
      </Row>

      <>
        {topics.map((topic, topicIndex) => (
          <TopicFormWithResources
            topic={topic}
            setTopics={setTopics}
            removeTopic={(id) => {
              setTopics((_topics) => _topics.filter((t) => t.id !== id));
            }}
            topicIndex={topicIndex}
            key={topic.id}
            errors={validationErrs[`topics[${topicIndex}]`]}
          />
        ))}
        {topics?.length < 5 && Number(id) !== 1 && (
          <Row>
            <Col w={[4, 4, 4]}>
              <TextWithIcon
                text="Add another topic"
                isButton
                mt="33px"
                handleClick={addNewTopic}
                mb={'57px'}
                iconProps={{
                  color: 'primaryMain',
                  icon: 'add',
                }}
              />
            </Col>
          </Row>
        )}
      </>

      <Row
        style={{
          flex: 1,
          alignItems: 'flex-end',
        }}
      >
        {httpError && (
          <Col w={[4, 12, 12]}>
            <T.P mb="2" color="error">
              {httpError}
            </T.P>
          </Col>
        )}
        {Object.values(validationErrs)?.length ? (
          <Col w={[4, 12, 12]}>
            <T.P mb="2" color="error">
              At least one of the input fields has not been filled in or details
              entered incorrectly. Please check the form above for more details.
            </T.P>
          </Col>
        ) : null}
        <Col w={[4, 12, 6]}>
          <Button
            text={saveButtonLabel()}
            handleClick={handleSubmit}
            loading={state.loading}
            mt="4"
            mb="4"
          />
        </Col>
        {id !== 'new' && !review && (
          <Col w={[4, 12, 6]}>
            <Button
              text="Save and preview"
              handleClick={(e) => {
                saveForPreview.current = true;
                handleSubmit(e);
              }}
              variant="secondary"
              loading={state.loading}
              mb="4"
              mt="4"
            />
          </Col>
        )}
        {review && (
          <Col w={[4, 12, 6]}>
            <Button
              text="Preview in a new tab"
              to={previewPage}
              external
              variant="secondary"
              mb="4"
              mt="4"
            />
          </Col>
        )}
      </Row>
      {user.role === roles.SUPER_ADMIN && (
        <TextWithIcon
          text="Reject section"
          icon="close"
          color="neutralMain"
          iconColor="primaryDark"
          to={`${navRoutes.SUPER_ADMIN.REJECT_SECTION.replace(
            ':id',
            id
          )}?organisationId=${organisationId}`}
          weight="medium"
          m={{
            mt: 4,
          }}
        />
      )}
      <Modal
        visible={isUpdateModalVisible}
        setIsModalVisible={setIsUpdateModalVisible}
        parentFunc={() => {
          review && navigate(navRoutes.SUPER_ADMIN.CONTENT_REVIEW);
        }}
        type="updateSuccess"
        title={review ? 'Section approved' : 'Updated'}
        description={
          review
            ? 'Success! The section has been approved.'
            : 'Changes successfully updated.'
        }
        btnText={review ? 'Great, continue' : 'Okay'}
      />
    </>
  );
};

export default SectionForm;
