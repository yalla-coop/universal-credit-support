import { useState } from 'react';
import { TextWithIcon, Icon } from '../../components';
import { Row } from '../Grid';
import { Grid } from 'antd';
import { FlagMap } from '../../components/Icon';
import { BasicInput } from '../Inputs/index';
import * as S from './style';
const { useBreakpoint } = Grid;

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
  ts: 'Turkish',
  fs: 'Welsh',
  gs: 'Swedish',
  vs: 'Japanese',
  am: 'Bambara',
  qm: 'German',
  am: 'Russian',
  lm: 'Italian',
  ii: 'Hide on mobile',
};

export const LanguageSelector = () => {
  const [search, setSearch] = useState('');

  const screens = useBreakpoint();
  const sliceTo = Object.entries(screens)
    .filter((screen) => !!screen[1])
    .map((screen) => screen[0])
    .includes('sm')
    ? languageCodes.length
    : 12;

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
    </Row>
  );
};
