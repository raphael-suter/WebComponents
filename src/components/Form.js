import { css, html, LitElement } from 'lit-element';

class Form extends LitElement {
  static get styles() {
    return css`
      form {
        width: 350px;
        padding: 1rem;
        border-radius: 2px;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
        background: white;
      }

      ::slotted(h1) {
        margin: 0;
        text-align: center;
        font-family: 'Times New Roman';
      }
    `;
  }

  render() {
    return html`
      <form>
        <slot></slot>
      </form>
    `;
  }
}

customElements.define('my-form', Form);
