const { AuthorizationError, NotFoundError } = require('../validators/customErrors');
const jwt = require('jsonwebtoken');
const { exam, lecturer } = require('../database/models');

exports.authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  if (!token) {
    throw new AuthorizationError();
  }
  const decodedToken = jwt.verify(token, process.env.SECRETTOKEN);
  console.log(decodedToken);
  req.user = {
    id: decodedToken.id,
    role: decodedToken.role
  };
  if (decodedToken.role === 'student') {
    if (decodedToken.id !== parseInt(req.params.firstId)) {
      throw new AuthorizationError();
    }
  } else if (decodedToken.role === 'professor') {
    const foundExam = await exam.findOne({
      where: { id: req.params.secondId || req.body.examId }
    });
    if (!foundExam) {
      throw new NotFoundError();
    }
    const foundLecturer = await lecturer.findOne({
      where: { professorId: decodedToken.id, courseId: foundExam.courseId }
    });
    if (!foundLecturer) {
      throw new AuthorizationError();
    }
  }
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
    return next();
  };
};
