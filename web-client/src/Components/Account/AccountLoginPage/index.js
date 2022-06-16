import React, { useState } from "react";
import {
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import Title from "../../Title";
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
      cursor: "pointer",
    },
    color: "#0d6efd",
  },
}));

const Signin = () => {
  const [state, setState] = useState({
    phoneOrEmailOrSutwaID: null,
    password: null,
  });

  const { phoneOrEmailOrSutwaID, password } = state;
  const router = useRouter();

  const { doRequest, errors } = useRequest({
    url: "https://localhost:8080/signin",
    method: "post",
    body: {
      phoneOrEmailOrSutwaID,
      password,
    },
    onSuccess: () => router.push("/"),
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
      <div style={{ marginBottom: "50px" }} className={classes.paper}>
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
              control={<Checkbox value={true} color="primary" />}
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
                <Link href="#">
                  <small className={classes.modalLink}>Forgot password?</small>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/account" as="/account/signup">
                  <small className={classes.modalLink}>
                    Don't have an account? Sign Up
                  </small>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Signin;
