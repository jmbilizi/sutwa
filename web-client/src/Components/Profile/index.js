import React from "react";
import { IconButton } from "@mui/material";
import { ThumbUp as LikeIcon } from "@mui/icons-material";
import { makeStyles, useTheme } from "@mui/styles";
import { TabsWithLink } from "../Tabs";
import Jambotron from "../../Components/Jambotron";
// import "./style.scss";

const Profile = ({ profileData }) => {
  const { profileInfo, tabContext } = profileData;
  const useStyles = makeStyles((theme) => ({
    coverContainer: {
      [theme.breakpoints.down("lg")]: {
        paddingBottom: "360px",
      },
      [theme.breakpoints.up("lg")]: {
        paddingBottom: "150px",
      },
    },
  }));

  const them = useTheme();
  const classes = useStyles(them);

  return (
    <React.Fragment>
      <Jambotron
        style={{ backgroundColor: "white" }}
        inlineBstStyle={`container-fluid mt-0 position-relative ${classes.coverContainer}`}
      >
        <img
          src={profileInfo.coverImage}
          className="px-lg-4 m-0"
          style={{ height: "450px", width: "100vw" }}
          alt="Cover"
        />
        <Jambotron inlineBstStyle="container-fluid px-lg-4 mt-3 position-absolute bottom-0">
          <div className="row align-items-end">
            <div className="col">
              <img
                src={profileInfo.image}
                className="rounded-circle border border-white border-5"
                style={{ height: "180px", width: "180px" }}
                alt="Profile"
              />
            </div>
            <div className="col-lg-7 d-grid justify-content-lg-start py-2">
              <div
                style={{ fontSize: "35px" }}
                className="fw-bold d-lg-flex mb-2"
              >
                {profileInfo.name}
              </div>
              <p className="fw-bolder text-muted d-lg-flex">
                {profileInfo.people}
              </p>
              <p className="d-lg-flex mb-0">{profileInfo.fewParticipants}</p>
            </div>
            <div className="col d-xlg-flex">
              <div className="p-1">
                <IconButton>
                  <LikeIcon />
                </IconButton>
              </div>
              <button
                className="btn btn-outline-secondary mx-2 px-4"
                type="button"
              >
                Follow
              </button>
              <button
                className="btn btn-outline-primary my-2 px-3"
                type="button"
              >
                Message
              </button>
            </div>
          </div>
          <hr className="mt-lg-0 mb-0"></hr>
        </Jambotron>
      </Jambotron>
      <TabsWithLink
        inlineBstStyle="container-fluid shadow-sm bottom px-lg-4"
        panelClassName="px-0 pt-0 m-0"
        variant="scrollable"
        scrollButtons="auto"
        tabContext={tabContext}
      />
    </React.Fragment>
  );
};

export default Profile;

// const ProfileData = {
//   profileInfo: {
//     coverImage: "https://picsum.photos/1000/450?grayscale",
//     profileImage: "https://picsum.photos/180?grayscale",
//     profileName: "Janvier Mbilizi",
//     people: "3.4K Friends . 12 Mutual",
//     //will add array of objects with image and url later that take you to the profile of the participant
//     fewParticipants: "Images Images",
//   },
//   tabContext: {
//     tabs: [
//       {
//         label: "About",
//         value: "1",
//       },
//       {
//         label: "Teams",
//         value: "2",
//       },
//       {
//         label: "Competitions",
//         value: "3",
//       },
//       {
//         label: "Posts",
//         value: "4",
//       },
//       {
//         label: "Friends",
//         value: "5",
//       },
//       {
//         label: "Photos",
//         value: "6",
//       },
//       {
//         label: "Videos",
//         value: "7",
//       },
//       {
//         label: "More",
//         value: "8",
//       },
//     ],
//     tabPanels: [
//       {
//         value: "1",
//         component: <h4>This is about the User</h4>,
//       },
//       {
//         value: "2",
//         component: <h4>Teams the User is or was in</h4>,
//       },
//       {
//         value: "3",
//         component: <h4>Competitions the User is or was in</h4>,
//       },
//       {
//         value: "4",
//         component: <h4>Posts the User created or was targeted In</h4>,
//       },
//       {
//         value: "5",
//         component: <h4>Users who are friends with the User</h4>,
//       },
//       {
//         value: "6",
//         component: <h4>Photos shared by the User or targeted</h4>,
//       },
//       {
//         value: "7",
//         component: <h4>Videos shared by the User or targeted</h4>,
//       },
//       {
//         value: "8",
//         component: <h4>More things!</h4>,
//       },
//     ],
//   },
// };
