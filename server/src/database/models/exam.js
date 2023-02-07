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
          name: 'exam_id',
          field: 'exam_id'
        }
      });
      exam.belongsTo(models.course, {
        foreignKey: {
          name: 'course_id',
          field: 'course_id'
        }
      });
      exam.hasMany(models.result,
        {
          foreignKey: {
            name: 'exam_id',
            field: 'exam_id'
          }
        });
    }
  }
  exam.init({
    name: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'exam',
    freezeTableName: true
  });
  return exam;
};
