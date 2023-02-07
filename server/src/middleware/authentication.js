const jwt = require('jsonwebtoken');
require('dotenv').config();
const { AuthorizationError } = require('../validators/customErrors');

module.exports.validateToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    throw new AuthorizationError();
  }
  jwt.verify(token, process.env.SECRETTOKEN,
    (err, decoded) => {
      if (err) { throw new AuthorizationError(); }
      req.user = decoded.role.split();
    });
  next();
};

// Verify role of logged user
module.exports.verifyRoles = (...allowedRole) => {
  return (req, res, next) => {
    if (!req?.user) { throw new AuthorizationError(); }
    // Save user roles into array
    const rolesArray = [...allowedRole];
    // Go through all included roles and ones that are included
    const result = req.user.map(role => rolesArray.includes(role)).find(val => val === true);
    if (!result) { throw new AuthorizationError(); }
    return next();
  };
};
