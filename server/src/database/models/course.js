'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      course.hasMany(models.exam, {
        foreignKey: {
          name: 'courseId',
          field: 'courseId'
        },
        onDelete: 'cascade'
      });
      course.belongsToMany(models.student, {
        through: models.enrollment,
        foreignKey: {
          name: 'courseId',
          field: 'courseId'
        },
        onDelete: 'cascade'
      });
      course.belongsToMany(models.professor, {
        through: models.lecturer,
        foreignKey: {
          name: 'courseId',
          field: 'courseId'
        },
        onDelete: 'cascade'
      });
      course.belongsTo(models.major, {
        foreignKey: {
          name: 'majorId',
          field: 'majorId'
        },
        onDelete: 'cascade'
      });
      course.hasMany(models.enrollment, {
        foreignKey: {
          name: 'courseId',
          field: 'courseId'
        },
        onDelete: 'cascade'
      });
    }
  }
  course.init({
    name: DataTypes.STRING,
    creditHours: DataTypes.INTEGER,
    majorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course',
    indexes: [
      {
        unique: true,
        fields: ['name']
      }]
  });
  return course;
};
