
const models = require('../database/models');
const bcrypt = require('bcrypt');
const { ValidationError, NotFoundError } = require('../validators/customErrors');

module.exports.getAllProfessors = async (req, res) => {
  const professors = await models.professor.findAll({
    include: [{
      model: models.department,
      attributes: ['name']
    }],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!professors) { throw new NotFoundError(); }
  return res.status(200).json(professors);
};

module.exports.getProfessor = async (req, res) => {
  const professor = await models.professor.findOne({
    where: { id: req.params.id },
    include: [{
      model: models.department,
      attributes: ['name']
    }],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!professor) { throw new NotFoundError(); }
  return res.status(200).json(professor);
};
module.exports.createProfessor = async (req, res) => {
  const { first_name, last_name, email, password, adress, phone_number, department_id } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const professor = await models.professor.create({
    first_name,
    last_name,
    email,
    password: encryptedPassword,
    adress,
    phone_number,
    department_id
  });
  if (!professor) {
    throw new ValidationError('Can not create Professor');
  }
  return res.status(201).json(professor);
};
