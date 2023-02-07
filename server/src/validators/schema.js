const Joi = require('joi');
const { ValidationError } = require('../validators/customErrors');

module.exports.idSchema = Joi.object({
  id: Joi.number().min(1).max(100).required()
});

module.exports.compositeIdSchema = Joi.object({
  firstId: Joi.number().min(1).max(100).required(),
  secondId: Joi.number().min(1).max(100).required()
});

module.exports.courseSchema = Joi.object({
  name: Joi.string().required(),
  credit_hours: Joi.number().min(0).max(5).required(),
  major_id: Joi.number().min(1).required()
});

module.exports.majorSchema = Joi.object({
  name: Joi.string().required()
});

module.exports.departmentSchema = Joi.object({
  name: Joi.string().required(),
  major_id: Joi.number().min(1).required()
});

module.exports.examSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.date().greater(Date.now() + 48 * 60 * 60 * 1000),
  course_id: Joi.number().min(1).required()
});

module.exports.enrollmentSchema = Joi.object({
  student_id: Joi.number().required().min(1),
  course_id: Joi.number().required().min(1)
});

module.exports.lecturerSchema = Joi.object({
  professor_id: Joi.number().min(1).required(),
  course_id: Joi.number().min(1).required()
});

module.exports.resultSchema = Joi.object({
  grade: Joi.number().min(1).max(5).required(),
  student_id: Joi.number().min(1).required(),
  exam_id: Joi.number().min(1).required()
});

module.exports.studentSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(3).max(50).required(),
  adress: Joi.string().min(3).max(50).required(),
  phone_number: Joi.string().max(15).required(),
  major_id: Joi.number().min(1).required()
});

module.exports.professorSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(3).max(50).required(),
  adress: Joi.string().min(3).max(50).required(),
  phone_number: Joi.string().min(9).max(15).required(),
  department_id: Joi.number().min(1).required()
});

module.exports.authenticationSchema = Joi.object({
  email: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(3).max(50).required()
});

module.exports.validateSchema = (schema, req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    next(new ValidationError(error.details[0].message));
  }
  next();
};
