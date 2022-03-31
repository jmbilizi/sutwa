import { CustomError } from "./custom-error.js";

const NotAuthorizedError = class extends CustomError {
  constructor() {
    super();
    this.statusCode = 403;
    this.message = "Not Authorized";
  }
};

export { NotAuthorizedError };
