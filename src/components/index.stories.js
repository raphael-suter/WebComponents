import { withKnobs } from "@storybook/addon-knobs";
import "./index";

export default {
  title: "Examples/Form",
  decorators: [withKnobs],
};

export const Example = () => {
  return `
    <my-form>
      <h1>Anmelden</h1>
      <my-textfield placeholder="Vorname" required></my-textfield>
      <my-textfield placeholder="Nachname" required></my-textfield>
      <my-textfield placeholder="Strasse"></my-textfield>
      <my-textfield placeholder="Hausnummer" numeric></my-textfield>
      <my-textfield placeholder="PLZ" numeric></my-textfield>
      <my-textfield placeholder="Ort"></my-textfield>
      <my-checkbox required>Ich bin schon gross und vier.</my-checkbox>
      <my-button>ok</my-button>
    </my-form>
  `;
};
