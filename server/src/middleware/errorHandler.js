const callbackErrorHandler = (callback) => {
  return (req, res, next) =>
    callback(req, res, next)
      .catch(next);
};

const errorMiddleware = async (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err.name === 'ValidationError') {
    res.status(400).json({ message: err.message });
  } else if (err.name === 'AuthorizationError') {
    res.status(401).json({ message: err.message });
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    res.status(400).json({ message: 'Item has to be unique' });
  } else if (err.name === 'NotFoundError') {
    res.status(404).json({ message: err.message });
  } else {
    console.error(err);
    res.status(err.statusCode ?? 500).json({ message: err.message ?? 'Oops, something went wrong!' });
  }
};

module.exports.callbackErrorHandler = callbackErrorHandler;
module.exports.errorMiddleware = errorMiddleware;
