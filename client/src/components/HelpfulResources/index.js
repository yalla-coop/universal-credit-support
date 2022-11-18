import Icon from '../Icon';
import * as T from '../Typography';

import * as S from './style';

const HelpfulResources = ({ resources = [], ...props }) => {
  return (
    <S.Wrapper {...props}>
      <S.Title>
        <Icon icon="discover" color="primaryMain" />
        <T.H2 ml="2" color="neutralMain">
          Helpful resources
        </T.H2>
      </S.Title>

      {resources.map((r, index) => (
        <S.LinkWrapper
          href={r.value || r.url}
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
