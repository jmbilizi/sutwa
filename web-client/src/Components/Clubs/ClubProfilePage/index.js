import React from "react";
import { useRouter } from "next/router";
import ProfileComponent from "../../Profile";
import {
  ClubProfileTabPanels,
  ClubProfileTabs,
} from "./ClubProfileTabContextData";

export const ClubProfilePage = ({ clubProfileInfo, tabDefaultValue }) => {
  const { query } = useRouter();

  function tabPath(tab) {
    return `/clubs/${query.clubId}/${tab.label
      .trim()
      .toLowerCase()
      .replace(" ", "-")}`;
  }

  const clubProfileTabsWithUrl = ClubProfileTabs.map((tab) => ({
    ...tab,
    path: tabPath(tab),
  }));

  const clubProfileTabContext = {
    tabs: clubProfileTabsWithUrl,
    tabPanels: ClubProfileTabPanels,
  };

  return (
    <ProfileComponent
      profileInfo={clubProfileInfo}
      tabContext={clubProfileTabContext}
      tabDefaultValue={tabDefaultValue}
    />
  );
};
