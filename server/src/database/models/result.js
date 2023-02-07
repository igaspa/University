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
          name: 'exam_id',
          field: 'exam_id'
        },
        onDelete: 'cascade'
      });
      result.belongsTo(models.student, {
        foreignKey: {
          name: 'student_id',
          field: 'student_id'
        },
        onDelete: 'cascade'
      });
    }
  }
  result.init({
    grade: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    exam_id: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'result',
    freezeTableName: true
  });
  return result;
};
