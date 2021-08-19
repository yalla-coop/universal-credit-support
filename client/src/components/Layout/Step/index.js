import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const Step = ({
  children,
  goBack,
  maxWidth,
  side,
  gradient,
  color,
  showColorOnMobile,
  ...props
}) => {
  return (
    <S.Main side={side} {...props}>
      <S.SideDiv
        gradient={gradient}
        color={color}
        showColorOnMobile={showColorOnMobile}
      />
      <S.ContentHalf>{children}</S.ContentHalf>
    </S.Main>
  );
};

Step.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Step;
