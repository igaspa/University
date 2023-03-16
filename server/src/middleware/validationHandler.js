const schemas = require('../validators/schema');
const { ValidationError } = require('../validators/customErrors');

exports.validateId = (req, res, next) => {
  const { error } = schemas.idSchema.validate(req.params);
  if (error) {
    throw new ValidationError(error.details[0].message);
  }
  next();
};
exports.validateCompositeId = (req, res, next) => {
  const { error } = schemas.compositeIdSchema.validate(req.params);
  if (error) {
    throw new ValidationError(error.details[0].message);
  }
  next();
};
exports.validateCourse = (req, res, next) => {
  schemas.validateSchema(schemas.courseSchema, req, res, next);
};
exports.validateMajor = (req, res, next) => {
  schemas.validateSchema(schemas.majorSchema, req, res, next);
};
exports.validateDepartment = (req, res, next) => {
  schemas.validateSchema(schemas.departmentSchema, req, res, next);
};
exports.validateExam = (req, res, next) => {
  schemas.validateSchema(schemas.examSchema, req, res, next);
};
exports.validateEnrollment = (req, res, next) => {
  schemas.validateSchema(schemas.enrollmentSchema, req, res, next);
};
exports.validateLecturer = (req, res, next) => {
  schemas.validateSchema(schemas.lecturerSchema, req, res, next);
};
exports.validateResult = (req, res, next) => {
  schemas.validateSchema(schemas.resultSchema, req, res, next);
};
exports.validateStudent = (req, res, next) => {
  schemas.validateSchema(schemas.studentSchema, req, res, next);
};
exports.validateProfessor = (req, res, next) => {
  schemas.validateSchema(schemas.professorSchema, req, res, next);
};

exports.validateAuthentication = (req, res, next) => {
  schemas.validateSchema(schemas.authenticationSchema, req, res, next);
};
