import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import B from '../../constants/benefit-calculator';
import GeneralPaddingSection from '../../components/Layout/GeneralPaddingSection';
import {
  TextWithIcon,
  Icon,
  Typography as T,
  Button,
  Grid,
  HelpButton,
  Cards,
  OrganisationLogo,
} from '../../components';
import { useSteps } from '../../context/steps';
import { useLang } from '../../context/lang';
import { t } from '../../helpers';
import { navRoutes as n, types } from '../../constants';

import * as S from './style';

import { usePublicOrg } from '../../context/public-org';

const { Row, Col } = Grid;
const { Tips, Checklist } = Cards;

const Section = () => {
  const [stuck, setStuck] = useState(false);
  const { publicOrg } = usePublicOrg();
  const params = useParams();
  const { lang } = useLang();
  const navigate = useNavigate();
  const { steps: fullSteps, checkUncheckItem, markAsComplete } = useSteps();

  const step = fullSteps.find((s) => s.id === Number(params.id));

  // if (!step) {
  //   navigate(n.GENERAL.NOT_FOUND);
  //   return null;
  // }

  const formatLink = (link, type) => {
    if (type === types.linkTypes.PHONE) {
      return `tel:${link}`;
    }
    return link;
  };

  const checkItem = (itemTitle) => {
    const foundItem = step.checklist.find((c) => c.title === itemTitle);
    return foundItem?.isChecked;
  };

  return (
    <S.Container>
      page header goes here
      <GeneralPaddingSection>page content</GeneralPaddingSection>
    </S.Container>
  );
};

export default Section;
