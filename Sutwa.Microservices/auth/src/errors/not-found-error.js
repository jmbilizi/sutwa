const { CustomError } = require("./custom-error");

exports.NotFoundError = class extends CustomError {
  constructor(path) {
    super();
    this.statusCode = 404;
    this.message = `Page ${path}, Not Found.`;
  }
};
