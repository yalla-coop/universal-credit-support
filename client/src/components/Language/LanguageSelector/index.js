import { useState } from 'react';
import { TextWithIcon, Icon } from '../../../components';
import { FlagMap } from '../../../components/Icon';
import { BasicInput } from '../../Inputs/index';
import * as S from './style';
import { useMediaQuery } from 'react-responsive';
import theme from '../../../theme';
import { types } from '../../../constants/';

const props = {
  weight: 'medium',
  mr: 2,
  isButton: true,
};

export const LanguageSelector = ({ hide, handleHide }) => {
  const [search, setSearch] = useState('');

  const sliceTo =
    useMediaQuery({
      query: `(max-width: ${theme.breakpoints.tablet})`,
    }) === true
      ? 12
      : types.languageCodes.length;

  const languages = Object.entries(types.languageCodes).filter(
    ([lang, code]) => {
      return (
        code.toLowerCase().includes(search.toLowerCase()) ||
        lang.toLowerCase().includes(search.toLowerCase())
      );
    }
  );

  const changeLanguage = ({ code, lang }) => {
    // i18n language changer
    console.log('Language changed to: ' + lang);
    handleHide();
  };

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
          .map(([lang, code]) => {
            const lng = lang.toLowerCase();
            return (
              <S.Button onClick={() => changeLanguage({ lang })} key={code}>
                <TextWithIcon
                  text={lang}
                  icon={FlagMap[lng] !== undefined ? lng : null}
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
