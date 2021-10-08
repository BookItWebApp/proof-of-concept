import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import tab from "./tab";

const rootReducer = combineReducers({ tab });

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
