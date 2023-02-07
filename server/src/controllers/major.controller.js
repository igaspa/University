const models = require('../database/models');
const { NotFoundError } = require('../validators/customErrors');

module.exports.getAllMajors = async (req, res) => {
  const majors = await models.major.findAll({
    include: [{
      model: models.student,
      attributes: ['first_name', 'last_name']
    }],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!majors) { throw new NotFoundError(); }
  return res.status(200).json(majors);
};

module.exports.getMajor = async (req, res) => {
  const major = await models.major.findOne({
    where: { id: req.params.id },
    include: [{
      model: models.student,
      attributes: ['first_name', 'last_name']
    }],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!major) { throw new NotFoundError(); }
  return res.status(200).json(major);
};
