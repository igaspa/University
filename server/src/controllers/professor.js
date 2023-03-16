const bcrypt = require('bcrypt');
const { professor, department } = require('../database/models');
const { INCLUDE_NAME } = require('../utils/helper');
const crudController = require('./crud');
const { searchByUserName } = require('../services/filter');

exports.getAllProfessors = async (req, res) => {
  const searchedName = searchByUserName(req.query);

  const query = {
    include: {
      model: department,
      attributes: INCLUDE_NAME
    },
    where: searchedName
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
  req.body.password = await bcrypt.hash(req.body.password, 10);
  await crudController.createItem(professor, req, res);
};

exports.updateProfessor = async (req, res) => {
  await crudController.updateItem(professor, req, res);
};

exports.deleteProfessor = async (req, res) => {
  await crudController.deleteItem(professor, req, res);
};
