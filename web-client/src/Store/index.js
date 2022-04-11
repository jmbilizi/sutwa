import { createStore } from "redux";
import { Reducer } from "./Reduce/index.js";

const Store = createStore(Reducer);

export { Store };
