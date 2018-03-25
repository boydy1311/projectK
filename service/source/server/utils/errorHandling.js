const errorHandler = (msg, statusCode) => {
  const errorObj = {};
  errorObj.message = msg;
  errorObj.errorCode = statusCode;
  return errorObj;
};

module.exports = {
  errorHandler,
}
