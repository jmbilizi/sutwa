import { CustomError } from "./custom-error.js";

const ServerError = class extends CustomError {
  constructor() {
    super();
    this.statusCode = 500;
    this.message = "Internal Server Error";
  }
};

export { ServerError };
