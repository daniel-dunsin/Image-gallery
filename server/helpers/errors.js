class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.statusCode = code;
  }
}

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ err: err.message });
  }
  return res.status(500).send({ err: `An internal server error occured` });
};

const notFound = (req, res, next) => {
  return res.status(404).send({ msg: "Resource not found!" });
};

module.exports = {
  CustomError,
  errorHandler,
  notFound,
};
