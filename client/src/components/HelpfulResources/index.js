import Icon from '../Icon';
import * as T from '../Typography';
import { useTranslation } from 'react-i18next';
import { common } from '../../constants';
import { checkLink } from '../../helpers';

import * as S from './style';

const HelpfulResources = ({ resources = [], ...props }) => {
  const { t } = useTranslation();
  return (
    <S.Wrapper {...props}>
      <S.Title>
        <Icon icon="discover" color="primaryMain" />
        <T.H2 ml="2" color="neutralMain">
          {t(
            'common.heading.helpfulResources',
            common.heading.helpfulResources
          )}
        </T.H2>
      </S.Title>

      {resources.map((r, index) => (
        <S.LinkWrapper
          href={checkLink(r.value || r.url)}
          target="_blank"
          key={r.label + index}
        >
          <Icon icon="open" pointer color="primaryMain" />
          <T.P weight="medium" ml="2" underline>
            {r.label}
          </T.P>
        </S.LinkWrapper>
      ))}
    </S.Wrapper>
  );
};

export default HelpfulResources;
