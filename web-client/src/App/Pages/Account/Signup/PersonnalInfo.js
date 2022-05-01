import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const PersonnalInfo = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [email, setEmail] = React.useState(true);

  const handleEmail = () => setEmail(!email);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid container spacing={3} noValidate>
      <Grid item xs={12} sm={6} className="py-0">
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstname"
          label="First Name"
          name="firstname"
          autoComplete="first name"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6} className="py-0">
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastname"
          label="Last Name"
          name="lastname"
          autoComplete="last name"
        />
      </Grid>
      <Grid item xs={12} className="py-0">
        {email ? (
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
        ) : (
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Phone"
            name="phone"
            autoComplete="phone"
          />
        )}
        <Link className="btn p-0 mb-4 mt-1" onClick={handleEmail}>
          Use {email ? "phone" : "email"} instead
        </Link>
      </Grid>

      <Grid item xs={12} className="py-0">
        <h5 className="font-weight-bold">Date of Birth</h5>
        <p className="mb-0">
          Please confirm your own age, even if this account is for a business, a
          pet, or something else. This will not be shown publicly.
        </p>
      </Grid>
      <Grid item xs={12} className="py-0">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            className="mt-2"
            required
            fullWidth
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="birthdate"
            name="birthdate"
            label="MM/DD/YYYY"
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
