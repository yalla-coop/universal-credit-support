import { TranslationBar } from '.';

export default {
  title: 'Common Components/Translation Bar',
  component: TranslationBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const StandardTemplate = (args) => <TranslationBar {...args} />;

export const LTR = StandardTemplate.bind({});
LTR.args = { dir: 'ltr', largeText: false, showBack: false };

export const LTR_BackButton = StandardTemplate.bind({});
LTR_BackButton.args = { dir: 'ltr', largeText: false, showBack: true };

export const LTR_BackButtonWithLargeText = StandardTemplate.bind({});
LTR_BackButtonWithLargeText.args = {
  dir: 'ltr',
  largeText: true,
  showBack: true,
};

export const RTL = StandardTemplate.bind({});
RTL.args = { dir: 'rtl', largeText: false, showBack: false };

export const RTL_BackButton = StandardTemplate.bind({});
RTL_BackButton.args = { dir: 'rtl', largeText: false, showBack: true };

export const RTL_BackButtonWithLargeText = StandardTemplate.bind({});
RTL_BackButtonWithLargeText.args = {
  dir: 'rtl',
  largeText: true,
  showBack: true,
};
