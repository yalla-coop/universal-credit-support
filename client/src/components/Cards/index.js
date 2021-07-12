import * as S from './style';
import * as T from '../Typography';
import Icon from '../Icon';
import { Link } from 'react-router-dom';

const Card = ({
  variant = 'primary',
  direction = 'left',
  content,
  children,
  title,
  withTick,
  to = '/',
  ...props
}) => {
  const bgColor = `${variant}Light`;
  const borderColor = `${variant}Mid`;
  const circleColor = `${variant}Main`;
  const renderChild = () => {
    if (withTick) {
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
    <Link to={to}>
      <S.Container bgColor={bgColor} direction={direction}>
        <T.P small>{content}</T.P>
        <S.Circle
          circleColor={circleColor}
          borderColor={borderColor}
          direction={direction}
        >
          {renderChild()}
        </S.Circle>
      </S.Container>
    </Link>
  );
};

export default Card;
