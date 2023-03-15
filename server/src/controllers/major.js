const { major, student } = require('../database/models');
const { INCLUDE_USER_LIST } = require('../utils/helper');
const crudController = require('./crud');

exports.getAllMajors = async (req, res) => {
  const query = {
    include: {
      model: student,
      attributes: INCLUDE_USER_LIST
    }
  };
  await crudController.getAll(major, query, req, res);
};

exports.getMajor = async (req, res) => {
  const query = {
    include: {
      model: student,
      attributes: INCLUDE_USER_LIST
    }
  };
  await crudController.getOne(major, query, req, res);
};

exports.createMajor = async (req, res) => {
  await crudController.createItem(major, req, res);
};

exports.updateMajor = async (req, res) => {
  await crudController.updateItem(major, req, res);
};

exports.deleteMajor = async (req, res) => {
  await crudController.deleteItem(major, req, res);
};
