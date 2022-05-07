import React from "react";
import { TextField, Grid } from "@mui/material";
import Link from "@material-ui/core/Link";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import PhoneField from "react-phone-input-material-ui";
import "react-phone-input-material-ui/lib/style.css";

const PersonnalInfo = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [email, setEmail] = React.useState(true);
  const [phone, setPhone] = React.useState("");

  const handleEmail = () => setEmail(!email);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid container spacing={3} noValidate>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="firstname"
          label="First Name"
          name="firstname"
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
          name="lastname"
          autoComplete="last name"
        />
      </Grid>
      <Grid item xs={12}>
        {email ? (
          <TextField
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
        ) : (
          <PhoneField
            component={TextField}
            value={phone}
            enableSearch
            onChange={(value) => setPhone(value)}
          />
        )}
        <Link className="btn p-0 mt-1" onClick={handleEmail}>
          Use {email ? "phone" : "email"} instead
        </Link>
      </Grid>

      <Grid item xs={12} className="pb-0">
        <h5 className="font-weight-bold">Date of Birth</h5>
        <p className="mb-0">
          Please confirm your own age, even if this account is for a business, a
          pet, or something else. This will not be shown publicly.
        </p>
      </Grid>
      <Grid item xs={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            className="p-0"
            required
            fullWidth
            inputVariant="outlined"
            format="MM/dd/yyyy"
            id="birthdate"
            name="birthdate"
            placeholder="MM/DD/YYYY"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>
  );
};

export default PersonnalInfo;
