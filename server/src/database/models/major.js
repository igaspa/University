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
          name: 'major_id',
          field: 'major_id'
        },
        onDelete: 'cascade'
      });
      major.hasMany(models.department, {
        foreignKey: {
          name: 'major_id',
          field: 'major_id'
        },
        onDelete: 'cascade'
      });
      major.hasMany(models.course, {
        foreignKey: {
          name: 'major_id',
          field: 'major_id'
        },
        onDelete: 'cascade'
      });
    }
  }
  major.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'major',
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
  return major;
};
