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
  allowEdit,
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
          iconProps={{
            color: iconColor,
            icon: 'forwardArrow',
          }}
        />
        {(showMenuIcon || handleEdit || allowEdit) && (
          <S.IconsWrapper>
            {(handleEdit || allowEdit) && (
              <TextWithIcon
                isButton
                handleClick={handleEdit}
                text="Edit"
                mr="1"
                iconProps={{
                  color: 'primaryMain',
                  icon: 'edit',
                  pointer: true,
                }}
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
            isButton
            text={hidden ? 'Show' : 'Hide'}
            handleClick={handleHide}
            mr="1"
            iconProps={{
              color: 'primaryMain',
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
