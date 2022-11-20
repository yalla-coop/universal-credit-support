import { useState } from 'react';
import { LanguageBar } from './LanguageBar';
import { LanguageSelector } from './LanguageSelector';
import * as S from './style';

const Language = () => {
  const [hide, setHide] = useState(true);

  const handleHide = () => {
    setHide(!hide);
  };

  return (
    <>
      <S.Wrapper hide={hide}>
        <LanguageBar handleHide={handleHide} />
        <LanguageSelector hide={hide} handleHide={handleHide} />
      </S.Wrapper>
    </>
  );
};

export default Language;
