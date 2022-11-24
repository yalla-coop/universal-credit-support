import { LanguageSelector } from '.';

export default {
  title: 'Common Components/Language Selector',
  component: LanguageSelector,
};

const StandardTemplate = (args) => <LanguageSelector {...args} />;

export const Standard = StandardTemplate.bind({});
Standard.args = {};
