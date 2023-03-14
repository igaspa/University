'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      enrollment.belongsTo(models.student, {
        foreignKey: {
          name: 'studentId',
          field: 'studentId'
        },
        onDelete: 'cascade'
      });
      enrollment.belongsTo(models.course, {
        foreignKey: {
          name: 'courseId',
          field: 'courseId'
        },
        onDelete: 'cascade'
      });
    }
  }
  enrollment.init({
    studentId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'enrollment'
  });
  return enrollment;
};
