/* eslint-disable no-prototype-builtins */
const { NotFoundError, ValidationError } = require('../validators/customErrors');
const { EXCLUDE_LIST } = require('../utils/helper');

exports.getAll = async (model, query, req, res) => {
  const options = {
    attributes: { exclude: EXCLUDE_LIST },
    include: [],
    where: [{ deleted: false }]
  };

  if (query) {
    for (const property in query) {
      options[property] = options[property].concat(query[property]);
    }
  }

  if (req.query.page) {
    if (isNaN(req.query.page) || req.query.page < 1) {
      throw new ValidationError('Page requested is not a valid number.');
    }
  }
  const pageCount = await getNumberOfPages(model, options);

  res.set('Access-Control-Expose-Headers', 'X-Total-Pages');
  res.set('X-Total-Pages', pageCount);

  const allItems = await model.findAll(options);
  if (!allItems) throw new NotFoundError();
  res.status(200).json(allItems);
};

exports.getOne = async (model, query, req, res) => {
  const options = {
    attributes: { exclude: EXCLUDE_LIST },
    include: [],
    where: [{ id: req.params.id, deleted: false }]
  };

  if (query) {
    for (const property in query) {
      options[property] = options[property].concat(query[property]);
    }
  }

  const oneItem = await model.findOne(options);
  if (!oneItem) throw new NotFoundError();
  res.status(200).json(oneItem);
};

exports.createItem = async (model, req, res) => {
  const itemData = req.body;
  const newItem = await model.create(itemData);
  if (!newItem) throw new NotFoundError();

  res.status(201).json(newItem);
};

exports.updateItem = async (model, req, res) => {
  const updatedItem = await model.update(req.body, {
    where: { id: req.params.id, deleted: false },
    returning: true
  });
  if (!updatedItem[0]) { throw new NotFoundError(); }

  res.status(200).json(updatedItem);
};

exports.deleteItem = async (model, req, res) => {
  const deletedItem = await model.update({ deleted: true }, {
    where: { id: req.params.id },
    returning: true
  });
  if (!deletedItem[0]) { throw new NotFoundError(); }

  res.status(204).json(deletedItem);
};

const getNumberOfPages = async (model, query) => {
  const allItems = await model.count(query);
  const pageCount = Math.ceil(allItems / process.env.ITEM_PER_PAGE_LIMIT);

  return pageCount;
};
