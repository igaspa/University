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
          name: 'department_id',
          field: 'department_id'
        },
        onDelete: 'cascade'
      });
      department.belongsTo(models.major, {
        foreignKey: {
          name: 'major_id',
          field: 'major_id'
        },
        onDelete: 'cascade'
      });
    }
  }
  department.init({
    name: DataTypes.STRING,
    major_id: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'department',
    freezeTableName: true,
    indexes: [
      {
        unique: true,
        fields: ['name']
      }]
  });
  return department;
};
