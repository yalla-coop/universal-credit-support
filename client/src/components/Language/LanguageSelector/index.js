import { useState } from 'react';
import { TextWithIcon, Icon } from '../../../components';
import { FlagMap } from '../../../components/Icon';
import { BasicInput } from '../../Inputs/index';
import * as S from './style';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../theme';

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
  as: 'French',
  gs: 'Swedish',
  vs: 'Japanese',
  am: 'Bambara',
  qm: 'German',
  am: 'Russian',
  lm: 'Italian',
  ii: 'Dutch',
  zz: 'Portugese',
  nj: 'Hide on mobile',
};

export const LanguageSelector = ({ hide }) => {
  const [search, setSearch] = useState('');

  const sliceTo =
    useMediaQuery({
      query: `(max-width: ${theme.breakpoints.tablet})`,
    }) === true
      ? 12
      : languageCodes.length;

  const languages = Object.entries(languageCodes).filter(([code, language]) => {
    return (
      code.toLowerCase().includes(search.toLowerCase()) ||
      language.toLowerCase().includes(search.toLowerCase())
    );
  });

  const Selector = (
    <S.Wrapper>
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
        {languages
          .map(([code, language]) => {
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
          })
          .slice(0, sliceTo)}
      </S.ButtonWrapper>
    </S.Wrapper>
  );
  return hide === true ? null : Selector;
};
