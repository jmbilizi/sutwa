import { CustomError } from "./custom-error.js";

const NotFoundError = class extends CustomError {
  constructor(path) {
    super();
    this.statusCode = 404;
    this.message = `Page ${path}, Not Found.`;
  }
};

export { NotFoundError };
