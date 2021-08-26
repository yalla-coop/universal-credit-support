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

  const { title, description, things, tips } = formState;

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
              name="things"
              values={things}
              handleChange={(val) => updateState(val, 'things')}
              optional
              mb="5"
              error={error?.things}
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
