import { useState } from 'react';
import ButtonsSection, { SingleButton } from '.';

export default {
  title: 'Common Components/Buttons Section',
  component: ButtonsSection,
};

const Template = (args) => {
  const [buttons, setButtons] = useState(args.buttons);
  return (
    <div style={{ padding: '20px' }}>
      <ButtonsSection
        {...args}
        setButtons={setButtons}
        buttons={buttons}
        m="2"
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  buttons: [
    {
      id: '1',
      name: 'Paying for housing',
      hidden: true,
    },
    {
      id: '2',
      name: 'Paying for my bills',
    },
    {
      id: '3',
      name: 'Paying for essentials',
    },
    {
      id: '4',
      name: 'Dealing with debts',
      hidden: true,
    },
    {
      id: '5',
      name: 'Dealing with debts',
    },
  ],
};

const SingleButtonTemplate = (args) => {
  return (
    <div style={{ padding: '20px' }}>
      <SingleButton {...args} m="2" />
    </div>
  );
};

export const Single_Button = SingleButtonTemplate.bind({});
Single_Button.args = {
  id: '1',
  name: 'Paying for housing',
  hidden: true,
  iconColor: 'error',
};
