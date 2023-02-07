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
          name: 'department_id',
          field: 'department_id'
        },
        onDelete: 'cascade'
      });
      professor.belongsToMany(models.course, {
        through: models.lecturer,
        foreignKey: {
          name: 'professor_id',
          field: 'professor_id'
        },
        onDelete: 'cascade'
      });
    }
  }
  professor.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    adress: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    department_id: DataTypes.INTEGER,
    role: {
      type: DataTypes.VIRTUAL,
      get () {
        return 'professor';
      }
    }
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'professor',
    freezeTableName: true,
    indexes: [
      {
        unique: true,
        fields: ['email']
      }]
  });
  return professor;
};
