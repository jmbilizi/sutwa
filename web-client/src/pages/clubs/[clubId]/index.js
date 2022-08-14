import * as React from "react";
import { ClubProfilePage } from "../../../Components/Clubs/ClubProfilePage";
import { clubs } from "../../../../api/clubsData";
import { ClubProfileTabs } from "../../../Components/Clubs/ClubProfilePage/ClubProfileTabContextData";

const ClubProfilepage = ({ clubId }) => {
  const ClubProfileInfo = clubs.find((club) => club.id.toString() === clubId);
  if (ClubProfileInfo) {
    return (
      <ClubProfilePage
        clubProfileInfo={ClubProfileInfo}
        tabDefaultValue={ClubProfileTabs[0].value}
      />
    );
  }
  return (
    <pre className="mt-5 pt-5">404 - Club with id {clubId} does not exist</pre>
  );
};

export default ClubProfilepage;

export async function getStaticPaths() {
  const clubIds = () => {
    let ids = [];
    for (let i = 0; i < clubs.length; i++) {
      ids.push(clubs[i].id);
    }
    return ids;
  };

  return {
    paths: clubIds().map((clubId) => ({
      params: { clubId: clubId.toString() },
    })),
    fallback: true,
  };
}

export function getStaticProps({ params: { clubId } }) {
  return {
    props: {
      clubId,
    },
  };
}
