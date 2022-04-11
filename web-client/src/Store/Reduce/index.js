import * as actions from "./actionTypes/_index";

const initialState = {
  Users: [
    {
      id: 1,
      name: "Luna",
      email: "luna@sutwa.com",
      dob: "08/01/2019",
    },
    {
      id: 2,
      name: "Pearl",
      email: "pearl@sutwa.com",
      dob: "08/01/2020",
    },
  ],
  Counter: 0,
};

const Reducer = (state = initialState, action) => {
  let lastUserId = state ? state.Users[state.Users.length - 1].id : 0;
  switch (action.type) {
    // Counter app actions
    case actions.counterActionTypes.ADDED:
      return { ...state, Counter: state.Counter + 1 };
    case actions.counterActionTypes.SUBTRACTED:
      return { ...state, Counter: state.Counter - 1 };
    // User actions
    case actions.userActionTypes.USER_ADDED:
      return {
        ...state,
        Users: [
          ...state.Users,
          {
            id: ++lastUserId,
            name: action.payload.name,
            email: action.payload.email,
            dob: action.payload.dob,
          },
        ],
      };
    case actions.userActionTypes.USER_REMOVED:
      return {
        ...state,
        Users: state.Users.filter((user) => user.id === action.payload.id),
      };
    default:
      return state;
  }
};

export { Reducer };
