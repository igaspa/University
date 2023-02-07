const schemas = require('../validators/schema');
const { ValidationError } = require('../validators/customErrors');

module.exports.validateId = (req, res, next) => {
  const { error } = schemas.idSchema.validate(req.params);
  if (error) {
    throw new ValidationError(error.details[0].message);
  }
  next();
};
module.exports.validateCompositeId = (req, res, next) => {
  const { error } = schemas.compositeIdSchema.validate(req.params);
  if (error) {
    throw new ValidationError(error.details[0].message);
  }
  next();
};
module.exports.validateCourse = (req, res, next) => {
  schemas.validateSchema(schemas.courseSchema, req, res, next);
};
module.exports.validateMajor = (req, res, next) => {
  schemas.validateSchema(schemas.majorSchema, req, res, next);
};
module.exports.validateDepartment = (req, res, next) => {
  schemas.validateSchema(schemas.departmentSchema, req, res, next);
};
module.exports.validateExam = (req, res, next) => {
  schemas.validateSchema(schemas.examSchema, req, res, next);
};
module.exports.validateEnrollment = (req, res, next) => {
  schemas.validateSchema(schemas.enrollmentSchema, req, res, next);
};
module.exports.validateLecturer = (req, res, next) => {
  schemas.validateSchema(schemas.lecturerSchema, req, res, next);
};
module.exports.validateResult = (req, res, next) => {
  schemas.validateSchema(schemas.resultSchema, req, res, next);
};
module.exports.validateStudent = (req, res, next) => {
  schemas.validateSchema(schemas.studentSchema, req, res, next);
};
module.exports.validateProfessor = (req, res, next) => {
  schemas.validateSchema(schemas.professorSchema, req, res, next);
};

module.exports.validateAuthentication = (req, res, next) => {
  schemas.validateSchema(schemas.authenticationSchema, req, res, next);
};
