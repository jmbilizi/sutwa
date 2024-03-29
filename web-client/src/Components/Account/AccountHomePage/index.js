import * as React from "react";
import { Grid, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Modal = dynamic(() => import("../../Modal"));
const AccountLoginPage = dynamic(() =>
  import("../../Account/AccountLoginPage")
);
const AccountSignupPage = dynamic(() =>
  import("../../Account/AccountSignupPage")
);

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
  },
  rightDiv: {
    margin: theme.spacing(0, 3),
  },
  logoLetter: {
    backgroundImage:
      "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  footer: {
    [theme.breakpoints.down(1450)]: {
      marginLeft: 24,
    },
    display: "flex",
    flexDirection: "column",
    msAlignSelf: "center",
    marginBottom: "0px",
  },
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
      cursor: "pointer",
    },
  },
  sutwaBtn2: {
    borderRadius: "500px",
    textDecoration: "none",
    fontSize: "20px",
    "&:hover": {
      backgroundColor: "#E8E8E8",
      cursor: "pointer",
    },
  },

  sutwaLogo: {
    backgroundImage:
      "linear-gradient(to right, #5bc0de 5%, #d9534f 25%, #5cb85c 50%, #f0ad4e 70%, #0275d8 95%)",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    height: "50px",
  },
  footerLinks: {
    "&:hover": {
      textDecoration: "underline",
      cursor: "pointer",
    },
  },
}));

const footer = [
  {
    name: "About",
    path: "#",
  },
  {
    name: "Terms of Service",
    path: "#",
  },
  {
    name: "Privacy Policy",
    path: "#",
  },
  {
    name: "Help Center",
    path: "#",
  },
  {
    name: "Cookie Policy",
    path: "#",
  },
  {
    name: "Ads info",
    path: "#",
  },
  {
    name: "Blog",
    path: "#",
  },
  {
    name: "Status",
    path: "#",
  },
  {
    name: "Brands Ressources",
    path: "#",
  },
  {
    name: "Advertising",
    path: "#",
  },
  {
    name: "Marketing",
    path: "#",
  },
  {
    name: "Sutwa for Business",
    path: "#",
  },
  {
    name: "Developers",
    path: "#",
  },
  {
    name: "Directory",
    path: "#",
  },
  {
    name: "Settings",
    path: "#",
  },
  {
    name: `© ${new Date().getFullYear()} Sutwa, Inc`,
    path: "#",
  },
];

export default function AccountHomePage() {
  const classes = useStyles();
  const router = useRouter();
  return (
    <React.Fragment>
      <Modal
        open={router.asPath === "/account/login"}
        scroll="body"
        onExited={() => router.back()}
      >
        <AccountLoginPage />
      </Modal>
      <Modal
        open={router.asPath === "/account/signup"}
        scroll="body"
        onExited={() => router.back()}
      >
        <AccountSignupPage />
      </Modal>
      <Grid container component="main" className={classes.root}>
        <Grid container>
          <Grid item xs={false} sm={6} md={7} className={classes.image} />
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            elevation={5}
            className={classes.paper}
          >
            <div className="mx-4 my-5">
              <Link href="/">
                <IconButton
                  style={{
                    fontSize: "50px",
                    color: "white",
                    fontWeight: "900",
                  }}
                  className={`${classes.sutwaLogo} py-1 px-4`}
                  href="/"
                >
                  S
                </IconButton>
              </Link>
              <h1 className="display-2 my-4">Entertaining Now</h1>
              <h1 className="display-6 mb-3">
                Join <span className={classes.logoLetter}>Sutwa</span> Today.
              </h1>
              <div className="d-grid gap-2 col-md-8 lead">
                <Link href="/account" as="/account/signup">
                  <span
                    className={`${classes.sutwaBtn2} btn-default border text-center p-2 mb-3`}
                  >
                    Sign up
                  </span>
                </Link>

                <Link href="/account" as="/account/login">
                  <span
                    className={`${classes.sutwaBtn1} btn-default text-center p-2`}
                  >
                    Log in
                  </span>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          style={{ fontSize: "13px" }}
          className={`justify-content-center bg-light fixed-bottom text-center py-3 footer`}
        >
          <div className="list-inline">
            {footer.map((element) => (
              <Link href={element.path} key={element.name}>
                <span
                  className={`list-inline-item mx-2 ${classes.footerLinks}`}
                >
                  {element.name}
                </span>
              </Link>
            ))}
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
