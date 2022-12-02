import { Icon, TextWithIcon } from '../../components';
import * as S from './style';

const SingleButton = ({
  title,
  iconColor,
  showMenuIcon,
  handleEdit,
  handleHide,
  hidden,
  cursor,
  ...props
}) => {
  return (
    <S.ButtonWrapper cursor={cursor} {...props}>
      <S.ButtonContent>
        <TextWithIcon
          icon="forwardArrow"
          iconColor={iconColor}
          text={title.replace(/\*/g, '')}
          isText
        />
        {(showMenuIcon || handleEdit) && (
          <S.IconsWrapper>
            {handleEdit && (
              <TextWithIcon
                icon="edit"
                iconColor="primaryMain"
                pointer
                isButton
                handleClick={handleEdit}
                text="Edit"
                mr="1"
              />
            )}
            {showMenuIcon && (
              <S.MenuButton>
                <Icon icon="menu2" pointer />
              </S.MenuButton>
            )}
          </S.IconsWrapper>
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
            handleClick={handleHide}
            mr="1"
          />
        </S.HideWrapper>
      )}
    </S.ButtonWrapper>
  );
};

export default SingleButton;
