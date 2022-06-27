import * as React from "react";
import { ClubProfilePage } from "../../../Components/Clubs/ClubProfilePage";
import { clubs } from "../../../../api/clubsData";
import { ClubProfileTabs } from "../../../Components/Clubs/ClubProfilePage/ClubProfileTabContextData";

const ClubProfileTabPage = ({ clubId, clubTabName }) => {
  const ClubProfileInfo = clubId
    ? clubs.find((club) => club.id.toString() === clubId)
    : null;

  const ClubTab = clubTabName
    ? ClubProfileTabs.find(
        (tab) => tab.label.toLowerCase() === clubTabName.toLowerCase()
      )
    : null;

  if (ClubProfileInfo && !ClubTab) {
    return (
      <ClubProfilePage
        clubProfileInfo={ClubProfileInfo}
        tabDefaultValue={ClubProfileTabs[0].value}
      />
    );
  }
  if (ClubProfileInfo && ClubTab) {
    return (
      <ClubProfilePage
        clubProfileInfo={ClubProfileInfo}
        tabDefaultValue={ClubTab.value}
      />
    );
  }

  return (
    <pre className="mt-5 pt-5">404 - Club with id {clubId} does not exist</pre>
  );
};

export default ClubProfileTabPage;

export function getStaticProps({ params: { clubId, clubTabName } }) {
  return {
    props: {
      clubId,
      clubTabName,
    },
  };
}

export const tabNameClubIdCombo = () => {
  let idsTabs = [];
  for (let i = 0; i < clubs.length; i++) {
    for (let j = 0; j < ClubProfileTabs.length; j++) {
      idsTabs.push({
        clubId: clubs[i].id,
        clubTabName: ClubProfileTabs[j].label,
      });
    }
  }
  return idsTabs;
};

export async function getStaticPaths() {
  return {
    paths: tabNameClubIdCombo().map(({ clubId, clubTabName }) => ({
      params: {
        clubId: clubId.toString(),
        clubTabName: clubTabName.toString(),
      },
    })),
    fallback: true,
  };
}
