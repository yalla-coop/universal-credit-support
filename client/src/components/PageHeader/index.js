import Markdown from '../Markdown';
import * as S from './style';

const PageHeader = ({
  title,
  textColor = 'white',
  bgColor = 'section1BgColor',
  borderColor = 'white',
}) => {
  return (
    <S.Wrapper bgColor={bgColor}>
      <S.Border borderColor={borderColor}>
        <S.markDownContainer>
          <Markdown
            text={title}
            customStyles={{
              p: {
                fontSize: '2rem',
                fontSizeM: '24px',
                lineHeight: '44px',
                lineHeightM: '33.544px',
                color: textColor,
              },
              color: textColor,
            }}
          />
        </S.markDownContainer>
      </S.Border>
    </S.Wrapper>
  );
};

export default PageHeader;
