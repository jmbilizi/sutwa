import { CustomError } from "./custom-error.js";

const NotAuthorizedError = class extends CustomError {
  constructor() {
    super();
    this.statusCode = 401;
    this.message = "Not Authorized";
  }
};

export { NotAuthorizedError };
