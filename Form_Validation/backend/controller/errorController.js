const customError = require("../utils/customError");

const devErrors = (res, error) => {
  res.status(error.statusCode).json({
    status: error.statusCode,
    message: error.message,
    stackTrace: error.stackTrace,
    error: error,
  });
};

const prodErrors = (res, error) => {
  if (error.isOperational) {
    res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went wrong! Please try again later,",
    });
  }
};

const castErrorHandler = (error) => {
  const msg = `Invalid value for ${error.path}: ${error.value}`;
  return new customError(msg, 404);
};

const duplicateKeyErrorHandler = (error) => {
  const name = error.keyValue.name;
  const msg = `There is already a movie with name ${name}. Please use another name!`;
  return new customError(msg, 400);
};

const validationErrorHandler = (error) => {
  const errors = Object.values(error.errors).map((val) => val.message);
  const errorMessges = errors.join(". ");
  const msg = `Invalid input data : ${errorMessges}`;

  return new customError(msg, 400);
};

const handleExpiredJWT = (error) => {
  return new customError("The JWT has expired. Please login again!", 401);
};

const handleJWTError = (error) => {
  return new customError("Invalid Token. Please login again!", 401);
};

module.exports = (error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || "error";

  if (process.env.NODE_ENV === "development") {
    devErrors(res, error);
  } else if (process.env.NODE_ENV === "production") {
    if (error.name === "CastError") error = castErrorHandler(error);
    if (error.code === 11000) error = duplicateKeyErrorHandler(error);
    if (error.name === "ValidationError") error = validationErrorHandler(error);
    if (error.name === "TokenExpiredError") error = handleExpiredJWT(error);
    if (error.name === "JsonWebTokenError") error = handleJWTError(error);

    prodErrors(res, error);
  }
};
