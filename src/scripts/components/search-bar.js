class SeacrhBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickHandler(event) {
        this._clickHandler = event;
        this.render();
    }

    get value() {
        return this.shadowDom.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDom.innerHTML = `
        <style>
            .search-container {
                margin: auto;
                max-width: 90%;
                display: flex;
                padding: 2em;
                justify-content: center;
            }

            .search-container input {
                width: 800px;
                padding: 1em;
                border: 1px solid #232526;
                border-radius: .3em;
                margin-right: 10px;
            }

            .search-container button {
                border: none;
                border-radius: .3em;
                background-color: #232526;
                color: white;
                padding: 1em 2em;
                transition: .3s;
            }

            .search-container button:hover {
                background-color: #414345;
                cursor: pointer;
            }

            @media screen and (max-width: 800px) {
                .search-container {
                    flex-direction: column;
                }

                .search-container input {
                    width: 100%;
                    margin-bottom : 10px;
                }

                .search-container button {
                    width: 100%;
                }
            }
        </style>

        <div class="search-container">
            <input id="searchElement" type="search" placeholder="Ketikkan kata kunci film...">
            <button id="btnSearch" type="submit">Cari Film</button>
        </div>

        `;

        this.shadowDom.querySelector("#btnSearch").addEventListener("click", this._clickHandler);
    }
}

customElements.define("search-bar", SeacrhBar);