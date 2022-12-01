import {
  Grid as G,
  Typography as T,
  Inputs as I,
  TextWithIcon,
} from '../../../components';

const newItem = {
  title: '',
  description: '',
  thisCanInclude: [],
  tips: [],
};

const ThingsYouWillNeed = ({ state, setState, errors }) => {
  return (
    <>
      <G.Row mt="8">
        <G.Col w={[4, 4, 4]}>
          <T.H2>Things you’ll need</T.H2>
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
                  thingsYouWillNeed: state.filter((element, i) => i !== index),
                })
              }
              handleChange={(input) =>
                setState({
                  thingsYouWillNeed: state.map((element, i) =>
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
            text="Add another thing you’ll need"
            isButton
            mt="4"
            color="neutralMain"
            handleClick={() =>
              setState({
                thingsYouWillNeed: [...state, newItem],
              })
            }
            weight="semi"
            disabled={!state.every((item) => item.title)}
            iconProps={{
              color: 'primaryDark',
              icon: 'add',
            }}
          />
        </G.Col>
      </G.Row>
    </>
  );
};

export default ThingsYouWillNeed;
