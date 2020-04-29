class Modal extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
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
      </style>
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

    const cancelButton = this.shadowRoot.querySelector('#cancel');
    const okButton = this.shadowRoot.querySelector('#ok');

    cancelButton.addEventListener('click', this.hide.bind(this));
  }

  /*attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'opened') {
      if (this.hasAttribute('opened')) {
        this.shadowRoot.querySelector('.background').style.display = 'block';
      }
    }
  }

  static get observedAttributes() {
    return ['opened'];
  }*/

  open() {
    this.setAttribute('opened', '');
  }

  hide() {
    this.removeAttribute('opened');
  }
}

customElements.define('my-modal', Modal);
