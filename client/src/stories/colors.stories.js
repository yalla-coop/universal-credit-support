/* eslint-disable no-console */
import React from 'react';

import colors from '../theme/colors';

function copyToClipboard(text) {
  var selected = false;
  var el = document.createElement('textarea');
  el.value = text;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  if (document.getSelection().rangeCount > 0) {
    selected = document.getSelection().getRangeAt(0);
  }
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
}

const handleClick = (id) => {
  return copyToClipboard(document.querySelector(`#${id}`).textContent);
};

const ColorDiv = ({ backgroundColor = 'red', colorName = 'red' }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      margin: 50,
      cursor: 'pointer',
    }}
  >
    <div
      style={{
        width: 50,
        height: 50,
        background: backgroundColor,
        borderRadius: 8,
        border: '1px solid gray',
      }}
      onClick={() => handleClick(colorName)}
    ></div>
    <p id={colorName}>{colorName}</p>
    <p>value: {colors[colorName]}</p>
  </div>
);
export default {
  title: 'Common Components/Colors',
  component: ColorDiv,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => {
  const colorsArr = Object.keys(colors);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: 100 }}>
      {colorsArr.map((color) => (
        <ColorDiv
          backgroundColor={[colors[color]]}
          colorName={color}
          {...args}
        />
      ))}
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
  variant: 'primary',
  disabled: false,
  loading: false,
  icon: 'close',
};
