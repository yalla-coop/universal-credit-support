import { useState } from 'react';
import * as S from './style';
import { BasicInput, InputArray } from '../index';
import TextWithIcon from '../../TextWithIcon';
import { useTranslation } from 'react-i18next';
import { common } from '../../../constants';

const InputCMS = ({
  formState = {},
  handleChange,
  hideRemove,
  handleRemove,
  error = {},
}) => {
  const [expanded, setExpanded] = useState(false);

  const { title, description, thisCanInclude, tips } = formState;
  const updateState = (val, key) => handleChange({ ...formState, [key]: val });

  const { t } = useTranslation();

  const seeMore = t('common.buttons.seeMore', common.buttons.seeMore);
  const seeLess = t('common.buttons.seeLess', common.buttons.seeLess);
  const seeMoreOrLess = expanded ? seeLess : seeMore;

  return (
    <>
      <S.Section>
        <BasicInput
          label="Title"
          value={title}
          handleChange={(val) => updateState(val, 'title')}
          name="title"
          error={error?.title}
        />
        <TextWithIcon
          text={seeMoreOrLess}
          icon="circleArrow"
          isButton
          mt="4"
          color="neutralDark"
          iconColor="neutralDark"
          direction={expanded ? 'up' : 'down'}
          handleClick={() => setExpanded(!expanded)}
          mb={expanded && '5'}
        />
        {expanded && (
          <>
            <BasicInput
              label="Description"
              value={description}
              handleChange={(val) => updateState(val, 'description')}
              name="description"
              optional
              error={error?.description}
              mb="5"
            />
            <InputArray
              label="This can include things like"
              name="thisCanInclude"
              values={thisCanInclude?.length ? thisCanInclude : ['']}
              handleChange={(val) => updateState(val, 'thisCanInclude')}
              optional
              mb="5"
              error={error?.thisCanInclude}
            />
            <InputArray
              label="Tips"
              name="tips"
              values={tips?.length ? tips : ['']}
              handleChange={(val) => updateState(val, 'tips')}
              optional
              mb="4"
              error={error?.tips}
            />
          </>
        )}
      </S.Section>
      {!hideRemove && (
        <TextWithIcon
          text="Remove"
          icon="close"
          isButton
          mt="4"
          color="neutralMain"
          iconColor="primaryMain"
          handleClick={handleRemove}
          weight="semi"
        />
      )}
    </>
  );
};

export default InputCMS;
