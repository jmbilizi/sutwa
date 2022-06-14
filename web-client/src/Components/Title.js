import React from "react";
import { makeStyles } from "@mui/styles";
import { IconButton, Typography } from "@mui/material";

const Title = ({ label }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    sutwaLogo: {
      margin: theme.spacing(1),
      borderImage:
        "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
      borderImageSlice: 1,
      backgroundImage:
        "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
    },
  }));
  const classes = useStyles();

  return (
    <div className={`${classes.paper} mb-4`}>
      <IconButton
        style={{
          paddingLeft: "14px",
          paddingRight: "14px",
          fontSize: "35px",
          color: "white",
          fontWeight: "900",
        }}
        className={`${classes.sutwaLogo} py-0 m-0`}
        href="#"
      >
        S
      </IconButton>

      <Typography component="h2" variant="h5">
        {label}
      </Typography>
    </div>
  );
};

export default Title;
