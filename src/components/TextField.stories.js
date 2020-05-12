import { select, text, withKnobs } from '@storybook/addon-knobs';
import './TextField';

export default {
  title: 'TextField',
  decorators: [withKnobs]
};

export const TextField = () => {
  return `
    <my-textfield
      placeholder="${text('placeholder', 'Vorname')}"
      ${select('numeric', { yes: 'numeric', no: '' }, '')}
      ${select('required', { yes: 'required', no: '' }, '')}    >
    </my-textfield>
  `;
};
