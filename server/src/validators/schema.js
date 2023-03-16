const Joi = require('joi');
const { ValidationError } = require('../validators/customErrors');

exports.idSchema = Joi.object({
  id: Joi.number().min(1).max(100).required()
});

exports.compositeIdSchema = Joi.object({
  firstId: Joi.number().min(1).max(100).required(),
  secondId: Joi.number().min(1).max(100).required()
});

exports.courseSchema = Joi.object({
  name: Joi.string().required(),
  creditHours: Joi.number().min(0).max(5).required(),
  majorId: Joi.number().min(1).required()
});

exports.majorSchema = Joi.object({
  name: Joi.string().required()
});

exports.departmentSchema = Joi.object({
  name: Joi.string().required(),
  majorId: Joi.number().min(1).required()
});

exports.examSchema = Joi.object({
  name: Joi.string().required(),
  date: Joi.date().greater(Date.now() + 48 * 60 * 60 * 1000),
  courseId: Joi.number().min(1).required()
});

exports.enrollmentSchema = Joi.object({
  studentId: Joi.number().required().min(1),
  courseId: Joi.number().required().min(1)
});

exports.lecturerSchema = Joi.object({
  professorId: Joi.number().min(1).required(),
  courseId: Joi.number().min(1).required()
});

exports.resultSchema = Joi.object({
  grade: Joi.number().min(1).max(5).required(),
  studentId: Joi.number().min(1).required(),
  examId: Joi.number().min(1).required()
});

exports.studentSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(3).max(50).required(),
  address: Joi.string().min(3).max(50).required(),
  phoneNumber: Joi.string().max(15).required(),
  majorId: Joi.number().min(1).required()
});

exports.professorSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(3).max(50).required(),
  address: Joi.string().min(3).max(50).required(),
  phoneNumber: Joi.string().min(9).max(15).required(),
  departmentId: Joi.number().min(1).required()
});

exports.authenticationSchema = Joi.object({
  email: Joi.string().min(3).max(50).required(),
  password: Joi.string().min(3).max(50).required()
});

exports.validateSchema = (schema, req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    next(new ValidationError(error.details[0].message));
  }
  next();
};
