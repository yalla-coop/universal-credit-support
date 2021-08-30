import {
  Grid as G,
  Typography as T,
  Inputs as I,
  TextWithIcon,
} from '../../components';

const newItem = {
  title: '',
  description: '',
  thisCanInclude: [''],
  tips: [''],
};

const WhatYouWillNeedToKnow = ({ state, setState, errors }) => {
  return (
    <>
      <G.Row mt="8">
        <G.Col w={[4, 4, 4]}>
          <T.H2>What you’ll need to know</T.H2>
        </G.Col>
      </G.Row>
      <G.Row>
        {state.map((item, index) => (
          <G.Col w={[4, 4, 4]} key={index} mt="6">
            <I.InputCMS
              formState={item}
              hideRemove={state.length === 1}
              handleRemove={() =>
                setState({
                  whatYouWillNeedToKnow: state.filter(
                    (element, i) => i !== index
                  ),
                })
              }
              handleChange={(input) =>
                setState({
                  whatYouWillNeedToKnow: state.map((element, i) =>
                    i === index ? input : element
                  ),
                })
              }
              error={errors && errors[index]}
            />
          </G.Col>
        ))}
      </G.Row>
      <G.Row mt="4">
        <G.Col w={[4, 4, 4]}>
          <TextWithIcon
            text="Add a new thing you’ll need to know"
            icon="add"
            isButton
            mt="4"
            color="neutralMain"
            iconColor="primaryMain"
            handleClick={() =>
              setState({
                whatYouWillNeedToKnow: [...state, newItem],
              })
            }
            weight="semi"
            disabled={!state.every((item) => item.title)}
          />
        </G.Col>
      </G.Row>
    </>
  );
};

export default WhatYouWillNeedToKnow;
