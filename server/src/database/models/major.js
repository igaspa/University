'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class major extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      major.hasMany(models.student, {
        foreignKey: {
          name: 'majorId',
          field: 'major_id'
        },
        onDelete: 'cascade'
      });
      major.hasMany(models.department, {
        foreignKey: {
          name: 'majorId',
          field: 'major_id'
        },
        onDelete: 'cascade'
      });
      major.hasMany(models.course, {
        foreignKey: {
          name: 'majorId',
          field: 'major_id'
        },
        onDelete: 'cascade'
      });
    }
  }
  major.init({
    name: DataTypes.STRING,
    deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'major',
    indexes: [
      {
        unique: true,
        fields: ['name']
      }]
  });
  return major;
};
