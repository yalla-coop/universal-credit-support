import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';
import TextWithIcon from '../TextWithIcon';

const renderChild = (isCompleted, title) => {
  if (isCompleted) {
    return (
      <>
        <Icon icon="tick" color="neutralMain" />
        <T.P
          weight="bold"
          color="neutralMain"
          mt="4"
          ta="center"
          style={{ maxWidth: 120 }}
        >
          {title}
        </T.P>
      </>
    );
  }
  return (
    <T.H2
      weight="bold"
      color={isCompleted ? 'neutralMain' : 'white'}
      ta="center"
    >
      {title}
    </T.H2>
  );
};

const Card = forwardRef(
  (
    {
      variant = 'primary',
      direction = 'right',
      content,
      children,
      title,
      description,
      isCompleted,
      handleClick,
      isJustCompletedOne,
      to = '/',
      isOptional,
      loadingSteps,
      ...props
    },
    ref
  ) => {
    const bgColor = `${variant}Light`;
    const borderColor =
      variant === 'neutral' ? `${variant}Light` : `${variant}Mid`;
    const circleColor =
      variant === 'neutral' ? `${variant}Mid` : `${variant}Main`;

    if (isOptional)
      return (
        <S.Wrapper onClick={handleClick} mb="8" {...props} ref={ref}>
          <S.StyledLink
            to={to}
            style={{ color: 'transparent', width: '100%' }}
            disabled={loadingSteps}
          >
            <S.OptionalContainer>
              <T.H2 color="neutralMain" mb="4">
                {title}
              </T.H2>
              <T.P color="neutralDark" mb="4">
                {description}
              </T.P>
              <TextWithIcon
                text="Check here"
                color="neutralMain"
                to={to}
                iconProps={{
                  color: 'primaryMain',
                  icon: 'forwardArrow',
                }}
              />
            </S.OptionalContainer>
          </S.StyledLink>
        </S.Wrapper>
      );

    return (
      <S.Wrapper bgColor={bgColor} onClick={handleClick} {...props} ref={ref}>
        <Link to={to} style={{ color: 'transparent' }} disabled={loadingSteps}>
          <S.Container direction={direction}>
            {isCompleted && (
              <T.P
                weight="bold"
                color="neutralMain"
                style={{ alignSelf: 'flex-start' }}
                mb="2"
              >
                Completed!
              </T.P>
            )}
            <T.P
              isSmall
              color="neutralMain"
              style={{
                width: '100%',
              }}
              ellipsis={{ rows: 3, expandable: true, symbol: ' ' }}
            >
              {description}
            </T.P>
            <S.Circle
              circleColor={circleColor}
              borderColor={borderColor}
              direction={direction}
              isJustCompletedOne={isJustCompletedOne}
            >
              {renderChild(isCompleted, title)}
            </S.Circle>
          </S.Container>
        </Link>
      </S.Wrapper>
    );
  }
);

export default Card;
