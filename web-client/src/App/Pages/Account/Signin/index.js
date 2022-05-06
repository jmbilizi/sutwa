import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Grid } from "@mui/material";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { ModalLink } from "react-router-modal-gallery";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../../Components/Title";

//import axios from "axios";

//import { authenticate, isAuth } from "../../../Helpers";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(0, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sutwaBtn1: {
    borderImage:
      "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
    borderImageSlice: 1,
    backgroundImage:
      "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    borderImage:
      "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
    borderImageSlice: 1,
    backgroundImage:
      "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
    margin: theme.spacing(3, 0, 2),
    height: "50px",
  },
  modalLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const Signin = ({ history }) => {
  const [state, setState] = useState({
    emailPhoneOrSutwaID: "",
    password: "",
    error: "",
  });
  const { emailPhoneOrSutwaID, password, error } = state;

  const handleChange = (name) => (event) => {
    setState({ ...state, error: "", [name]: event.target.value });
  };

  // const informParent = (response) => {
  //   authenticate(response, () => {
  //     isAuth() && isAuth().role === "admin"
  //       ? history.push("/admin")
  //       : history.push(`/user/${isAuth()._id}`);
  //   });
  // };

  const classes = useStyles();

  return (
    <div>
      <Title label="Sign In" />
      <div
        className="alert alert-danger text-center"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
      <div style={{ marginBottom: "100px" }} className={classes.paper}>
        <Grid className={classes.form} container spacing={3} noValidate>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Phone, email, or sutwaID"
              name="email"
              onChange={handleChange("emailPhoneOrSutwaID")}
              value={emailPhoneOrSutwaID}
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              onChange={handleChange("password")}
              value={password}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <ModalLink className={classes.modalLink} to="#">
                  Forgot password?
                </ModalLink>
              </Grid>
              <Grid item>
                <ModalLink className={classes.modalLink} to="/account/signup">
                  {"Don't have an account? Sign Up"}
                </ModalLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Signin;
