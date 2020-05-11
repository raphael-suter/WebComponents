import { css, html, LitElement } from 'lit-element';

class Button extends LitElement {
  static get styles() {
    return css`
      button {
        width: 100%;
        margin: 1rem 0 0;
        padding: 0.8rem 1.6rem;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        border: none;
        border-radius: 2px;
        background: darkgrey;
        cursor: pointer;
        color: white;
      }

      button:hover {
        background: grey;
      }
    `;
  }

  render() {
    return html`
      <button @click=${this.onClick}>
        <slot></slot>
      </button>
    `;
  }

  onClick() {
    this.dispatchEvent(new Event('onClick'));
  }
}

customElements.define('my-button', Button);
