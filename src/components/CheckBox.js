import { css, html, LitElement } from 'lit-element';

class CheckBox extends LitElement {
  static get properties() {
    return {
      error: { type: String },
      checked: { type: Boolean },
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

      div {
        display: flex;
        margin: 1.6rem 0 0.6rem;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        cursor: pointer;        
        color: black;
      }

      input {
        display: none;
      }

      span {
        position: relative;
        height: 20px;
        width: 20px;
        margin-right: 0.8rem;
        border: 1px solid darkgrey;
        border-radius: 2px;
      }

      input:checked ~ span:after {
        content: "";
        position: absolute;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid black;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
      }
    `;
  }

  constructor() {
    super();

    this.error = '';
    this.checked = false;
    this.required = false;
  }

  render() {
    return html`
      <label>
        ${this.error}
        <div>
          <input type='checkbox' ?checked='${this.checked}' @change=${this.onChange} />
          <span></span>
          <slot></slot>
        </div>
      </label>
    `;
  }

  onChange(event) {
    this.checked = event.target.checked;
    this.isValid();
  }

  isValid() {
    if (this.required && !this.checked) {
      this.error = 'Muss angewählt werden.';
      return false;
    }

    this.error = '';
    return true;
  }
}

customElements.define('my-checkbox', CheckBox);
