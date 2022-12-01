import { useState } from 'react';
import * as S from './style';

import { BasicInput, InputArray } from '../index';
import TextWithIcon from '../../TextWithIcon';

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
          text={expanded ? 'See less' : 'See more'}
          isButton
          mt="4"
          color="neutralDark"
          handleClick={() => setExpanded(!expanded)}
          mb={expanded && '5'}
          iconProps={{
            color: 'neutralDark',
            icon: 'circleArrow',
            direction: expanded ? 'up' : 'down',
          }}
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
          isButton
          mt="4"
          color="neutralMain"
          handleClick={handleRemove}
          weight="semi"
          iconProps={{
            color: 'primaryDark',
            icon: 'close',
          }}
        />
      )}
    </>
  );
};

export default InputCMS;
