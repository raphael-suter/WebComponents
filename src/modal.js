import { css, html, LitElement } from 'lit-element';

class Modal extends LitElement {
  static get properties() {
    return {
      isVisible: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      div {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.75);
      }

      article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 50%;
        margin: 100px auto;
        background: white;
      }

      ::slotted(h1) {
        margin: 0;
        padding: 1rem;
        border-bottom: 1px solid #ccc;
      }

      .modal__content {
        margin: 0 1rem;
      }

      .modal__actions {
        display: flex;
        padding: 1rem;
        justify-content: end;
        border-top: 1px solid #ccc;
      }

      button {
        margin-left: 1rem;
      }
    `;
  }

  constructor() {
    super();
    this.isVisible = false;
  }

  render() {
    return html`
      ${this.isVisible ? html`
        <div>
          <article>
            <header>
              <slot name='title'></slot>
            </header>
            <section class='modal__content'>
              <slot></slot>
            </section>
            <section class='modal__actions'>
              <button @click="${this.hide}">cancel</button>
              <button @click="${this.confirm}">ok</button>
            </section>
          </article>
        </div>` : ``
      }
    `;
  }

  show() {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  confirm() {
    this.hide();
    this.dispatchEvent(new Event('success'));
  }
}

customElements.define('my-modal', Modal);
