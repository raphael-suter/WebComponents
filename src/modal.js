import { html, LitElement } from 'lit-element';

class Modal extends LitElement {
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
            <button id='cancel'>cancel</button>
            <button id='ok'>ok</button>
          </section>
        </div>
      </div>
    `;
  }
}

customElements.define('my-modal', Modal);
