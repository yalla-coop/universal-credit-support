import { useState } from 'react';
import * as S from './style';
import * as T from '../../Typography';
import { Checkbox } from '../../Inputs';
import TextWithIcon from '../../TextWithIcon';
import Tips from '../Tips';

const Checklist = ({
  title,
  name,
  description,
  things,
  tips,
  handleChange,
  completed,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <S.Section mb="3">
        <Checkbox
          label={title}
          handleChange={handleChange}
          name={name}
          checked={completed}
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
            {description && <T.P>{description}</T.P>}
            {things && <T.H3>This can include things like:</T.H3>}
          </>
        )}
      </S.Section>
      {expanded && tips && <Tips tips={tips} />}
    </>
  );
};

export default Checklist;
