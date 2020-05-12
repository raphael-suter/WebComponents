import { text, withKnobs } from "@storybook/addon-knobs";
import './Button';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

export const Button = () => {
  return `
    <my-button>
      ${text('text', 'ok')}
    </my-button>
  `;
};
