class ValidationError extends Error {
  constructor (message) {
    super(message);
    this.name = 'ValidationError';
  }
}
class AuthorizationError extends Error {
  constructor () {
    super('Unauthorized!!');
    this.name = 'AuthorizationError';
  }
}

class NotFoundError extends Error {
  constructor () {
    super('Item does not exist');
    this.name = 'NotFoundError';
  }
}

module.exports.ValidationError = ValidationError;
module.exports.AuthorizationError = AuthorizationError;
module.exports.NotFoundError = NotFoundError;
