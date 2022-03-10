import React from "react";
import * as Layouts from "../../../Components/Layouts";
import ProfileComponent from "../../../Components/Profile";

const ClubProfileData = {
  profileInfo: {
    coverImage: "https://picsum.photos/1000/450?grayscale",
    image: "https://picsum.photos/180?grayscale",
    name: "New American FC",
    people: "3.4K Friends . 12 Mutual",
    //will add array of objects with image and url later that take you to the profile of the participant
    fewParticipants: "Images Images",
  },
  tabContext: {
    tabs: [
      {
        label: "About",
        value: "1",
        url: "clubs/:id/about",
      },
      {
        label: "Members",
        value: "2",
        url: "clubs/:id/members",
      },
      {
        label: "Teams",
        value: "3",
        url: "clubs/:id/teams",
      },
      {
        label: "Competitions",
        value: "4",
        url: "clubs/:id/competitions",
      },
      {
        label: "Posts",
        value: "5",
        url: "clubs/:id/posts",
      },
      {
        label: "Photos",
        value: "6",
        url: "clubs/:id/photos",
      },
      {
        label: "Videos",
        value: "7",
        url: "clubs/:id/videos",
      },
      {
        label: "More",
        value: "8",
        url: "clubs/:id/more",
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
  },
};

const ClubProfilePage = () => {
  return (
    <Layouts.MainLayout>
      <ProfileComponent profileData={ClubProfileData} />
    </Layouts.MainLayout>
  );
};

export default ClubProfilePage;
