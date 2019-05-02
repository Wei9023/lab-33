import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import apiReducer from "./reducer.js";

let reducers = combineReducers({
  api: apiReducer
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store; // Store
