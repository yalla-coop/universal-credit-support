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
    <T.H1 weight="bold" color="white" ta="center">
      {title}
    </T.H1>
  );
};

const FormattedContent = ({ txt }) => {
  const arr = txt.split(/(<strong[a-z, A-Z]*>)/);
  let insideStrongTag = false;
  let underline = false;

  return (
    <>
      {arr.map((part) => {
        if (part.includes('strong')) {
          insideStrongTag = !insideStrongTag;

          if (part.includes('underline')) {
            underline = true;
          }
          return null;
        }

        if (insideStrongTag) {
          return <S.Strong underline={underline}>{part}</S.Strong>;
        }

        return part;
      })}
    </>
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
      optional,
      ...props
    },
    ref
  ) => {
    const bgColor = `${variant}Light`;
    const borderColor = `${variant}Mid`;
    const circleColor =
      variant === 'neutral' ? `${variant}Mid` : `${variant}Main`;

    if (optional)
      return (
        <S.Wrapper onClick={handleClick} mb="4" {...props} ref={ref}>
          <S.StyledLink to={to} style={{ color: 'transparent', width: '100%' }}>
            <S.OptionalContainer>
              <T.H2 color="neutralMain" mb="4">
                {title}
              </T.H2>
              <T.P color="neutralDark" mb="4">
                {description}
              </T.P>
              <TextWithIcon
                icon="forwardArrow"
                text="Check here"
                iconColor="primaryMain"
                color="neutralDark"
                to={to}
              />
            </S.OptionalContainer>
          </S.StyledLink>
        </S.Wrapper>
      );

    return (
      <S.Wrapper bgColor={bgColor} onClick={handleClick} {...props} ref={ref}>
        <Link to={to} style={{ color: 'transparent' }}>
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
            <T.P isSmall color="neutralMain">
              <FormattedContent txt={content} />
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
