import { CustomError } from "./custom-error.js";

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ error: { message: err.message } });
  }
  res.status(400).json({
    error: {
      message: "Something went wrong",
    },
  });
};

export { errorHandler };
