class DataSource {
    static cariFilm(keyword) {
        return fetch(`http://www.omdbapi.com/?apikey=d386a0ab&s=${keyword}`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.Search) {
                    return Promise.resolve(responseJson.Search)
                } else {
                    return Promise.reject("Film Tidak Ditemukan!!")
                }
            })
    }

    static movieDetail(movieId) {
        return fetch(`http://www.omdbapi.com/?apikey=d386a0ab&i=${movieId}`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson)
                } else {
                    return Promise.reject("Film Tidak Ditemukan!!")
                }
            })
    }
}

export default DataSource;