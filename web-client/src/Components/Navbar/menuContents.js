import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
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
} from "@mui/icons-material";

import { makeStyles, useTheme } from "@mui/styles";
import Link from "next/link";

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
        backgroundColor: "#f1f1f1",
      },
    },
    sutwaApps: {
      "&:hover": {
        backgroundColor: "#f1f1f1",
      },
    },
    footerLinks: {
      "&:hover": {
        textDecoration: "underline",
        cursor: "pointer",
      },
    },
  }));
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <React.Fragment>
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
        <Link href="#" as="/account/signup">
          <span
            className={`${classes.sutwaBtn2} btn-default border text-center p-2`}
            onClick={closeMenu}
          >
            Sign up
          </span>
        </Link>
        <Link href="#" as="/account/login">
          <span
            className={`${classes.sutwaBtn1} btn-default text-center p-2`}
            onClick={closeMenu}
          >
            Log in
          </span>
        </Link>
      </div>
      <Divider className="my-3" />
      <div className="mx-3 mb-2 list-inline">
        <Link href="#">
          <small
            className={`list-inline-item ${classes.footerLinks}`}
            onClick={closeMenu}
          >
            Language(EN US)
          </small>
        </Link>

        <span className="d-flex gap-1 float-end">
          <Link href="#">
            <small
              className={`list-inline-item ${classes.footerLinks}`}
              onClick={closeMenu}
            >
              Privacy
            </small>
          </Link>
          <Link href="#">
            <small
              className={`list-inline-item ${classes.footerLinks}`}
              onClick={closeMenu}
            >
              Terms
            </small>
          </Link>
          <Link href="#">
            <small
              className={`list-inline-item ${classes.footerLinks}`}
              onClick={closeMenu}
            >
              Help
            </small>
          </Link>
        </span>
      </div>
    </React.Fragment>
  );
};

export const GeneralNotificationsMenuContent = () => {
  const useStyles = makeStyles((theme) => ({
    hover: {
      "&:hover": {
        backgroundColor: "#f1f1f1",
        borderRadius: "5px",
      },
    },
  }));
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <List className="p-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((Text, Index) => (
        <ListItem
          button
          key={Index}
          style={{ borderRadius: "5px" }}
          className={`${classes.hover}`}
        >
          <ListItemText primary={`Notification ${Text}`} />
        </ListItem>
      ))}
    </List>
  );
};

export const MessageNotificationsMenuContent = () => {
  const useStyles = makeStyles((them) => ({
    hover: {
      "&:hover": {
        backgroundColor: "#f1f1f1",
        borderRadius: "5px",
      },
    },
  }));
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <List className="p-2">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((Text, Index) => (
        <ListItem
          button
          key={Index}
          style={{ borderRadius: "5px" }}
          className={`${classes.hover} p-2`}
        >
          <ListItemText primary={`Message ${Text}`} />
        </ListItem>
      ))}
    </List>
  );
};

export const SutwAppsMenuContent = ({ closeMenu }) => {
  const useStyles = makeStyles((them) => ({
    hover: {
      "&:hover": {
        backgroundColor: "#f1f1f1",
        borderRadius: "5px",
      },
    },
  }));
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <List className="row mx-2">
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
        <Link key={Index} href={service.href}>
          <span
            className={`${classes.hover} col-4 text-center py-3`}
            style={{ textDecoration: "inherit", color: "inherit" }}
            onClick={closeMenu}
          >
            {service.icon}
            <label className="d-block pt-2">
              <small>{service.name}</small>
            </label>
          </span>
        </Link>
      ))}
    </List>
  );
};

export const CreateMenuContent = () => {
  const useStyles = makeStyles((them) => ({
    hover: {
      "&:hover": {
        backgroundColor: "#f1f1f1",
        borderRadius: "5px",
      },
    },
  }));
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <List className="p-2">
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
