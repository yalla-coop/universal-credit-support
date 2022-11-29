import React from 'react';
import PropTypes from 'prop-types';
import * as S from './style';

const GeneralPaddingSection = ({ children, ...props }) => {
  return <S.Main {...props}>{children}</S.Main>;
};

GeneralPaddingSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GeneralPaddingSection;
