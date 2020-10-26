import * as actionTypes from "./actionTypes";

export function getMoviesSuccess(movies){
    return{
        type: actionTypes.GET_MOVIES_SUCCESS,
        payload: movies
    }
}

export function getMovieDetailsSuccess(movie){
    return{
        type: actionTypes.GET_MOVIE_DETAILS_SUCCESS,
        payload: movie
    }
}

export function getMovies(categoryId){
    return function(dispatch){
        let url = "http://localhost:3000/movies";
        if(categoryId){
            url = url + "?categoryId=" + categoryId;
        }
        return fetch(url).then(response => response.json()).then(result=>dispatch(getMoviesSuccess(result)))
    }
}


export function getMovie(movieId){
    return function(dispatch){
        let url = "http://localhost:3000/movies";
        if(movieId){
            url = url + "?id=" + movieId;
        }
        return fetch(url).then(response => response.json()).then(result=>dispatch(getMovieDetailsSuccess(result[0])))
    }
}