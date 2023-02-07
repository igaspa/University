const models = require('../database/models');
const { NotFoundError } = require('../validators/customErrors');

module.exports.getAllLecturers = async (req, res) => {
  const lecturers = await models.lecturer.findAll({
    include: [
      {
        model: models.professor,
        attributes: ['first_name', 'last_name']
      },
      {
        model: models.course,
        attributes: ['name']
      }
    ],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!lecturers) { throw new NotFoundError(); }
  return res.status(200).json(lecturers);
};

module.exports.getLecturer = async (req, res) => {
  const { firstId, secondId } = req.params;
  const lecturer = await models.lecturer.findOne({
    where: { professor_id: firstId, course_id: secondId },
    include: [
      {
        model: models.professor,
        attributes: ['first_name', 'last_name']
      },
      {
        model: models.course,
        attributes: ['name']
      }
    ],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!lecturer) { throw new NotFoundError(); }
  return res.status(200).json(lecturer);
};

module.exports.deleteLecturer = async (req, res) => {
  const { firstId, secondId } = req.params;
  const deletedItem = await models.lecturer.destroy({
    where: { professor_id: firstId, course_id: secondId }
  });
  if (!deletedItem) { throw new NotFoundError(); }

  return res.status(204).json(deletedItem);
};
