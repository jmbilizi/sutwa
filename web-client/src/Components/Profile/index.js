import React from "react";
import { IconButton } from "@mui/material";
import {
  ThumbUp as LikeIcon,
  MoreHoriz as MoreHorizIcon,
} from "@mui/icons-material";
import { makeStyles, useTheme } from "@mui/styles";
import { TabsWithLink } from "../Tabs";
import Jambotron from "../../Components/Jambotron";

const Profile = ({ profileInfo, tabContext, tabDefaultValue }) => {
  const useStyles = makeStyles((theme) => ({
    coverContainer: {
      [theme.breakpoints.down("lg")]: {
        paddingBottom: "360px",
      },
      [theme.breakpoints.up("lg")]: {
        paddingBottom: "150px",
      },
    },
    moreHorizontal: {
      backgroundColor: "#d5d5d5",
      marginLeft: "auto",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "#dddddd",
      },
    },
  }));

  const them = useTheme();
  const classes = useStyles(them);

  return (
    <React.Fragment>
      <Jambotron
        style={{ backgroundColor: "white" }}
        inlineBstStyle="container-fluid"
      >
        <Jambotron
          inlineBstStyle={`container-xl mt-0 position-relative ${classes.coverContainer}`}
        >
          <img
            src={profileInfo.coverImage}
            className="rounded-3 w-100"
            style={{ maxHeight: "470px" }}
            alt="coverImage"
          />
          <div className="container-fluid px-lg-4 mt-3 position-absolute bottom-0">
            <div className="row align-items-end mb-2">
              <div className="col-lg-2">
                <img
                  src={profileInfo.image}
                  className="rounded-circle border border-white border-5"
                  style={{ height: "180px", width: "180px" }}
                  alt="profileImage"
                />
              </div>
              <div className="col-lg-7 py-2 ms-3">
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
              <div className="col d-xlg-flex text-lg-end">
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
          </div>
        </Jambotron>
      </Jambotron>
      <TabsWithLink
        inlineBstStyle="container-fluid shadow-sm bottom"
        panelClassName="px-0 pt-0 m-0"
        variant="scrollable"
        scrollButtons="auto"
        tabContext={tabContext}
        tabDefaultValue={tabDefaultValue}
        more={
          <span
            className={`${classes.moreHorizontal} px-2 my-3`}
            onClick={() => alert("3 dots were clicked")}
          >
            <MoreHorizIcon sx={{ marginTop: 0 }} />
          </span>
        }
      />
    </React.Fragment>
  );
};

export default Profile;
