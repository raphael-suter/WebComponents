import { text, withKnobs } from "@storybook/addon-knobs";
import "./Form";

export default {
  title: "Components/Form",
  decorators: [withKnobs],
};

export const Form = () => {
  return `
    <my-form>
      <h1>${text("title", "Anmelden")}</h1>
    </my-from>
  `;
};
