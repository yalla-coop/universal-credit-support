import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';
import { Link } from 'react-router-dom';

const Card = ({
  variant = 'primary',
  direction = 'right',
  content,
  children,
  title,
  isCompleted,
  to = '/',
  ...props
}) => {
  const bgColor = `${variant}Light`;
  const borderColor = `${variant}Mid`;
  const circleColor = `${variant}Main`;
  const renderChild = () => {
    if (isCompleted) {
      return (
        <>
          <Icon icon="tick" color="white" />
          <T.P
            weight="bold"
            color="white"
            mt="4"
            ta="center"
            style={{ maxWidth: 150 }}
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
  return (
    <S.Wrapper bgColor={bgColor} {...props}>
      <Link to={to}>
        <S.Container direction={direction}>
          {isCompleted && (
            <T.P
              weight="bold"
              color="neutralTertiary"
              style={{ alignSelf: 'flex-start' }}
              mb="2"
            >
              Completed!
            </T.P>
          )}
          <T.P small color="neutralTertiary">
            {content}
          </T.P>
          <S.Circle
            circleColor={circleColor}
            borderColor={borderColor}
            direction={direction}
          >
            {renderChild()}
          </S.Circle>
        </S.Container>
      </Link>
    </S.Wrapper>
  );
};

export default Card;
