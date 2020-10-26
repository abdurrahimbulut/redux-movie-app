import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function movieDetailsReducer(
    state = initialState.movieDetails,
    action
  ){
    switch (action.type) {
      case actionTypes.GET_MOVIE_DETAILS_SUCCESS:
        return action.payload;
      default:
        return state;
    }
  
  }
  