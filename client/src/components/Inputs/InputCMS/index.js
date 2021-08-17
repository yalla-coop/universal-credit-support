import { useState } from 'react';
import * as T from '../../Typography';
import * as S from './style';

import { BasicInput, InputArray } from '../index';
import TextWithIcon from '../../TextWithIcon';

const InputCMS = ({
  formState = {},
  handleChange,
  hideRemove,
  handleRemove,
}) => {
  const [expanded, setExpanded] = useState(false);

  const { title, description, things, tips } = formState;

  const updateState = (val, key) => {
    console.log('val', val, key);
    handleChange({ ...formState, [key]: val });
  };

  return (
    <>
      <S.Section>
        <BasicInput
          label="Title"
          value={title}
          handleChange={(val) => updateState(val, 'title')}
          name="title"
        />
        <TextWithIcon
          text={expanded ? 'See less' : 'See more'}
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
              mb="5"
            />
            <InputArray
              label="This can include things like"
              name="things"
              values={things}
              handleChange={(val) => updateState(val, 'things')}
              optional
              mb="5"
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
