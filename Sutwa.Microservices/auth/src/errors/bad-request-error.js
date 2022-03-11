const { CustomError } = require("./custom-error");

exports.BadRequestError = class extends CustomError {
  constructor(message) {
    super();
    this.statusCode = 400;
    this.message = message;
  }
};
