const models = require('../database/models');
const { NotFoundError } = require('../validators/customErrors');

module.exports.getAllResults = async (req, res) => {
  const results = await models.result.findAll({
    include: [
      {
        model: models.student,
        attributes: ['first_name', 'last_name']
      },
      {
        model: models.exam,
        attributes: ['name']
      }
    ],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!results) { throw new NotFoundError(); }
  return res.status(200).json(results);
};

module.exports.getResult = async (req, res) => {
  const { firstId, secondId } = req.params;
  const result = await models.result.findOne({
    where: { student_id: firstId, exam_id: secondId },
    include: [
      {
        model: models.student,
        attributes: ['first_name', 'last_name']
      },
      {
        model: models.exam,
        attributes: ['name']
      }
    ],
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!result) { throw new NotFoundError(); }
  return res.status(200).json(result);
};

module.exports.updateResult = async (req, res) => {
  const { firstId, secondId } = req.params;
  const updatedResult = await models.result.update(req.body, {
    where: { student_id: firstId, exam_id: secondId },
    returning: true,
    attributes: { exclude: ['created_at', 'updated_at'] }
  });
  if (!updatedResult[0]) { throw new NotFoundError(); }
  return res.status(200).json(updatedResult);
};

module.exports.deleteResult = async (req, res) => {
  const { firstId, secondId } = req.params;
  const deletedItem = await models.result.destroy({
    where: { student_id: firstId, exam_id: secondId }
  });
  if (!deletedItem) { throw new NotFoundError(); }

  return res.status(204).json(deletedItem);
};
