import * as AccountPages from "../Pages/Account";

export const HOME = {
  exact: true,
  path: "/account",
  component: AccountPages.Home,
};

export const SIGNUP = {
  defaultParentPath: "/",
  modal: true,
  path: "/signup",
  component: AccountPages.Signup,
};

export const LOGIN = {
  defaultParentPath: "/",
  modal: true,
  path: "/login",
  component: AccountPages.Signin,
};
