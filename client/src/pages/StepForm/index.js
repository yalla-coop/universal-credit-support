import { useRef, useReducer, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid as G,
  Typography as T,
  Inputs as I,
  Button,
  // TextWithIcon,
  Modal,
} from '../../components';
// import { navRoutes as R } from '../../constants';
import ThingsYouWillNeed from './ThingsYouWillNeed';
import WhatYouWillNeedToKnow from './WhatYouWillNeedToKnow';
import GeneralTips from './GeneralTips';

import { StepForm as validate } from '../../validation/schemas';
import { Steps } from '../../api-calls';
import { whereDoYouNeedToGoTypes } from '../../constants/data-types';

const initialState = {
  isOptional: false,
  title: '',
  description: '',
  httpError: '',
  whereDoYouNeedToGo: {
    link: '',
    type: '',
    title: '',
  },
  timeRangeText: '',
  thingsYouWillNeed: [{ title: '', description: '', things: [''], tips: [''] }],
  whatYouWillNeedToKnow: [
    { title: '', description: '', things: [''], tips: [''] },
  ],
  topTip: '',
  otherTips: [''],
  validationErrs: { whereDoYouNeedToGo: {}, ThingsYouWillNeed: {} },
  loading: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}

const StepForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    isOptional,
    title,
    description,
    whereDoYouNeedToGo,
    timeRangeText,
    thingsYouWillNeed,
    whatYouWillNeedToKnow,
    validationErrs,
    httpError,
    otherTips,
    topTip,
  } = state;

  console.log(`state`, state);
  // id: 1
  // isOptional: true
  // otherTips: Array(1)
  // 0: "Keep hold of any documents you dig out to help you work out the bits you need to know for the calculator. These are often needed in the application so having them stored can be helpful to make things quicker!"
  // length: 1
  // [[Prototype]]: Array(0)
  // pageDescription: "Using the benefit calculator enables you to find out an estimate of how much Universal Credit you may be entitled to."
  // pageTitle: "Should you claim?"
  // stage: "BEFORE_CLAIMING"
  // stepOrder: 1
  // thingsYouWillNeed: Array(0)
  // length: 0
  // [[Prototype]]: Array(0)
  // title: "Wait! Should I apply?"

  // whatYouWillNeedToKnow: Array(5)
  // 0: {title: "Income details", description: "", thisCanInclude: Array(3), tips: Array(1)}
  // 1: {title: "Details of any capital, savings and investments", description: "", thisCanInclude: Array(0), tips: Array(1)}
  // 2: {title: "Housing costs", description: "You can get this from your landlord or mortgage provider.", thisCanInclude: Array(4), tips: Array(0)}
  // 3: {title: "Childcare costs", description: "", thisCanInclude: Array(0), tips: Array(0)}
  // 4: {title: "Income details of any other adults living in the p…t lodgers e.g. grown up children, elderly parents", description: "", thisCanInclude: Array(0), tips: Array(0)}
  // length: 5
  // [[Prototype]]: Array(0)

  const { id: stepId } = useParams();

  useEffect(() => {
    const getStepData = async () => {
      setState({ loading: true });
      const { error, data } = await Steps.getStepById(stepId);

      console.log(`data`, data);
      setState({ loading: false });
      if (error) {
        return setState({ httpError: error.message });
      }
      setState({
        ...data,
        timeRangeText: data?.howLongDoesItTake?.timeRangeText,
        // whereDoYouNeedToGo: data?.whereDoYouNeedToGo?.length
        //   ? data.whereDoYouNeedToGo
        //   : initialState.whereDoYouNeedToGo,

        thingsYouWillNeed: data?.thingsYouWillNeed?.length
          ? data.thingsYouWillNeed
          : initialState.thingsYouWillNeed,
        otherTips: data?.otherTips?.length
          ? data.otherTips
          : initialState.otherTips,
      });
    };

    getStepData();
  }, [stepId]);

  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    title,
    description,
    whereDoYouNeedToGo.title,
    whereDoYouNeedToGo.link,
    whereDoYouNeedToGo.type,
    topTip,
    timeRangeText,
  ]);

  const validateForm = () => {
    try {
      validate({
        ...state,
        whatYouWillNeedToKnow: whatYouWillNeedToKnow.filter(
          (e, i) => !(i === whatYouWillNeedToKnow.length - 1 && !e.title)
        ),
        thingsYouWillNeed: thingsYouWillNeed.filter(
          (e, i) => !(i === thingsYouWillNeed.length - 1 && !e.title)
        ),
        otherTips: otherTips.filter(
          (e, i) => !(i === otherTips.length - 1 && !e)
        ),
      });
      setState({ validationErrs: {} });
      return true;
    } catch (error) {
      console.log(error);
      if (error.name === 'ValidationError') {
        setState({ validationErrs: error.inner });
      }
      return false;
    }
  };

  const handleEditStep = async () => {
    setState({ loading: true });

    const { error } = await Steps.editStep({
      id: stepId,
      form: {
        ...state,
        whatYouWillNeedToKnow: whatYouWillNeedToKnow.filter(
          (e, i) => !(i === whatYouWillNeedToKnow.length - 1 && !e.title)
        ),
        thingsYouWillNeed: thingsYouWillNeed.filter(
          (e, i) => !(i === thingsYouWillNeed.length - 1 && !e.title)
        ),
      },
    });

    setState({ loading: false });
    if (error) {
      setState({ httpError: error.message });
    } else {
      setIsModalVisible(true);
      // after that the user should be directed to its dashboard
      // history.push(R.ADMIN.HOME);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      handleEditStep();
    }
  };

  return (
    <>
      <G.Row>
        <G.Col w={[4, 12, 12]}>
          <T.H1 mb="6">Edit Step</T.H1>
          <I.Checkbox
            label="This step is optional"
            checked={isOptional}
            handleChange={(checked) => setState({ isOptional: checked })}
          />
        </G.Col>
      </G.Row>
      <G.Row mt="8">
        <G.Col w={[4, 6, 4]}>
          <I.BasicInput
            name="title"
            placeholder="Type title here..."
            label="Title"
            error={validationErrs.title}
            value={title}
            handleChange={(input) => setState({ title: input })}
          />
        </G.Col>
        <G.Col w={[4, 6, 4]}>
          <I.Textarea
            name="description"
            value={description}
            placeholder="Type description here..."
            label="Description"
            handleChange={(input) => setState({ description: input })}
            rows="4"
            error={validationErrs.description}
          />
        </G.Col>
      </G.Row>

      {/* Where do you need to go Section*/}

      <G.Row mt="8" mb="6">
        <G.Col w={[4, 6, 4]}>
          <T.H2 style={{ width: '100%' }}>Where do you need to go?</T.H2>
          <T.P color="neutralDark">(optional)</T.P>
        </G.Col>
      </G.Row>
      <G.Row>
        <G.Col w={[4, 6, 4]}>
          <I.BasicInput
            name="link"
            placeholder="Type external link / number here..."
            label="External link / number"
            error={validationErrs?.whereDoYouNeedToGo?.link}
            handleChange={(input) =>
              setState({
                whereDoYouNeedToGo: { ...whereDoYouNeedToGo, link: input },
              })
            }
            value={whereDoYouNeedToGo?.link}
          />
        </G.Col>
        <G.Col w={[4, 6, 4]}>
          <I.BasicInput
            name="title"
            placeholder="Type title here..."
            label="Title"
            value={whereDoYouNeedToGo?.title}
            error={validationErrs?.whereDoYouNeedToGo?.title}
            handleChange={(input) =>
              setState({
                whereDoYouNeedToGo: { ...whereDoYouNeedToGo, title: input },
              })
            }
          />
        </G.Col>
      </G.Row>
      <G.Row mt="6">
        <G.Col w={[4, 6, 4]}>
          <I.Dropdown
            label="Link or phone number?"
            options={[
              { label: ' external link', value: whereDoYouNeedToGoTypes.LINK },
              { label: 'phone number', value: whereDoYouNeedToGoTypes.PHONE },
            ]}
            selected={whereDoYouNeedToGo.type}
            handleChange={(selectValue) =>
              setState({
                whereDoYouNeedToGo: {
                  ...whereDoYouNeedToGo,
                  type: selectValue,
                },
              })
            }
            error={validationErrs?.whereDoYouNeedToGo?.type}
          />
        </G.Col>
      </G.Row>
      {/* How long does it take section */}
      <G.Row mt="8">
        <G.Col w={[4, 6, 4]}>
          <T.H2 mb="6">How long does it take?</T.H2>
          <I.BasicInput
            name="timeRangeText"
            placeholder="Type time range here..."
            label="Time range"
            error={validationErrs.timeRangeText}
            handleChange={(input) => setState({ timeRangeText: input })}
            value={timeRangeText}
          />
        </G.Col>
      </G.Row>
      <ThingsYouWillNeed
        state={thingsYouWillNeed}
        setState={setState}
        errors={validationErrs.thingsYouWillNeed}
      />
      <WhatYouWillNeedToKnow
        state={whatYouWillNeedToKnow}
        setState={setState}
        errors={validationErrs.whatYouWillNeedToKnow}
      />
      <GeneralTips
        otherTips={otherTips}
        topTip={topTip}
        setState={setState}
        errors={validationErrs}
      />
      <G.Row mt="10">
        {httpError && (
          <G.Col w={[4, 12, 12]}>
            <T.P mb="2" color="error">
              {httpError}
            </T.P>
          </G.Col>
        )}
        {Object.values(validationErrs)?.length ? (
          <G.Col w={[4, 12, 12]}>
            <T.P mb="2" color="error">
              {httpError}
            </T.P>
          </G.Col>
        ) : null}
        <G.Col w={[4, 6, 4]}>
          {/* <TextWithIcon
            to={R.ADMIN.PREVIEW_STEP}
            text="Preview changes"
            icon="forwardArrow"
            iconColor="primaryMain"
          /> */}
          <Button
            text="Save changes"
            handleClick={handleSubmit}
            mb="4"
            mt="4"
          />
          {/* <TextWithIcon
            to={R.ADMIN.DELETE_STEP}
            text="Delete step"
            icon="close"
            iconColor="primaryMain"
          /> */}
        </G.Col>
      </G.Row>
      <Modal
        visible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        parentFunc={() => {}}
        type="updateSuccess"
        title="Updated"
        description="Changes successfully updated."
        btnText="Okay"
      />
    </>
  );
};

export default StepForm;
