import { CustomError } from "./custom-error.js";

exports.NotAuthorizedError = class extends CustomError {
  constructor() {
    super();
    this.statusCode = 401;
    this.message = "Not Authorized";
  }
};
