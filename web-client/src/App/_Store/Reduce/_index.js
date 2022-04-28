import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

export { rootReducer };
