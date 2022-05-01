import * as AccountPages from "../Pages/Account";

export const HOME = {
  exact: true,
  path: "/account",
  component: AccountPages.Home,
};

export const SIGNUP = {
  defaultParentPath: "/account",
  modal: true,
  path: "/account/signup",
  component: AccountPages.Signup,
};

export const LOGIN = {
  defaultParentPath: "/account",
  modal: true,
  path: "/account/login",
  component: AccountPages.Signin,
};
