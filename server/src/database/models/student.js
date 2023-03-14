'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      student.belongsToMany(models.exam, {
        through: models.result,
        foreignKey: {
          name: 'studentId',
          field: 'studentId'
        },
        onDelete: 'cascade'
      });
      student.belongsToMany(models.course, {
        through: models.enrollment,
        foreignKey: {
          name: 'studentId',
          field: 'studentId'
        },
        onDelete: 'cascade'
      });
      student.belongsTo(models.major, {
        foreignKey: {
          name: 'majorId',
          field: 'majorId'
        },
        onDelete: 'cascade'
      });
      student.hasMany(models.result,
        {
          foreignKey: {
            name: 'studentId',
            field: 'studentId'
          },
          onDelete: 'cascade'
        });
      student.hasMany(models.enrollment,
        {
          foreignKey: {
            name: 'studentId',
            field: 'studentId'
          },
          onDelete: 'cascade'
        });
    }
  }
  student.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    majorId: DataTypes.INTEGER,
    role: {
      type: DataTypes.VIRTUAL,
      get () {
        return 'student';
      }
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'student',
    indexes: [
      {
        unique: true,
        fields: ['email']
      }]
  });
  return student;
};
