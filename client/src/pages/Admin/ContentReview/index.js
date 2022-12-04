import { useEffect, useState } from 'react';
import { Sections } from '../../../api-calls';
import { Typography as T, Grid } from '../../../components';
import { useAuth } from '../../../context/auth';
import Loading from '../../../components/Loading';
import ContentRow from './ContentRow';

const { Row, Col } = Grid;

const ContentReview = () => {
  const [sections, setSections] = useState([]);
  const [error, setError] = useState('');
  const { user: loggedInUser } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSection = async () => {
      setLoading(true);
      const { data, error } = await Sections.getAwaitingSections({});
      if (error) {
        setError(error.message);
      } else {
        setSections(data);
      }
      setLoading(false);
    };

    getSection();
  }, []);

  if (loading) return <Loading type={'page'} />;
  return (
    <>
      <Row>
        <Col w={[4, 12, 12]}>
          <T.H1 mtM="5" style={{ width: '100%' }}>
            Content review
          </T.H1>
        </Col>
      </Row>
      {sections.length ? (
        <>
          <Row mt="8">
            <Col w={[0, 0, 3]}>
              <T.P color="neutralMain" mb="6" weight="bold">
                Name
              </T.P>
            </Col>
            <Col w={[0, 0, 4]}>
              <T.P color="neutralMain" mb="6" weight="bold">
                Email
              </T.P>
            </Col>
            <Col w={[0, 0, 4]}>
              <T.P color="neutralMain" mb="6" weight="bold">
                View content
              </T.P>
            </Col>
          </Row>
          <>
            {sections &&
              sections
                .sort((a, b) => a.organisationId - b.organisationId)
                .map((section) => (
                  <Row key={section.id} ai="center" mb={6} mbT={2}>
                    <ContentRow
                      id={section.id}
                      title={section.title}
                      organisationName={section.organisation.name}
                      organisationId={section.organisation.id}
                      organisationUniqueSlug={section.organisation.uniqueSlug}
                      email={section.user.email}
                      loggedInUser={loggedInUser}
                    />
                  </Row>
                ))}
          </>
        </>
      ) : (
        <Row mt="10">
          <Col w={[4, 12, 12]}>
            <T.P mb="6" weight="regular">
              No content to review currently.
            </T.P>
          </Col>
        </Row>
      )}
      {error && <T.P color="error">{error}</T.P>}
    </>
  );
};

export default ContentReview;
