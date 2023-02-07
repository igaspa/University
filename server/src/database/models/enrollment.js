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
          name: 'student_id',
          field: 'student_id'
        },
        onDelete: 'cascade'
      });
      enrollment.belongsTo(models.course, {
        foreignKey: {
          name: 'course_id',
          field: 'course_id'
        },
        onDelete: 'cascade'
      });
    }
  }
  enrollment.init({
    student_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'enrollment',
    freezeTableName: true
  });
  return enrollment;
};
