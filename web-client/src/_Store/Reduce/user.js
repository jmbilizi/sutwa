import * as actions from "./actionTypes/_index";

const Users = [
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
];

const userReducer = (state = Users, { type, payload } = {}) => {
  let lastUserId = state ? state[state.length - 1].id : 0;
  switch (type) {
    // User actions
    case actions.userActionTypes.USER_ADDED:
      return [
        ...state,
        {
          id: ++lastUserId,
          name: payload.name,
          email: payload.email,
          dob: payload.dob,
        },
      ];
    case actions.userActionTypes.USER_REMOVED:
      return state.filter((user) => user.id !== payload.id);
    default:
      return state;
  }
};

export { userReducer };
