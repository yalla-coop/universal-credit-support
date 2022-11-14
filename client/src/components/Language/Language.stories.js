import LanguageBar from '.';

export default {
  title: 'Common Components/Language Bar Main',
  component: LanguageBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const StandardTemplate = (args) => <LanguageBar {...args} />;

export const LTR = StandardTemplate.bind({});
LTR.args = { dir: 'ltr', largeText: false, showBack: false };
