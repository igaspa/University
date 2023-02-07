const { NotFoundError, ValidationError } = require('../validators/customErrors');

module.exports.generalControllers = (Model) => ({

  async getAll (req, res) {
    const options = {
      order: [['id', 'ASC']],
      attributes: { exclude: ['created_at', 'updated_at'] }
    };
    const allItems = await Model.findAll(options);
    if (!allItems) { throw new NotFoundError(); }

    return res.status(200).json(allItems);
  },

  async getOne (req, res) {
    const { id } = req.params;

    const oneItem = await Model.findOne({
      where: { id },
      attributes: { exclude: ['created_at', 'updated_at'] }
    });
    if (!oneItem) { throw new NotFoundError(); }
    return res.status(200).json(oneItem);
  },

  async createItem (req, res) {
    const itemData = req.body;
    const newItem = await Model.create(itemData);
    if (!newItem) {
      throw new ValidationError('Can not create Item');
    }
    return res.status(201).json(newItem);
  },

  async updateItem (req, res) {
    const { id } = req.params;

    const updatedItem = await Model.update(req.body, {
      where: { id },
      returning: true,
      attributes: { exclude: ['created_at', 'updated_at'] }
    });
    if (!updatedItem[0]) { throw new NotFoundError(); }

    return res.status(200).json(updatedItem);
  },

  async deleteItem (req, res) {
    const { id } = req.params;
    const deletedItem = await Model.destroy({
      where: { id }
    });
    if (!deletedItem) { throw new NotFoundError(); }

    return res.status(204).json(id);
  }
});
