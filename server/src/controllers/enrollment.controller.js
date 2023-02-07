const models = require('../database/models');
const { NotFoundError } = require('../validators/customErrors');

module.exports.getAllEnrollments = async (req, res) => {
  const enrollments = await models.enrollment.findAll({
    include: [
      {
        model: models.student,
        attributes: ['first_name', 'last_name']
      },
      {
        model: models.course,
        attributes: ['name']
      }
    ],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!enrollments) { throw new NotFoundError(); }
  return res.status(200).json(enrollments);
};

module.exports.getEnrollment = async (req, res) => {
  const { firstId, secondId } = req.params;
  const enrollment = await models.enrollment.findOne({
    where: { student_id: firstId, course_id: secondId },
    include: [
      {
        model: models.student,
        attributes: ['first_name', 'last_name']
      },
      {
        model: models.course,
        attributes: ['name']
      }
    ],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!enrollment) { throw new NotFoundError(); }
  return res.status(200).json(enrollment);
};

module.exports.deleteEnrollment = async (req, res) => {
  const { firstId, secondId } = req.params;
  const deletedItem = await models.enrollment.destroy({
    where: { student_id: firstId, course_id: secondId }
  });
  if (!deletedItem) { throw new NotFoundError(); }

  return res.status(204).json(deletedItem);
};
