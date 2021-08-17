import { useState } from 'react';
import * as T from '../../Typography';
import * as S from './style';

import { BasicInput } from '../index';
import TextWithIcon from '../../TextWithIcon';

const InputCMS = ({
  title,
  description,
  things,
  tips,
  handleChange,
  hideRemove,
  handleRemove,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <S.Section>
        <BasicInput label="Title" value={title} handleChange={handleChange} />
        <TextWithIcon
          text={expanded ? 'See less' : 'See more'}
          icon="circleArrow"
          isButton
          mt="4"
          color="neutralDark"
          iconColor="neutralDark"
          direction={expanded ? 'up' : 'down'}
          handleClick={() => setExpanded(!expanded)}
        />
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
