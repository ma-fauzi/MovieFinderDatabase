import "./movie-item.js";

class MovieContainer extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({
            mode: "open"
        })
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this.shadowDom.innerHTML = "";
        this._movies.forEach(movie => {
            console.log(movie)
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.shadowDom.appendChild(movieItemElement);
        });
    }

    renderError(message) {
        this.shadowDom.innerHTML = "";
        this.shadowDom.innerHTML += `
        
        <style>
            .modal-message {
                z-index: 1;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgb(0, 0, 0);
                background-color: rgba(0, 0, 0, .4);
                padding-top: 200px;
            }

            .message-content {
                display: flex;
                flex-direction: column;
                width: 50%;
                margin: auto;
                background-color: white;
                border-radius: .5em;
                padding: 1.2em;
                text-align: center;
                align-items: center;
            }

            .message-content h1 {
                font-size: 2rem;
                font-weight: bold;
            }

            .close-modal {
                padding: .5em 4em;
                background-color: #ED213A;
                border: none;
                border-radius: .5em;
                color: white;
                margin-top: 20px;
            }

            @media screen and (max-width: 800px) {
                .message-content {
                    width: 90%;
                    margin: auto;
                    background-color: white;
                    border-radius: .5em;
                    padding: 10px;
                    text-align: center;
                    align-items: center;
                }
    
                .message-content .close-modal {
                    width: 100%;
                    background-color: #ED213A;
                    border: none;
                    border-radius: .5em;
                    color: white;
                    margin-top: 20px;
                }
            }
        </style>

        <div id="modal-message" class="modal-message">
            <div class="message-content">
                <h1>Error: ${message}</h1>
                <button id="close-modal" class="close-modal">Tutup</button>
            </div>
        </div>
        `;
        const modalMessageElement = this.shadowDom.querySelector("#modal-message");
        this.shadowDom.querySelector("#close-modal").addEventListener("click", function () {
            modalMessageElement.style.display = "none";
        })
    }

}

customElements.define("movie-container", MovieContainer);