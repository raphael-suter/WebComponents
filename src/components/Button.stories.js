import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components/Button",
  decorators: [withKnobs],
};

export const Button = () => {
  return `
    <my-button>
      ${text("text", "ok")}
    </my-button>
  `;
};
