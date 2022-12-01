import { Icon, TextWithIcon } from '../../components';
import * as S from './style';

const SingleButton = ({
  name,
  iconColor,
  showMenuIcon,
  handleEdit,
  handleHide,
  hidden,
  ...props
}) => {
  return (
    <S.ButtonWrapper {...props}>
      <S.ButtonContent>
        <TextWithIcon
          text={name}
          isText
          iconProps={{
            color: iconColor,
            icon: 'forwardArrow',
          }}
        />
        {(showMenuIcon || handleEdit) && (
          <S.ButtonWrapper>
            {handleEdit && (
              <TextWithIcon
                isButton
                text="Edit"
                mr="1"
                iconProps={{
                  color: 'primaryDark',
                  icon: 'edit',
                  pointer: true,
                }}
              />
            )}
            {showMenuIcon && (
              <S.MenuButton>
                <Icon icon="menu2" />
              </S.MenuButton>
            )}
          </S.ButtonWrapper>
        )}
      </S.ButtonContent>
      {handleHide && (
        <S.HideWrapper ml="2" mb="2">
          <TextWithIcon
            isButton
            text={hidden ? 'Show' : 'Hide'}
            mr="1"
            iconProps={{
              color: 'primaryDark',
              icon: 'hide',
              pointer: true,
            }}
          />
        </S.HideWrapper>
      )}
    </S.ButtonWrapper>
  );
};

export default SingleButton;
