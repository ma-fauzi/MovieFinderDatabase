import "../components/movie-container.js";
import "../components/search-bar.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const elemenSearch = document.querySelector("search-bar");
    const movieContainer = document.querySelector("movie-container");

    const handleClick = async () => {

        try {
            const dataMovie = await DataSource.cariFilm(elemenSearch.value);
            renderResult(dataMovie);
        } catch (message) {
            console.log(message)
        }

    }

    const renderResult = result => {
        movieContainer.movies = result;
    }

    elemenSearch.clickHandler = handleClick;
}

export default main;