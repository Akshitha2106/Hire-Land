class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleWare = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  if (err.name === "CasteError") {
    const message = `Resource not found, Invalid ${path}`;
    err = newErrorHandler(404, message);
  }
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = newErrorHandler(404, message);
  }
  if (err.name === "JsonWebTokenError") {
    const message = `Json web token is invalid, Try Again`;
    err = newErrorHandler(404, message);
  }
  if (err.name === "TokenExpiredError") {
    const message = `Json web token is expired, Try Again`;
    err = newErrorHandler(404, message);
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
