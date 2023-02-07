const models = require('../database/models');
const { NotFoundError } = require('../validators/customErrors');

module.exports.getAllCourses = async (req, res) => {
  const courses = await models.course.findAll({
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!courses) {
    throw new NotFoundError();
  }

  return res.status(200).json(courses);
};

module.exports.getCourse = async (req, res) => {
  const courses = await models.course.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!courses) {
    throw new NotFoundError();
  }

  return res.status(200).json(courses);
};
