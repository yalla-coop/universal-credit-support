import React from 'react';
import styled from '@emotion/styled';
import setMargin from '../../helpers/set-margin';

const imgMap = {};

const StyledImage = styled.img`
  max-width: 100%;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  ${setMargin}
`;

const Image = ({
  image,
  width,
  height,
  margin,
  alt = 'Therapy Illustration',
  customStyle,
  ...props
}) => {
  if (!imgMap[image]) {
    // eslint-disable-next-line no-console
    console.warn(`<Image /> called with invalid image prop "${image}"`);
    return null;
  }

  return (
    <StyledImage
      src={imgMap[image]}
      alt={alt}
      width={width}
      height={height}
      margin={margin}
      style={{ ...customStyle }}
      {...props}
    />
  );
};

export default Image;
