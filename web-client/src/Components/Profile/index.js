import React from "react";
import { MenuList, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  ThumbUp as LikeIcon,
  MoreHoriz as MoreHorizIcon,
  AddBoxOutlined as AddBoxOutlinedIcon,
} from "@mui/icons-material";
import { makeStyles, useTheme } from "@mui/styles";
import Link from "next/link";
import { TabsWithLink } from "../Tabs";
import Jambotron from "../../Components/Jambotron";
import { SmallMenu } from "../Menu/smallMenu.js";

const useStyles = makeStyles((theme) => ({
  coverContainer: {
    [theme.breakpoints.down("lg")]: {
      paddingBottom: "360px",
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: "150px",
    },
  },
  hover: {
    "&:hover": {
      backgroundColor: "#f1f1f1",
      borderRadius: "5px",
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

const Profile = ({ profileInfo, tabContext, tabDefaultValue }) => {
  //Menu related staff
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [menuContent, setMenuContent] = React.useState(null);

  const handleClick = (event, menuCont) => {
    event.preventDefault();
    setAnchorEl(anchorEl ? null : event.currentTarget);
    setMenuContent(menuCont);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                  <LikeIcon />
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
          </div>
        </Jambotron>
      </Jambotron>
      <TabsWithLink
        panelClassName="px-0 pt-0 m-0"
        variant="scrollable"
        scrollButtons="auto"
        tabContext={tabContext}
        tabDefaultValue={tabDefaultValue}
        more={
          <span
            className={`${classes.moreHorizontal} px-2 my-3`}
            onClick={(event) =>
              handleClick(
                event,
                <MenuList dense className="p-2">
                  {[
                    {
                      name: "Post",
                      icon: <AddBoxOutlinedIcon />,
                      href: "/new-post",
                    },
                    {
                      name: "Team",
                      icon: <AddBoxOutlinedIcon />,
                      href: "/new-team",
                    },
                    {
                      name: "Club",
                      icon: <AddBoxOutlinedIcon />,
                      href: "/new-club",
                    },
                    {
                      name: "Competition",
                      icon: <AddBoxOutlinedIcon />,
                      href: "/new-competition",
                    },
                    {
                      name: "Tournament",
                      icon: <AddBoxOutlinedIcon />,
                      href: "/new-tournament",
                    },
                    {
                      name: "Facility",
                      icon: <AddBoxOutlinedIcon />,
                      href: "/new-facility",
                    },
                  ].map((object, Index) => (
                    <Link
                      key={Index}
                      style={{ textDecoration: "inherit", color: "inherit" }}
                      href={object.href}
                    >
                      <ListItem
                        className={`${classes.hover}`}
                        style={{ borderRadius: "5px" }}
                      >
                        <ListItemIcon>{object.icon}</ListItemIcon>
                        <ListItemText primary={`Create a ${object.name}`} />
                      </ListItem>
                    </Link>
                  ))}
                </MenuList>
              )
            }
          >
            <MoreHorizIcon sx={{ marginTop: 0 }} />
          </span>
        }
      />
      {open && (
        <SmallMenu
          anchorEl={anchorEl}
          menuContent={menuContent}
          clickAwayHandler={handleClose}
          isOpen={open}
          boxStyle={{ my: 2.6 }}
        />
      )}
    </React.Fragment>
  );
};

export default Profile;
