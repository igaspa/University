const { result, student, exam } = require('../database/models');
const crudController = require('./crud');
const { INCLUDE_USER_LIST, EXCLUDE_LIST, INCLUDE_NAME } = require('../utils/helper');
const { NotFoundError } = require('../validators/customErrors');

exports.getAllResults = async (req, res) => {
  const query = {
    include: [
      {
        model: student,
        attributes: INCLUDE_USER_LIST
      },
      {
        model: exam,
        attributes: INCLUDE_NAME
      }
    ]
  };
  await crudController.getAll(result, query, req, res);
};

exports.getResult = async (req, res) => {
  const { firstId, secondId } = req.params;
  const query = {
    include: [
      {
        model: student,
        attributes: INCLUDE_USER_LIST
      },
      {
        model: exam,
        attributes: INCLUDE_NAME
      }
    ],
    where: { studentId: firstId, examId: secondId },
    attributes: { exclude: EXCLUDE_LIST }
  };

  const oneItem = await result.findOne(query);
  if (!oneItem) throw new NotFoundError();
  res.status(200).json(oneItem);
};

module.exports.updateResult = async (req, res) => {
  const { firstId, secondId } = req.params;
  const updatedResult = await result.update(req.body, {
    where: { studentId: firstId, examId: secondId },
    returning: true,
    attributes: { exclude: EXCLUDE_LIST }
  });
  if (!updatedResult[0]) { throw new NotFoundError(); }
  return res.status(200).json(updatedResult);
};

module.exports.deleteResult = async (req, res) => {
  const { firstId, secondId } = req.params;
  const deletedItem = await result.update({ deleted: true }, {
    where: { studentId: firstId, examId: secondId },
    returning: true
  });
  if (!deletedItem[0]) { throw new NotFoundError(); }

  return res.status(204).json(deletedItem);
};

exports.createResult = async (req, res) => {
  await crudController.createItem(result, req, res);
};
