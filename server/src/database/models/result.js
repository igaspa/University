'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class result extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      result.belongsTo(models.exam, {
        foreignKey: {
          name: 'examId',
          field: 'examId'
        },
        onDelete: 'cascade'
      });
      result.belongsTo(models.student, {
        foreignKey: {
          name: 'studentId',
          field: 'studentId'
        },
        onDelete: 'cascade'
      });
    }
  }
  result.init({
    grade: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    examId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'result'
  });
  return result;
};
