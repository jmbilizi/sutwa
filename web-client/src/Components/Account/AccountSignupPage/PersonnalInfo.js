import React, { useState } from "react";
import { TextField, Grid } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import PhoneField from "react-phone-input-material-ui";
import "react-phone-input-material-ui/lib/style.css";

const PersonnalInfo = ({ classes }) => {
  const [isEmail, setEmail] = useState(true);
  const [state, setState] = useState({
    firstName: null,
    lastName: null,
    email: null,
    phone: null,
    dateOfBirth: null,
  });

  const handleIsEmail = () => setEmail(!isEmail);

  const handleChange = (name) => (event) => {
    setState({ ...state, error: "", [name]: event.target.value });
  };

  const { email, phone, dateOfBirth } = state;
  return (
    <Grid container spacing={3} noValidate>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="firstname"
          label="First Name"
          name="firstName"
          onChange={handleChange("firstName")}
          autoComplete="first name"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastname"
          label="Last Name"
          name="lastName"
          onChange={handleChange("lastName")}
          autoComplete="last name"
        />
      </Grid>
      <Grid item xs={12}>
        {isEmail ? (
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            value={email}
            name="email"
            onChange={handleChange("email")}
            autoComplete="email"
          />
        ) : (
          <PhoneField
            component={TextField}
            value={phone}
            enableSearch
            countryCodeEditable={false}
            country="us"
            onChange={handleChange("phone")}
            inputProps={{
              label: "Phone Number",
              name: "phone",
              required: true,
              fullWidth: true,
            }}
            masks={{ bi: ".. .. .. ..", cd: "... ... ..." }}
          />
        )}
        <span
          className={`btn p-0 mt-1 ${classes.modalLink}`}
          onClick={handleIsEmail}
        >
          Use {isEmail ? "phone" : "email"} instead
        </span>
      </Grid>

      <Grid item xs={12} className="pb-0">
        <h5 className="font-weight-bold">Date of Birth</h5>
        <p className="mb-0">
          Please confirm your own age, even if this account is for a business, a
          pet, or something else. This will not be shown publicly.
        </p>
      </Grid>
      <Grid item xs={12}>
        <DatePicker
          label="Date Of Birth"
          name="dateOfBirth"
          value={dateOfBirth}
          renderInput={(params) => (
            <TextField fullWidth required autoComplete="bday" {...params} />
          )}
          onChange={handleChange("dateOfBirth")}
        />
      </Grid>
    </Grid>
  );
};

export default PersonnalInfo;
