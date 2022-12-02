import { useState, useEffect } from 'react';
import { message } from 'antd';
import { useParams, generatePath } from 'react-router-dom';
import { Sections } from '../../../api-calls';
import { Typography as T, TextWithIcon, Grid } from '../../../components';
import PageHeader from '../../../components/PageHeader';
import GeneralPaddingSection from '../../../components/Layout/GeneralPaddingSection';
import { navRoutes } from '../../../constants';
import { usePublicOrg } from '../../../context/public-org';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../../helpers';
import { common } from '../../../constants';

import * as S from './style';
const { Col, Row } = Grid;

const SubSections = () => {
  const { i18n, t } = useTranslation();
  const { lng } = useLanguage();
  const [data, setData] = useState({});
  const { publicOrg, setPageTitle } = usePublicOrg();

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
  }, [id, lng]);

  const colorArr = [
    'primaryMain',
    'secondaryMain',
    'tertiaryMain',
    'neutralMain',
  ];

  i18n.addResourceBundle(lng, 'subsectionNS', {
    data,
  });

  const _data = t('data', { ns: 'subsectionNS', returnObjects: true });

  return (
    <S.Container>
      <PageHeader title={_data.title} />
      <GeneralPaddingSection>
        <Row jc="center" mb="4">
          <Col w={[4, 8, 6]}>
            <T.H2>
              {t(
                'common.section.subSection.description',
                common.section.subSection.description
              )}
            </T.H2>
          </Col>
        </Row>
        {_data?.childrenSections?.map((item, index) => (
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
