import { useState, useEffect } from 'react';
import { message } from 'antd';
import { useParams, generatePath } from 'react-router-dom';
import { Sections } from '../../../api-calls';
import { Typography as T, TextWithIcon, Grid } from '../../../components';
import PageHeader from '../../../components/PageHeader';
import GeneralPaddingSection from '../../../components/Layout/GeneralPaddingSection';
import { navRoutes } from '../../../constants';
import { usePublicOrg } from '../../../context/public-org';
import { useLanguage } from '../../../helpers';

import * as S from './style';
const { Col, Row } = Grid;

const SubSections = () => {
  const [data, setData] = useState({});
  const { publicOrg, setPageTitle } = usePublicOrg();
  const { lng } = useLanguage();

  const { id } = useParams();

  useEffect(() => {
    let mounted = true;
    async function fetchData() {
      const hideMessage = message.loading('Loading...');
      const { data: _data, error } = await Sections.getSubSections({
        id,
        forPublic: true,
        lng,
      });
      if (mounted) {
        if (error) {
          message.error('Something went wrong, please try again later');
        } else {
          setData(_data);
          setPageTitle(_data.title);
        }
        hideMessage();
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, [id]);
  const colorArr = [
    'primaryDark',
    'secondaryMain',
    'primaryMain',
    'neutralMain',
  ];
  return (
    <S.Container>
      <PageHeader title={data.title} />
      <GeneralPaddingSection>
        <Row jc="center" mb="4">
          <Col w={[4, 8, 6]}>
            <T.H2>
              So we can show you the best information, which one of these best
              describes you?
            </T.H2>
          </Col>
        </Row>
        {data?.childrenSections?.map((item, index) => (
          <Row jc="center" mb="2">
            <Col w={[4, 8, 6]}>
              <S.ButtonWrapper
                to={generatePath(navRoutes.PUBLIC_ORG.SECTION, {
                  id: item.id,
                  uniqueSlug: publicOrg?.uniqueSlug,
                })}
              >
                <TextWithIcon
                  size="large"
                  bgColor="neutralSurface"
                  text={item.title}
                  icon="forwardArrow"
                  iconColor={colorArr[index % colorArr.length]}
                  jc="center"
                  jcT="flex-start"
                  mr="6px"
                  isText
                />
              </S.ButtonWrapper>
            </Col>
          </Row>
        ))}
      </GeneralPaddingSection>
    </S.Container>
  );
};

export default SubSections;
