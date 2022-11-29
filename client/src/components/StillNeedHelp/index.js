import Icon from '../Icon';

import * as S from './style';
import * as T from '../Typography';

const StillNeedHelp = ({ phoneNumber, name, ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.Title>
        <Icon icon="discover" color="primaryDark" />
        <T.H2 ml="2" color="neutralMain">
          Still need help?
        </T.H2>
      </S.Title>

      <S.ContentWrapper>
        <S.IconWrapper>
          <Icon icon="phone" width="26px" height="26px" color="primaryDark" />
        </S.IconWrapper>
        <T.P ml="3" color="neutralDark">
          If you’d like to talk to someone, call{' '}
          <T.Link
            weight="bold"
            external
            href={`tel:${phoneNumber}`}
            underline={!!name}
          >
            {name || phoneNumber}
          </T.Link>{' '}
        </T.P>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default StillNeedHelp;
