import { select, text, withKnobs } from "@storybook/addon-knobs";
import './CheckBox';

export default {
  title: 'CheckBox',
  decorators: [withKnobs]
};

export const CheckBox = () => {
  return `
    <my-checkbox 
      ${select('checked', { yes: 'checked', no: '' }, '')}
      ${select('required', { yes: 'required', no: '' }, '')}
    >
      ${text('text', 'Ich bin schon gross und vier.')}
    </my-checkbox>
  `;
};
