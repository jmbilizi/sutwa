import React from "react";
import { Route, Redirect } from "react-router-dom";
import Modal from "../Components/Modal";
import { ModalSwitch, ModalRoute } from "react-router-modal-gallery";
import * as AccountRoutes from "./account-routes";
import * as UserRoutes from "./user-routes";
import * as ClubRoutes from "./club-routes";
import * as TournamentRoutes from "./tournament-routes";
import NewsFeed from "../pages/feed";
import Homepage from "../pages";

const routes = [
  {
    exact: true,
    path: "/",
    component: Homepage,
  },
  {
    exact: true,
    path: "/feed",
    component: NewsFeed,
  },
  //Account routes
  AccountRoutes.HOME,
  AccountRoutes.SIGNUP,
  AccountRoutes.LOGIN,

  //User routes
  UserRoutes.UserProfilePage,

  //Team routes
  ClubRoutes.ClubProfilePage,

  //Tournament routes
  TournamentRoutes.TournamentProfilePage,

  {
    path: "*",
    render: () => <Redirect to="/feed" />,
  },
];

const modalRoutes = routes
  .filter((route) => route.modal)
  .map((route) => <ModalRoute key={route.path} {...route} />);

const Routes = () => (
  <ModalSwitch
    renderModal={({ open, redirectToBack }) => (
      <Modal open={open} scroll="body" onExited={redirectToBack}>
        {modalRoutes}
      </Modal>
    )}
  >
    {routes.map((route) =>
      route.modal ? (
        <ModalRoute key={route.path} {...route} />
      ) : (
        <Route key={route.path} {...route} />
      )
    )}
  </ModalSwitch>
);

export default Routes;
