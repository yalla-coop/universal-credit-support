import React from 'react';

import Markdown from './';

const markdownText = `
---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

___

## Horizontal Rules
---

And more

***

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

## Lists

Unordered

+ Create a list by starting a line with

+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


## Links

[link text](https://www.yallacooperative.com/)

[link with title](https://www.yallacooperative.com/ "title text!")

Autoconverted link https://www.yallacooperative.com/ (enable linkify to see)
`;

export default {
  title: 'Common Components/Markdown',
  component: Markdown,
  argTypes: {},
};

const Template = (args) => {
  return (
    <div style={{ marginLeft: '4rem', width: '700px' }}>{args.children}</div>
  );
};

export const markdownExampleBigString = Template.bind({});
markdownExampleBigString.args = {
  children: <Markdown text={markdownText} />,
};
export const markdownExampleTwoStrings = Template.bind({});

markdownExampleTwoStrings.args = {
  children: (
    <>
      <Markdown text={`un + **pick** = **unpick**`} />
      <Markdown text={`+ed = **unpicked**`} />
    </>
  ),
};
