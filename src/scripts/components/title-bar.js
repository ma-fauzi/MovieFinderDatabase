class TitleBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDom = this.attachShadow({
      mode: "open",
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDom.innerHTML = `
        <style>
            .title {
                max-width: 100%;
                padding: 4em;
                text-align: center;
                background-color:  #232526;
                background-image: url('./img/main-bg.jpg');
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            }

            .title h1 {
                font-size: 2.5rem;
                font-weight: bold;
                color: white;
            }

            .title p {
                font-size: 2rem;
                color: white;
                margin-top: 10px;
            }
        </style>
        <div class="title">
            <h1>Movie Finder Database</h1>
            <p>Temukan Film favoritmu disini !!</p>
        </div>
        `;
  }
}

customElements.define("title-bar", TitleBar);
