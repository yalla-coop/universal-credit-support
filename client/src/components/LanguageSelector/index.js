import { useState } from 'react';
import { TextWithIcon, Icon } from '../../components';
import { Row } from '../Grid';
import { FlagMap } from '../../components/Icon';
import { BasicInput } from '../Inputs/index';
import * as S from './style';

const props = {
  weight: 'medium',
  mr: 2,
  isButton: true,
};

const languageCodes = {
  ar: 'Arabic',
  en: 'English',
  es: 'Spanish',
  bm: 'Bambara',
};

export const LanguageSelector = () => {
  const [search, setSearch] = useState('');

  const languages = Object.entries(languageCodes).filter(([code, language]) => {
    return (
      code.toLowerCase().includes(search.toLowerCase()) ||
      language.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <Row>
      <S.ButtonWrapper>
        <BasicInput
          handleChange={(val) => setSearch(val)}
          label="Search Language"
          value={search}
          name="search-language"
          placeholder="Search"
          suffix={<Icon icon="search" color="neutralMain" />}
        />
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        {languages.map(([code, language]) => {
          return (
            <S.Button>
              <TextWithIcon
                handleClick={() => null}
                text={language}
                icon={FlagMap[code] !== undefined ? code : null}
                {...props}
              />
            </S.Button>
          );
        })}
      </S.ButtonWrapper>
    </Row>
  );
};
