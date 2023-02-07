const models = require('../database/models');
const bcrypt = require('bcrypt');
const { NotFoundError, ValidationError } = require('../validators/customErrors');

module.exports.getAllStudents = async (req, res) => {
  const students = await models.student.findAll({
    include: [{
      model: models.major,
      attributes: ['name']
    }],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!students) { throw new NotFoundError(); }
  return res.status(200).json(students);
};

module.exports.getStudent = async (req, res) => {
  const student = await models.student.findOne({
    where: { id: req.params.id },

    include: [{
      model: models.major,
      attributes: ['name']
    }],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!student) { throw new NotFoundError(); }
  return res.status(200).json(student);
};

module.exports.createStudent = async (req, res) => {
  const { first_name, last_name, email, password, adress, phone_number, major_id } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const student = await models.student.create({
    first_name,
    last_name,
    email,
    password: encryptedPassword,
    adress,
    phone_number,
    major_id
  });
  if (!student) {
    throw new ValidationError('Can not create Student');
  }
  return res.status(201).json(student);
};
