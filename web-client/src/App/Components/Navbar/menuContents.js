import React from "react";
import { ModalLink } from "react-router-modal-gallery";
import {
  Divider,
  Link,
  List,
  ListItem,
  // ListItemIcon,
  ListItemText,
} from "@material-ui/core";
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
        <small className="d-flex gap-2 float-end">
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
    <>
      <List>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((Text, Index) => (
          <>
            <ListItem button key={Text}>
              <ListItemText primary={`Notification ${Text}`} />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};

export const MessageNotificationsMenuContent = () => {
  return (
    <>
      <List>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((Text, Index) => (
          <>
            <ListItem button key={Text}>
              <ListItemText primary={`Message ${Text}`} />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};

export const SutwAppsMenuContent = () => {
  return (
    <>
      <List>
        {[
          "Account",
          "Feed",
          "Messaging",
          "Teams",
          "Clubs",
          "Competitions",
          "Tournaments",
        ].map((Text, Index) => (
          <>
            <ListItem button key={Text}>
              <ListItemText primary={`Sutwa ${Text}`} />
            </ListItem>
          </>
        ))}
      </List>
    </>
  );
};

export const CreateMenuContent = () => {
  return (
    <>
      <List>
        {["Post", "Team", "Club", "Competition", "Tournament"].map(
          (Text, Index) => (
            <>
              <ListItem button key={Text}>
                <ListItemText primary={`Create a ${Text}`} />
              </ListItem>
            </>
          )
        )}
      </List>
    </>
  );
};
