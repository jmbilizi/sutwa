import React, { useState } from "react";
import {
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { ModalLink } from "react-router-modal-gallery";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../../Components/Title";
import { useRequest } from "../../../Hooks/useRequest";

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
    phoneOrEmailOrSutwaID: null,
    password: null,
  });

  const { phoneOrEmailOrSutwaID, password } = state;

  const { doRequest, errors } = useRequest({
    url: "https://localhost:8080/signin",
    method: "post",
    body: {
      phoneOrEmailOrSutwaID,
      password,
    },
    onSuccess: () => history.push("/"),
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, error: "", [name]: event.target.value });
  };

  const Submit = async (event) => {
    event.preventDefault();
    doRequest();
  };

  const classes = useStyles();

  return (
    <div>
      <Title label="Sign In" />
      {errors}
      <div style={{ marginBottom: "100px" }} className={classes.paper}>
        <Grid className={classes.form} container spacing={3} noValidate>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="phoneOrEmailOrSutwaID"
              label="Phone, email, or sutwaID"
              name="phoneOrEmailOrSutwaID"
              onChange={handleChange("phoneOrEmailOrSutwaID")}
              value={phoneOrEmailOrSutwaID}
              autoComplete="phoneOrEmailOrSutwaID"
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
              className={`${classes.submit} mb-3`}
              onClick={(event) => Submit(event)}
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
