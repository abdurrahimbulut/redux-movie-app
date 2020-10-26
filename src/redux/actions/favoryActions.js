import * as actionTypes from "./actionTypes";

export function addFavory(movie){
    return{
        type: actionTypes.ADD_FAVORY,
        payload: movie
    }
}
