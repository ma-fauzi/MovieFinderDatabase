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
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.shadowDom.appendChild(movieItemElement);
        });
    }

}

customElements.define("movie-container", MovieContainer);