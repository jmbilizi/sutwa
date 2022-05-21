import { combineReducers } from "redux";
import { counterReducer } from "./counter";
import { userReducer } from "./user";

const rootReducer = combineReducers({
  Counter: counterReducer,
  Users: userReducer,
});

export { rootReducer };
