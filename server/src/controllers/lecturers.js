const { lecturer, professor, course } = require('../database/models');
const crudController = require('./crud');
const { INCLUDE_USER_LIST, INCLUDE_NAME } = require('../utils/helper');
const { NotFoundError } = require('../validators/customErrors');

exports.getAllLecturers = async (req, res) => {
  const query = {
    include: [
      {
        model: professor,
        attributes: INCLUDE_USER_LIST
      },
      {
        model: course,
        attributes: INCLUDE_NAME
      }
    ]
  };
  await crudController.getAll(lecturer, query, req, res);
};

exports.deleteLecturer = async (req, res) => {
  const { firstId, secondId } = req.params;
  const deletedItem = await lecturer.update({ deleted: true }, {
    where: { professorId: firstId, courseId: secondId },
    returning: true
  });
  if (!deletedItem[0]) { throw new NotFoundError(); }

  return res.status(204).json(deletedItem);
};

exports.createLecturer = async (req, res) => {
  await crudController.createItem(lecturer, req, res);
};
