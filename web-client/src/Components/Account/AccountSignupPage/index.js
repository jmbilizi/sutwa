import React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import PersonnalInfo from "./PersonnalInfo";
import Title from "../../../Components/Title";

//signup steps
// import Stepper from "@material-ui/core/Stepper";
// import Step from "@material-ui/core/Step";
// import StepLabel from "@material-ui/core/StepLabel";

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
  stepper: {
    padding: theme.spacing(3, 0, 3),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
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

const Signup = () => {
  //signup steps
  const steps = ["Personnel Info", "Password", "Confirmation", "Status"];
  const [activeStep, setActiveStep] = React.useState(0);
  const classes = useStyles();
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <PersonnalInfo classes={classes} />;
      case 1:
        return <h>Password</h>;
      case 2:
        return <h>Message</h>;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Title label="Sign Up" />
      {/* <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper> */}
      {/* <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <h1>End sign up!</h1>
            </React.Fragment>
          ) : ( */}
      <div className={classes.paper}>
        {getStepContent(activeStep)}
        <br />
        <br />
        {activeStep !== 0 && (
          <Button
            onClick={handleBack}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className="btn btn-primary"
          >
            Back
          </Button>
        )}
        <Button
          onClick={handleNext}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {activeStep === steps.length - 1 ? "Place order" : "Next"}
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Signup;
