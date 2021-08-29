import { ContentAudiLogs } from '../../api-calls';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { Typography as T, Grid, TextWithIcon } from '../../components';
import * as S from './style';

const { Col, Row } = Grid;

const Changes = () => {
  const [changes, setChanges] = useState([]);
  const [pageError, setPageError] = useState('');
  const getChanges = async () => {
    const { data, error } = await ContentAudiLogs.getChanges();
    if (data) {
      setChanges(data);
    } else {
      setPageError(error.message);
    }
  };
  useEffect(() => {
    getChanges();
  }, []);

  return (
    <>
      <Row jc="space-between">
        <Col w={[4, 12, 12]}>
          <T.H1 mtM="5" style={{ width: '100%' }}>
            Content changes
          </T.H1>
          <T.P mt="7" mtM="4">
            Here is a log of any changes made to the core content of the tool.
          </T.P>
        </Col>
      </Row>
      <Row>
        {pageError && (
          <T.P color="error" m="0" mt="2" mb="4">
            {pageError}
          </T.P>
        )}
        {changes &&
          changes.map((change) => (
            <Col w={[4, 4, 4]} mt="6">
              <S.ContentWrapper>
                <T.P weight="bold" mr="2">
                  Date:
                </T.P>
                <T.P> {moment(change.updatedAt).format('DD/MM/YYYY')}</T.P>
              </S.ContentWrapper>
              <S.ContentWrapper>
                <T.P weight="bold" mr="2">
                  User:
                </T.P>
                <a
                  href={`mailto:${change.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <T.P color="secondaryMain"> {change.email}</T.P>
                </a>
              </S.ContentWrapper>
              {change.landingPageContentId ? (
                <TextWithIcon
                  m={{ mt: 3 }}
                  text="Landing page edited"
                  iconColor="primaryMain"
                  icon="forwardArrow"
                />
              ) : (
                <>
                  <T.P weight="bold" style={{ width: '100%' }}>
                    Step edited:
                  </T.P>
                  <TextWithIcon
                    m={{ mt: 3 }}
                    text={change.title}
                    iconColor="primaryMain"
                    icon="forwardArrow"
                  />
                </>
              )}
            </Col>
          ))}
      </Row>
    </>
  );
};

export default Changes;
