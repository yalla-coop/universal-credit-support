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
          icon="forwardArrow"
          iconColor={iconColor}
          text={name}
          isText
        />
        {(showMenuIcon || handleEdit) && (
          <S.ButtonWrapper>
            {handleEdit && (
              <TextWithIcon
                icon="edit"
                iconColor="primaryMain"
                pointer
                isButton
                text="Edit"
                mr="1"
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
            icon="hide"
            iconColor="primaryMain"
            isButton
            pointer
            text={hidden ? 'Show' : 'Hide'}
            mr="1"
          />
        </S.HideWrapper>
      )}
    </S.ButtonWrapper>
  );
};

export default SingleButton;
