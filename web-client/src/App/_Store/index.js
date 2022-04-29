import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./Reduce/_index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

export { Store };
