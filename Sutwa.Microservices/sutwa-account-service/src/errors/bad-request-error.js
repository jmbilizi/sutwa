import { CustomError } from "./custom-error.js";

const BadRequestError = class extends CustomError {
  constructor(message) {
    super();
    this.statusCode = 400;
    this.message = message;
  }
};

export { BadRequestError };
