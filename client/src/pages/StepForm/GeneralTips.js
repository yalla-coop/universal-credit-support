import { Grid as G, Typography as T, Inputs as I } from '../../components';

// InputArray
const GeneralTips = ({ state, setState, errors = {} }) => {
  return (
    <>
      <G.Row mt="8">
        <G.Col w={[4, 4, 4]}>
          <T.H2>General Tips</T.H2>
        </G.Col>
      </G.Row>
      <G.Row mt="6">
        <G.Col w={[4, 12, 4]}>
          <I.Textarea
            label="Top Tip"
            optional
            placeholder="type tip here..."
            helper="This is the most important tip, which you want to show at the top of the page"
            value={state.topTip}
            error={errors.topTip}
            rows="4"
            handleChange={(input) => setState({ topTip: input })}
          />
        </G.Col>
        <I.InputArray
          type="textarea"
          placeholder="type tip here..."
          values={state}
          handleChange={(updateValues) => setState({ otherTips: updateValues })}
          label="Other Tips"
          optional
          error={errors.otherTips}
        />
      </G.Row>
    </>
  );
};

export default GeneralTips;
