import React from 'react';
import { Row, Col } from '.';

export default {
  title: 'Common Components/Grid',
  component: Row,
  argTypes: {
    w: { control: 'array', defaultValue: [2, 12, 12] },
  },
};

const Template = (args) => (
  <Row inner={args.inner} jc={args.jc}>
    <Col w={args.w}>
      <p style={{ background: 'red', flex: 1 }}>COl 1</p>
    </Col>
    <Col w={args.w}>
      <p style={{ background: 'green', flex: 1 }}>COl 2</p>
    </Col>
    <Col w={args.w}>
      <p style={{ background: 'orange', flex: 1 }}>COl 3</p>
    </Col>
  </Row>
);

export const Default = Template.bind({});
Default.args = {
  inner: true,
  jc: 'flex-start',
};
const FlexCols = (args) => (
  <Row inner={args.inner} jc={args.jc}>
    <Col w={[4, 4, 6]}>
      <p style={{ background: 'red', flex: 1 }}>COl 1</p>
    </Col>
    <Col w={[4, 4, 6]}>
      <p style={{ background: 'green', flex: 1 }}>COl 2</p>
    </Col>
  </Row>
);

export const FlexColumns = FlexCols.bind({});
Default.args = {
  inner: true,
  jc: 'flex-start',
};
