import { CustomError } from "./custom-error.js";

const NotAuthenticatedError = class extends CustomError {
  constructor() {
    super();
    this.statusCode = 401;
    this.message = "Not Authenticated";
  }
};

export { NotAuthenticatedError };
