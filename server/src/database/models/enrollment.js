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
          field: 'student_id'
        },
        onDelete: 'cascade'
      });
      enrollment.belongsTo(models.course, {
        foreignKey: {
          name: 'courseId',
          field: 'course_id'
        },
        onDelete: 'cascade'
      });
    }
  }
  enrollment.init({
    studentId: DataTypes.UUID,
    courseId: DataTypes.UUID,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'enrollment'
  });
  return enrollment;
};
