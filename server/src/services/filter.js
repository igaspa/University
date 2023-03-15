const { Sequelize } = require('../database/models');

exports.searchByUserName = (queryParams) => {
  const option = [];
  const additionalFilters = filters(queryParams);
  option.push(...additionalFilters);

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

const filters = (queryParams) => {
  const option = [];
  if (queryParams.course) {
    const term = { course_id: queryParams.course };
    option.push(term);
  }
  if (queryParams.department) {
    const term = { department_id: queryParams.department };
    option.push(term);
  }
  if (queryParams.major) {
    const term = { major_id: queryParams.major };
    option.push(term);
  }
  return option;
};
