import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function addFavoryReducer(
  state = initialState.favorites,
  action
) {
  switch (action.type) {
    case actionTypes.ADD_FAVORY:
      return [
        ...state,
        action.payload
      ];
    default:
        return state;
  }
}
