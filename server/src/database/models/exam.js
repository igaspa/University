'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      exam.belongsToMany(models.student, {
        through: models.result,
        foreignKey: {
          name: 'examId',
          field: 'exam_id'
        }
      });
      exam.belongsTo(models.course, {
        foreignKey: {
          name: 'courseId',
          field: 'course_id'
        }
      });
      exam.hasMany(models.result,
        {
          foreignKey: {
            name: 'examId',
            field: 'examId'
          }
        });
    }
  }
  exam.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    courseId: DataTypes.UUID,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'exam'
  });
  return exam;
};
