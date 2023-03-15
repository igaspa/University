const crudController = require('./crud');
const { exam } = require('../database/models');

exports.getAllExams = async (req, res) => {
  await crudController.getAll(exam, null, req, res);
};

exports.getExam = async (req, res) => {
  await crudController.getOne(exam, null, req, res);
};

exports.createExam = async (req, res) => {
  await crudController.createItem(exam, req, res);
};

exports.updateExam = async (req, res) => {
  await crudController.updateItem(exam, req, res);
};

exports.deleteExam = async (req, res) => {
  await crudController.deleteItem(exam, req, res);
};
