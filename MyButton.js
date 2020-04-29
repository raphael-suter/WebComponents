class MyButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        button {
          padding: 0.6rem 1.6rem;
          background: black;
          border: none;
          font-size: 16px;
          color: white;
          cursor: pointer;
        }
      </style>
      <button onclick='this.parentNode._onClick()'>
        <slot></slot>
      </button>
    `;

    this.shadowRoot._onClick = () => {
      alert('You clicked me!');
    }
  }
}

customElements.define('my-button', MyButton);
