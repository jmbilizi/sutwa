const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { json } = require("body-parser");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const _ = require("lodash");
require("dotenv").config();
const app = express();

//custom errors and error handler
const { errorHandler } = require("./middlewares/error-handler");
const { NotFoundError } = require("./errors/not-found-error");

// import routes
const currentuserRouter = require("./routes/current-user");
//const phoneRouter = require("./routes/Phone");
//const emailRouter = require("./routes/Email");
const signupRouter = require("./routes/signup");
const signinRouter = require("./routes/signin");
const signoutRouter = require("./routes/signout");

// const accountActivationRouter = require("./routes/account-activation");
// const googleLoginRouter = require("./routes/google-login");
// const facebookLoginRouter = require("./routes/facebook-login");
// const resetPasswordRouter = require("./routes/reset-password");

//middleware
app.use(morgan("dev"));
app.use(json());
app.set("trust proxy", true);
app.use(cookieParser());
app.use(
  cookieSession({
    signed: false,
    secure: true,
    overwrite: true,
  })
);
app.use(cors()); // allows all origins
//app.use(cors({ origin: process.env.CLIENT_URL }));

//routes
//app.use(phoneRouter);
//app.use(emailRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(currentuserRouter);
app.use(signoutRouter);
// app.use(accountActivationRouter);
// app.use(googleLoginRouter);
// app.use(facebookLoginRouter);
// app.use(resetPasswordRouter);

app.get("/", (req, res) =>
  res.status(200).send("Welcome to sutwa.com Auth API")
);

app.all("*", async (req, res, next) => {
  const err = new NotFoundError(req.path);
  next(err);
});

app.use(errorHandler);

module.exports = app;
