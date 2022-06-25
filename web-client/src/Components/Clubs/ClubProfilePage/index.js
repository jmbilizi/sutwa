import React from "react";
import ProfileComponent from "../../Profile";

const ClubProfileTabContext = {
  tabs: [
    {
      label: "About",
      value: "1",
      url: "[clubId]/about",
    },
    {
      label: "Members",
      value: "2",
      url: "[clubId]/members",
    },
    {
      label: "Teams",
      value: "3",
      url: "[clubId]/teams",
    },
    {
      label: "Competitions",
      value: "4",
      url: "[clubId]/competitions",
    },
    {
      label: "Posts",
      value: "5",
      url: "[clubId]/posts",
    },
    {
      label: "Photos",
      value: "6",
      url: "[clubId]/photos",
    },
    {
      label: "Videos",
      value: "7",
      url: "[clubId]/videos",
    },
    {
      label: "More",
      value: "8",
      url: "[clubId]/more",
    },
  ],
  tabPanels: [
    {
      value: "1",
      component: <h4>This is about the User</h4>,
    },
    {
      value: "2",
      component: <h4>Club members</h4>,
    },
    {
      value: "3",
      component: <h4>Competitions the User is or was in</h4>,
    },
    {
      value: "4",
      component: <h4>Clubs the User is or was in</h4>,
    },
    {
      value: "5",
      component: <h4>Users who are friends with the User</h4>,
    },
    {
      value: "6",
      component: <h4>Photos shared by the User or targeted</h4>,
    },
    {
      value: "7",
      component: <h4>Videos shared by the User or targeted</h4>,
    },
    {
      value: "8",
      component: <h4>More things!</h4>,
    },
  ],
};

export const ClubProfilePage = ({ clubProfileInfo }) => {
  return (
    <ProfileComponent
      profileInfo={clubProfileInfo}
      tabContext={ClubProfileTabContext}
    />
  );
};
