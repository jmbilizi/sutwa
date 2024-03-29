import React from "react";
import ProfileComponent from "../../Profile";

const MemberProfileInfo = {
  coverImage: "https://picsum.photos/1000/450?grayscale",
  image: "https://picsum.photos/180?grayscale",
  name: "Janvier Mbilizi",
  people: "3.4K Friends . 12 Mutual",
  //will add array of objects with image and url later that take you to the profile of the participant
  fewParticipants: "Images Images",
};

const MemberProfileTabContext = {
  tabs: [
    {
      label: "About",
      value: "1",
    },
    {
      label: "Teams",
      value: "2",
    },
    {
      label: "Tournaments",
      value: "3",
    },
    {
      label: "Posts",
      value: "4",
    },
    {
      label: "Friends",
      value: "5",
    },
    {
      label: "Photos",
      value: "6",
    },
    {
      label: "Videos",
      value: "7",
    },
    {
      label: "More",
      value: "8",
    },
  ],
  tabPanels: [
    {
      value: "1",
      component: <h4>This is about the User</h4>,
    },
    {
      value: "2",
      component: <h4>Teams the User is or was in</h4>,
    },
    {
      value: "3",
      component: <h4>Competitions the User is or was in</h4>,
    },
    {
      value: "4",
      component: <h4>Posts the User created or was targeted In</h4>,
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

const MemberProfilePage = () => {
  return (
    <ProfileComponent
      tabContext={MemberProfileTabContext}
      profileInfo={MemberProfileInfo}
    />
  );
};

export default MemberProfilePage;
