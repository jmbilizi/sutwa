import React from "react";
import ProfileComponent from "../../Profile";
import Standings from "./Standings";

const TournamentProfileInfo = {
  coverImage: "https://picsum.photos/1000/450?grayscale",
  image: "https://picsum.photos/180?grayscale",
  name: "Africa Cup of Nations",
  people: "3.4K Friends . 12 Mutual",
  //will add array of objects with image and url later that take you to the profile of the participant
  fewParticipants: "Images Images",
};

const TournamentProfileTabContext = {
  tabs: [
    {
      label: "About",
      value: "1",
    },
    {
      label: "Standings",
      value: "2",
    },
    {
      label: "Schedule",
      value: "3",
    },
    {
      label: "Clubs",
      value: "4",
    },
    {
      label: "Posts",
      value: "6",
    },
    {
      label: "Photos",
      value: "7",
    },
    {
      label: "Videos",
      value: "8",
    },
  ],
  tabPanels: [
    {
      value: "1",
      component: <h4>About the Tournement</h4>,
    },
    {
      value: "2",
      component: <Standings />,
    },
    {
      value: "3",
      component: <h4>Upcoming Scheduled events</h4>,
    },
    {
      value: "4",
      component: <h4>Participant clubs</h4>,
    },
    {
      value: "6",
      component: <h4>News posted by tournaments admins</h4>,
    },
    {
      value: "7",
      component: <h4>Photos shared by the User or targeted</h4>,
    },
    {
      value: "8",
      component: <h4>Videos shared by the User or targeted</h4>,
    },
  ],
};

const TournamentProfilePage = () => {
  return (
    <ProfileComponent
      tabContext={TournamentProfileInfo}
      profileInfo={TournamentProfileTabContext}
    />
  );
};

export default TournamentProfilePage;
