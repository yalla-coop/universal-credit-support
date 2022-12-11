import Icon from '../Icon';
import * as S from './style';
import * as T from '../Typography';
import { useTranslation } from 'react-i18next';
import { common } from '../../constants';

const StillNeedHelp = ({ phoneNumber, name, ...props }) => {
  const { t } = useTranslation();
  return (
    <S.Wrapper {...props}>
      <S.Title>
        <Icon icon="discover" color="primaryMain" />
        <T.H2 ml="2" color="neutralMain">
          {t(
            'common.section.stillNeedHelp.title',
            common.section.stillNeedHelp.title
          )}
        </T.H2>
      </S.Title>

      <S.ContentWrapper>
        <S.IconWrapper>
          <Icon icon="phone" width="26px" height="26px" color="primaryMain" />
        </S.IconWrapper>
        <T.P ml="3" color="neutralDark">
          {t(
            'common.section.stillNeedHelp.subtitle',
            common.section.stillNeedHelp.subtitle
          )}
          <T.Link
            weight="bold"
            external
            href={`tel:${phoneNumber}`}
            underline={!!name}
            dir={'ltr'}
          >
            {name || phoneNumber}
          </T.Link>{' '}
        </T.P>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default StillNeedHelp;
