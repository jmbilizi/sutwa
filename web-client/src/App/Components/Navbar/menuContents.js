import React from "react";
import { ModalLink } from "react-router-modal-gallery";
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  AccountCircle as AccountCircleIcon,
  Mail as MailIcon,
  Group as GroupIcon,
  Pets as ClubIcon,
  EmojiEvents as EmojiEventsIcon,
  Event as EventIcon,
  Place as PlaceIcon,
  AddBoxOutlined as AddBoxOutlinedIcon,
  Announcement as AnnouncementIcon,
} from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";

export const AccountMenuContent = ({ closeMenu }) => {
  const useStyles = makeStyles((theme) => ({
    sutwaBtn1: {
      textDecoration: "none",
      fontSize: "20px",

      border: "3px solid",
      borderImage:
        "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
      borderImageSlice: 1,
      "&:hover": {
        backgroundImage:
          "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
      },
    },
    sutwaBtn2: {
      borderRadius: "500px",
      textDecoration: "none",
      fontSize: "20px",
      "&:hover": {
        backgroundColor: "#E8E8E8",
      },
    },
    sutwaApps: {
      "&:hover": {
        backgroundColor: "#E8E8E8",
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      <div className="px-3">
        content that are anchored to the left or right edge of the screen.
        Navigation drawers provide access to destinations in your app. Side
        sheets are surfaces access to destinations in your app. Side sheets are
        surfaces to the left or right edge of the screen. Navigation drawers
        provide access to destinations in your app. Side sheets are surfaces
        access to destinations in your app. Side sheets are surfaces
      </div>
      <Divider className="my-3" />
      <div className="d-grid gap-2 lead px-3">
        <ModalLink
          className={`${classes.sutwaBtn2} btn-default border text-center p-2`}
          onClick={closeMenu}
          to="/signup"
        >
          Sign up
        </ModalLink>
        <ModalLink
          className={`${classes.sutwaBtn1} btn-default text-center p-2`}
          onClick={closeMenu}
          to="/login"
        >
          Log in
        </ModalLink>
      </div>
      <Divider className="my-3" />
      <div className="mx-3 mb-2">
        <small>
          <Link href="#">Language(EN US)</Link>
        </small>
        <small className="d-flex gap-2 float-end sutwa-apps">
          <Link href="/help">Help</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </small>
      </div>
    </>
  );
};

export const GeneralNotificationsMenuContent = () => {
  return (
    <List className="p-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((Text, Index) => (
        <ListItem button key={Index} style={{ borderRadius: "5px" }}>
          <ListItemText primary={`Notification ${Text}`} />
        </ListItem>
      ))}
    </List>
  );
};

export const MessageNotificationsMenuContent = () => {
  return (
    <List className="p-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((Text, Index) => (
        <ListItem button key={Index} style={{ borderRadius: "5px" }}>
          <ListItemText primary={`Message ${Text}`} />
        </ListItem>
      ))}
    </List>
  );
};

export const SutwAppsMenuContent = () => {
  const useStyles = makeStyles((theme) => ({
    hover: {
      "&:hover": {
        backgroundColor: "#E8E8E8",
        borderRadius: "5px",
      },
    },
  }));

  const classes = useStyles();
  return (
    <List className="row p-2">
      {[
        {
          name: "Account",
          icon: <AccountCircleIcon fontSize="large" />,
          href: "/account",
        },
        {
          name: "Feed",
          icon: <AnnouncementIcon fontSize="large" />,
          href: "/feed",
        },
        {
          name: "Messaging",
          icon: <MailIcon fontSize="large" />,
          href: "/messaging",
        },
        {
          name: "Teams",
          icon: <GroupIcon fontSize="large" />,
          href: "/teams",
        },
        {
          name: "Competitions",
          icon: <EmojiEventsIcon fontSize="large" />,
          href: "/competitions",
        },
        {
          name: "Events",
          icon: <EventIcon fontSize="large" />,
          href: "/events",
        },
        {
          name: "Tournaments",
          icon: (
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "Center",
                alignItems: "Center",
              }}
            >
              <EmojiEventsIcon fontSize="large" />
              <EmojiEventsIcon
                fontSize="large"
                style={{ marginLeft: "-1rem" }}
              />
            </span>
          ),
          href: "/tournaments",
        },
        {
          name: "Facilities",
          icon: <PlaceIcon fontSize="large" />,
          href: "/facilities",
        },
        {
          name: "Clubs",
          icon: <ClubIcon fontSize="large" />,
          href: "/clubs",
        },
      ].map((service, Index) => (
        <Link
          key={Index}
          className={`${classes.hover} col-4 text-center py-3`}
          href={service.href}
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          {service.icon}
          <label className="d-block pt-2">
            <small>{service.name}</small>
          </label>
        </Link>
      ))}
    </List>
  );
};

export const CreateMenuContent = () => {
  const useStyles = makeStyles((theme) => ({
    hover: {
      "&:hover": {
        backgroundColor: "#E8E8E8",
        borderRadius: "5px",
      },
    },
  }));

  const classes = useStyles();

  return (
    <List className="mx-2">
      {[
        {
          name: "Post",
          icon: <AddBoxOutlinedIcon />,
          href: "/new-post",
        },
        { name: "Team", icon: <AddBoxOutlinedIcon />, href: "/new-team" },
        { name: "Club", icon: <AddBoxOutlinedIcon />, href: "/new-club" },
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
    </List>
  );
};
