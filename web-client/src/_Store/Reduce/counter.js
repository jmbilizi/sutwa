import * as actions from "./actionTypes/_index";

const Counter = 0;

const counterReducer = (state = Counter, { type, payload } = {}) => {
  switch (type) {
    case actions.counterActionTypes.ADDED:
      return state + 1;
    case actions.counterActionTypes.SUBTRACTED:
      return state - 1;
    default:
      return state;
  }
};

export { counterReducer };
