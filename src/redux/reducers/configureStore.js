import {createStore,applyMiddleware} from "redux";
import rootReducers from "./index";
import thunk from "redux-thunk";
import {composeWithDevTools } from "redux-devtools-extension";


export default function configureStore(){
    return createStore(rootReducers,composeWithDevTools(applyMiddleware(thunk)));
}