const { AuthorizationError } = require('../validators/customErrors');
const jwt = require('jsonwebtoken');

exports.authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  if (!token) {
    throw new AuthorizationError();
  }
  const decodedToken = jwt.verify(token, process.env.SECRETTOKEN);
  req.user = {
    id: decodedToken.id,
    role: decodedToken.role
  };
  next();
};

// Verify role of logged user
exports.verifyRoles = (...allowedRole) => {
  return (req, res, next) => {
    if (!req?.user) { throw new AuthorizationError(); }
    const rolesArray = [...allowedRole];
    // Go through all included roles and find ones that are included
    const result = req.user.role.split(' ').map(role => rolesArray.includes(role)).find(val => val === true);
    if (!result) { throw new AuthorizationError(); }
    next();
  };
};
