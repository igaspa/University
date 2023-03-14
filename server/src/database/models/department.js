'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      department.hasMany(models.professor, {
        foreignKey: {
          name: 'departmentId',
          field: 'departmentId'
        },
        onDelete: 'cascade'
      });
      department.belongsTo(models.major, {
        foreignKey: {
          name: 'majorId',
          field: 'majorId'
        },
        onDelete: 'cascade'
      });
    }
  }
  department.init({
    name: DataTypes.STRING,
    majorId: DataTypes.INTEGER,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'department',
    indexes: [
      {
        unique: true,
        fields: ['name']
      }]
  });
  return department;
};
