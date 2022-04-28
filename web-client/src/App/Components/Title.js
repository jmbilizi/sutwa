import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const Title = ({ label }) => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      margin: theme.spacing(0, 4),
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
    <div className={classes.paper}>
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