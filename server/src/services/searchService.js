const { Sequelize } = require('../database/models');

exports.searchByUserName = (queryParams) => {
  const option = [];
  if (queryParams.firstName) {
    const term = { first_name: { [Sequelize.Op.iLike]: '%' + queryParams.firstName + '%' } };
    option.push(term);
  }
  if (queryParams.lastName) {
    const term = { last_name: { [Sequelize.Op.iLike]: '%' + queryParams.lastName + '%' } };
    option.push(term);
  }
  return option;
};

exports.searchByName = (queryParams) => {
  const option = [];
  if (queryParams.name) {
    const term = { name: { [Sequelize.Op.iLike]: '%' + queryParams.name + '%' } };
    option.push(term);
  }
  return option;
};
