'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      lecturer.belongsTo(models.professor, {
        foreignKey: {
          name: 'professorId',
          field: 'professorId'
        },
        onDelete: 'cascade'
      });
      lecturer.belongsTo(models.course, {
        foreignKey: {
          name: 'courseId',
          field: 'courseId'
        },
        onDelete: 'cascade'
      });
    }
  }
  lecturer.init({
    professorId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'lecturer'
  });
  return lecturer;
};
