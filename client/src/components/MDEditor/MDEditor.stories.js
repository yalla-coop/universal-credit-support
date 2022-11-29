import React, { useState } from 'react';

import MDEditor from './index';
import Markdown from '../Markdown';

export default {
  title: 'Common Components/MDEditor',
  component: MDEditor,
  argTypes: {},
};

const Template = (args) => {
  const [value, setValue] = useState('**Paying for **\n\nhousing');
  return (
    <div style={{ width: '300px' }}>
      <MDEditor
        value={value}
        onChange={setValue}
        label="Introduction"
        m={{ mt: 5 }}
      />
      <Markdown
        text={value}
        customStyles={{
          p: {
            // mt: 3,
            // ml: 4,
            // mr: 4,
            // mb: 3,
            color: 'secondaryMain',
          },
        }}
      />
    </div>
  );
};

export const MDEditorExample = Template.bind({});
MDEditor.args = {
  type: 'updateSuccess',
  title: 'Are you sure?',
  description:
    'This will give the user access to edit any content on the tool and manage the access level of other administrators.',
};
