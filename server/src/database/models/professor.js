'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      professor.belongsTo(models.department, {
        foreignKey: {
          name: 'departmentId',
          field: 'departmentId'
        },
        onDelete: 'cascade'
      });
      professor.belongsToMany(models.course, {
        through: models.lecturer,
        foreignKey: {
          name: 'professorId',
          field: 'professorId'
        },
        onDelete: 'cascade'
      });
    }
  }
  professor.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    departmentId: DataTypes.INTEGER,
    role: {
      type: DataTypes.VIRTUAL,
      get () {
        return 'professor';
      }
    }
  }, {
    sequelize,
    modelName: 'professor',
    indexes: [
      {
        unique: true,
        fields: ['email']
      }]
  });
  return professor;
};
