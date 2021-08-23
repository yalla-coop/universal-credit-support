import { useRef, useReducer, useEffect } from 'react';
import {
  Grid as G,
  Typography as T,
  Inputs as I,
  Button,
} from '../../components';
import ThingsYouWillNeed from './ThingsYouWillNeed';
import WhatYouWillNeedToKnow from './WhatYouWillNeedToKnow';
import GeneralTips from './GeneralTips';

import { StepForm as validate } from '../../validation/schemas';
import { Steps } from '../../api-calls';

const initialState = {
  isOptional: false,
  title: '',
  description: '',
  httpError: '',
  whereDoYouNeedToGo: {
    link: '',
    type: '',
    title: '',
  },
  timeRange: '',
  thingsYouWillNeed: [{ title: '', description: '', things: [''], tips: [''] }],
  whatYouWillNeedToKnow: [
    { title: '', description: '', things: [''], tips: [''] },
  ],
  topTip: '',
  otherTips: [''],
  validationErrs: { whereDoYouNeedToGo: {}, ThingsYouWillNeed: {} },
  loading: false,
};

function reducer(state, newState) {
  return { ...state, ...newState };
}

const StepForm = ({ edit }) => {
  const submitAttempt = useRef(false);
  const [state, setState] = useReducer(reducer, initialState);
  const {
    isOptional,
    title,
    description,
    whereDoYouNeedToGo,
    timeRange,
    thingsYouWillNeed,
    whatYouWillNeedToKnow,
    validationErrs,
    httpError,
    otherTips,
  } = state;
  useEffect(() => {
    if (submitAttempt.current) {
      validateForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  const validateForm = () => {
    try {
      validate(state);
      setState({ validationErrs: {} });
      return true;
    } catch (error) {
      if (error.name === 'ValidationError') {
        setState({ validationErrs: error.inner });
      }
      return false;
    }
  };

  const handleEditStep = async () => {
    const { error } = await Steps.EditStep(state);

    setState({ loading: false });
    if (error) {
      setState({ httpError: error.message });
    } else {
      // after that the user should be directed to its dashboard
      // history.push(R.ADMIN.HOME);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ loading: true });
    submitAttempt.current = true;

    const isValid = validateForm();
    if (isValid) {
      handleEditStep();
    }
  };

  return (
    <>
      <G.Row>
        <G.Col w={[4, 12, 12]}>
          <T.H1>{edit ? 'Edit' : 'Create'} Step</T.H1>
          <I.Checkbox
            label="This step is optional"
            checked={isOptional}
            handleChange={(checked) => setState({ isOptional: checked })}
          />
        </G.Col>
      </G.Row>
      <G.Row mt="8">
        <G.Col w={[4, 6, 4]}>
          <I.BasicInput
            name="title"
            placeholder="Type title here..."
            label="Title"
            error={validationErrs.title}
            value={title}
            handleChange={(input) => setState({ title: input })}
          />
        </G.Col>
        <G.Col w={[4, 6, 4]}>
          <I.Textarea
            name="description"
            value={description}
            placeholder="Type description here..."
            label="Description"
            handleChange={(input) => setState({ description: input })}
            rows="4"
            error={validationErrs.description}
          />
        </G.Col>
      </G.Row>

      {/* Where do you need to go Section*/}

      <G.Row mt="8" mb="6">
        <G.Col w={[4, 6, 4]}>
          <T.H2>Where do you need to go?</T.H2>
          <T.P color="neutralDark">(optional)</T.P>
        </G.Col>
      </G.Row>
      <G.Row>
        <G.Col w={[4, 6, 4]}>
          <I.BasicInput
            name="link"
            placeholder="Type external link / number here..."
            label="External link / number"
            error={validationErrs?.whereDoYouNeedToGo?.link}
            handleChange={(input) =>
              setState({
                whereDoYouNeedToGo: { ...whereDoYouNeedToGo, link: input },
              })
            }
          />
        </G.Col>
        <G.Col w={[4, 6, 4]}>
          <I.BasicInput
            name="title"
            placeholder="Type title here..."
            label="Title"
            value={whereDoYouNeedToGo.title}
            error={validationErrs?.whereDoYouNeedToGo?.title}
            handleChange={(input) =>
              setState({
                whereDoYouNeedToGo: { ...whereDoYouNeedToGo, title: input },
              })
            }
          />
        </G.Col>
      </G.Row>
      <G.Row mt="6">
        <G.Col w={[4, 6, 4]}>
          <I.Dropdown
            label="Link or phone number?"
            options={[
              { label: ' external link', value: 'link' },
              { label: 'phone number', value: 'phone' },
            ]}
            selected={whereDoYouNeedToGo.type}
            handleChange={(selectValue) =>
              setState({
                whereDoYouNeedToGo: {
                  ...whereDoYouNeedToGo,
                  type: selectValue,
                },
              })
            }
            error={validationErrs?.whereDoYouNeedToGo?.type}
          />
        </G.Col>
      </G.Row>
      {/* How long does it take section */}
      <G.Row mt="8">
        <G.Col w={[4, 6, 4]}>
          <T.H2 mb="6">How long does it take?</T.H2>
          <I.BasicInput
            name="timeRange"
            placeholder="Type time range here..."
            label="Time range"
            error={validationErrs.timeRange}
            handleChange={(input) => setState({ timeRange: input })}
            value={timeRange}
          />
        </G.Col>
      </G.Row>
      <ThingsYouWillNeed
        state={thingsYouWillNeed}
        setState={setState}
        errors={validationErrs.thingsYouWillNeed}
      />
      <WhatYouWillNeedToKnow
        state={whatYouWillNeedToKnow}
        setState={setState}
        errors={validationErrs.whatYouWillNeedToKnow}
      />
      <GeneralTips
        state={otherTips}
        setState={setState}
        errors={validationErrs}
      />
      <G.Row mt="10">
        {httpError && (
          <G.Col w={[4, 12, 12]}>
            <T.P mb="2" color="error">
              {httpError}
            </T.P>
          </G.Col>
        )}
        <G.Col w={[4, 6, 4]}>
          <Button text="Save changes" handleClick={handleSubmit} />
        </G.Col>
      </G.Row>
    </>
  );
};

export default StepForm;
