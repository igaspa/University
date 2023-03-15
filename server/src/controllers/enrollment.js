const { enrollment, student, course } = require('../database/models');
const crudController = require('./crud');
const { INCLUDE_USER_LIST, INCLUDE_NAME } = require('../utils/helper');
const { NotFoundError } = require('../validators/customErrors');

exports.getAllEnrollments = async (req, res) => {
  const query = {
    include: [
      {
        model: student,
        attributes: INCLUDE_USER_LIST
      },
      {
        model: course,
        attributes: INCLUDE_NAME
      }
    ]
  };
  await crudController.getAll(enrollment, query, req, res);
};

exports.deleteEnrollment = async (req, res) => {
  const { firstId, secondId } = req.params;
  const deletedItem = await enrollment.update({ deleted: true }, {
    where: { studentId: firstId, courseId: secondId },
    returning: true
  });
  if (!deletedItem[0]) { throw new NotFoundError(); }

  return res.status(204).json(deletedItem);
};

exports.createEnrollment = async (req, res) => {
  await crudController.createItem(enrollment, req, res);
};
