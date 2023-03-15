
const models = require('../database/models');
const bcrypt = require('bcrypt');
const { professor, department } = require('../database/models');
const { INCLUDE_NAME } = require('../utils/helper');
const crudController = require('./crud');

exports.getAllProfessors = async (req, res) => {
  const query = {
    include: {
      model: department,
      attributes: INCLUDE_NAME
    }
  };
  await crudController.getAll(professor, query, req, res);
};

exports.getProfessor = async (req, res) => {
  const query = {
    include: {
      model: department,
      attributes: INCLUDE_NAME
    }
  };
  await crudController.getOne(professor, query, req, res);
};
exports.createProfessor = async (req, res) => {
  const { firstName, lastName, email, password, address, phoneNumber, departmentId } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  const professor = await models.professor.create({
    firstName,
    lastName,
    email,
    password: encryptedPassword,
    address,
    phoneNumber,
    departmentId
  });
  return res.status(201).json(professor);
};

exports.updateProfessor = async (req, res) => {
  await crudController.updateItem(professor, req, res);
};

exports.deleteProfessor = async (req, res) => {
  await crudController.deleteItem(professor, req, res);
};
