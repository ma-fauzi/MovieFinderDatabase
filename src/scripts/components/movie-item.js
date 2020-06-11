import DataSource from "../data/data-source.js";

class MovieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDom = this.attachShadow({
            mode: "open"
        })
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    set movieDetail(movieDetail) {
        this._movieDetail = movieDetail;
        this.render();
    }

    render() {
        this.shadowDom.innerHTML = `
        <style>
            .movie-item {
                width: 50%;
                margin: 30px auto;
                padding: .5em;
                border-radius: .3em;
                display: flex;
                box-shadow: 0 0 5px 0 rgba(0, 0, 0, .5);
            }

            .movie-poster {
                width: 35%;
            }

            .movie-poster img {
                width: 90%;
            }

            .movie-info {
                display: flex;
                width: 100%;
                flex-direction: column;
                justify-content: space-between;
            }

            table,
            th,
            td {
                padding: .3em;
                text-align: left;
            }

            .info th {
                font-size: 1.5rem;
                font-weight: bold;
            }

            .info td {
                font-size: 1.3rem;
                margin-top: 10px;
            }

            .movie-info button {
                width: 100%;
                background-color: #232526;
                border: none;
                padding: 1em;
                color: white;
                border-radius: .3em;
                transition: .3s;
            }

            .movie-info button:hover {
                background-color: #414345;
            }

            .movie-detail {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .movie-detail th {
                font-size: 1.3rem;
                font-weight: bold;
            }

            .movie-detail td {
                font-size: 1.2rem;
                margin-top: 10px;
            }

            .movie-detail button {
                width: 100%;
                margin: 10px auto;
                background-color: #232526;
                border: none;
                padding: 1em;
                color: white;
                border-radius: .3em;
                transition: .3s;
            }

            @media screen and (max-width: 800px) {
                .movie-item {
                    flex-direction: column;
                    width: 90%;
                }

                .movie-poster {
                    width: 100%;
                }

                .movie-poster img {
                    width: 100%;
                }

                .info table {
                    margin: 10px 0;
                }

                .info th {
                    font-size: 1.3rem;
                    font-weight: bold;
                }

                .info td {
                    font-size: 1.1rem;
                    margin-top: 10px;
                }
            }
            </style>

            <div class="movie-item" id="movie-item">
            <article class="movie-poster">
                <img src="${this._movie.Poster}" alt="Movie poster">
            </article>
            <article class="movie-info">
                <section class="info">
                    <table>
                        <tr>
                            <th>Judul</th>
                            <td>:</td>
                            <th>${this._movie.Title}</th>
                        </tr>
                        <tr>
                            <th>Tahun Tayang</th>
                            <td>:</td>
                            <td>${this._movie.Year}</td>
                        </tr>
                        <tr>
                            <th>Tipe</th>
                            <td>:</td>
                            <td>${this._movie.Type}</td>
                        </tr>
                    </table>
                </section>
                <section class="movie-detail" id="movie-detail"></section>
                <section class="detail">
                    <button id="btn-detail" class="btn-detail" data-movieid="${this._movie.imdbID}">Detail Info</button>
                </section>
            </article>
            </div>
            `;

        const movieItemElement = this.shadowRoot.querySelector("#movie-item");
        const detailElement = this.shadowDom.querySelector("#btn-detail");

        // detail movie
        detailElement.addEventListener("click", async function () {
            const movieDetailElement = movieItemElement.querySelector("#movie-detail");
            const movieId = detailElement.dataset.movieid;
            const dataDetailMovie = await DataSource.movieDetail(movieId);

            detailElement.style.display = "none";

            movieDetailElement.innerHTML = `
                <table>
                <tr>
                    <th>Judul</th>
                    <td>:</td>
                    <th>${dataDetailMovie.Title}</th>
                </tr>
                <tr>
                    <th>Tayang Perdana</th>
                    <td>:</td>
                    <td>${dataDetailMovie.Released}</td>
                </tr>
                <tr>
                    <th>Rated</th>
                    <td>:</td>
                    <td>${dataDetailMovie.Rated}</td>
                </tr>
                <tr>
                    <th>Genre</th>
                    <td>:</td>
                    <td>${dataDetailMovie.Genre}</td>
                </tr>
                <tr>
                    <th>Bahasa</th>
                    <td>:</td>
                    <td>${dataDetailMovie.Language}</td>
                </tr>
                <tr>
                    <th>Rating Film</th>
                    <td>:</td>
                    <td>${dataDetailMovie.imdbRating}</td>
                </tr>
                <tr>
                    <th>Sutradara</th>
                    <td>:</td>
                    <td>${dataDetailMovie.Director}</td>
                </tr>
                <tr>
                    <th>Penulis</th>
                    <td>:</td>
                    <td>${dataDetailMovie.Writer}</td>
                </tr>
                <tr>
                    <th>Pemain</th>
                    <td>:</td>
                    <td>${dataDetailMovie.Actors}</td>
                </tr>
                <tr>
                    <th>Plot</th>
                    <td>:</td>
                    <td>${dataDetailMovie.Plot}</td>
                </tr>
            </table>
            `;

        });
    }

}

customElements.define("movie-item", MovieItem);