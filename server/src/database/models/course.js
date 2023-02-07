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
          name: 'course_id',
          field: 'course_id'
        },
        onDelete: 'cascade'
      });
      course.belongsToMany(models.student, {
        through: models.enrollment,
        foreignKey: {
          name: 'course_id',
          field: 'course_id'
        },
        onDelete: 'cascade'
      });
      course.belongsToMany(models.professor, {
        through: models.lecturer,
        foreignKey: {
          name: 'course_id',
          field: 'course_id'
        },
        onDelete: 'cascade'
      });
      course.belongsTo(models.major, {
        foreignKey: {
          name: 'major_id',
          field: 'major_id'
        },
        onDelete: 'cascade'
      });
      course.hasMany(models.enrollment, {
        foreignKey: {
          name: 'course_id',
          field: 'course_id'
        },
        onDelete: 'cascade'
      });
    }
  }
  course.init({
    name: DataTypes.STRING,
    credit_hours: DataTypes.INTEGER,
    major_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'course',
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    freezeTableName: true,
    indexes: [
      {
        unique: true,
        fields: ['name']
      }]
  });
  return course;
};
