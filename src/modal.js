import { css, html, LitElement } from 'lit-element';

class Modal extends LitElement {
  static get styles() {
    return css`
      .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.75);
        display: none;
      }

      :host([opened]) .background {
        display: block;
      }

      .modal {
        width: 50%;
        margin: 100px auto;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      ::slotted(h1) {
        margin: 0;
        padding: 1rem;
        border-bottom: 1px solid #ccc;
      }

      .main {
        margin: 0 1rem;
      }

      .actions {
        display: flex;
        padding: 1rem;
        justify-content: end;
        border-top: 1px solid #ccc;
      }

      .actions button {
        margin-left: 1rem;
      }
    `;
  }

  render() {
    return html`
      <div class='background'>
        <div class='modal'>
          <header>
            <slot name='title'></slot>
          </header>
          <section class='main'>
            <slot></slot>
          </section>
          <section class='actions'>
            <button @click="${this.hide}">cancel</button>
            <button @click="${this.confirm}">ok</button>
          </section>
        </div>
      </div>
    `;
  }

  open() {
    this.setAttribute('opened', '');
  }

  hide() {
    this.removeAttribute('opened');
  }

  confirm() {
    this.hide();
    this.dispatchEvent(new Event('success'));
  }
}

customElements.define('my-modal', Modal);
