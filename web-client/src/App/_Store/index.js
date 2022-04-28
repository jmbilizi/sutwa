import { createStore } from "redux";
import { rootReducer } from "./Reduce/_index";

const Store = createStore(rootReducer);

export { Store };
