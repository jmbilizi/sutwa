import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import _ from "lodash";
//custom errors and error handler
import { NotFoundError, errorHandler } from "./errors/_index.js";
// import routes
import currentuserRouter from "./routes/current-user.js";
//const phoneRouter = require("./routes/Phone");
//const emailRouter = require("./routes/Email");
import signupRouter from "./routes/signup.js";
import signinRouter from "./routes/signin.js";
import signoutRouter from "./routes/signout.js";
import resetPasswordRouter from "./routes/reset-password.js";
// const accountActivationRouter = require("./routes/account-activation");
// const googleLoginRouter = require("./routes/google-login");
// const facebookLoginRouter = require("./routes/facebook-login");

const app = express();

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
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
app.use(resetPasswordRouter);
// app.use(accountActivationRouter);
// app.use(googleLoginRouter);
// app.use(facebookLoginRouter);

app.get("/", (req, res) =>
  res.status(200).send("Welcome to sutwa.com Auth API")
);

app.all("*", async (req, res, next) => {
  const err = new NotFoundError(req.path);
  next(err);
});

app.use(errorHandler);

export default app;
