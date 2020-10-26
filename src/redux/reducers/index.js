import {combineReducers} from "redux";
import changeCategoryReducer from "./changeCategoryReducer";
import categoryListReducer from "./categoryListReducer";
import movieListReducer from "./movieListReducer";
import addFavoryReducer from "./addFavoryReducer";
import movieDetailsReducer from "./movieDetailsReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    movieListReducer,
    addFavoryReducer,
    movieDetailsReducer
});
export default rootReducer;