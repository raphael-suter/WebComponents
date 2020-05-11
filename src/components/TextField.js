import { css, html, LitElement } from 'lit-element';

class TextField extends LitElement {
  static get properties() {
    return {
      error: { type: String },
      placeholder: { type: String },
      value: { type: String },
      numeric: { type: Boolean },
      required: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      label {
        display: block;
        margin: 1rem 0 0;
        color: red;
      }

      input {
        width: 100%;
        padding: 0.8rem;
        box-sizing: border-box;
        font-size: 16px; 
        border: 1px solid darkgrey;
        border-radius: 2px;
      }
    `;
  }

  constructor() {
    super();

    this.error = '';
    this.placeholder = '';
    this.value = '';
    this.numeric = false;
    this.required = false;
  }

  render() {
    return html`
      <label>
        ${this.error}
        <input type="text" placeholder=${this.placeholder} value=${this.value} @input=${this.onInput} />
      </label>
    `;
  }

  onInput(event) {
    this.value = event.target.value;
    this.isValid();
  }

  isValid() {
    if (this.required && this.value === '') {
      this.error = 'Bitte ausfüllen.';
      return false;
    }

    if (this.numeric && isNaN(this.value)) {
      this.error = 'Muss eine Zahl sein.';
      return false;
    }

    this.error = '';
    return true;
  }
}

customElements.define('my-textfield', TextField);
