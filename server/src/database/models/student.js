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
          name: 'student_id',
          field: 'student_id'
        },
        onDelete: 'cascade'
      });
      student.belongsToMany(models.course, {
        through: models.enrollment,
        foreignKey: {
          name: 'student_id',
          field: 'student_id'
        },
        onDelete: 'cascade'
      });
      student.belongsTo(models.major, {
        foreignKey: {
          name: 'major_id',
          field: 'major_id'
        },
        onDelete: 'cascade'
      });
      student.hasMany(models.result,
        {
          foreignKey: {
            name: 'student_id',
            field: 'student_id'
          },
          onDelete: 'cascade'
        });
      student.hasMany(models.enrollment,
        {
          foreignKey: {
            name: 'student_id',
            field: 'student_id'
          },
          onDelete: 'cascade'
        });
    }
  }
  student.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    adress: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    major_id: DataTypes.INTEGER,
    role: {
      type: DataTypes.VIRTUAL,
      get () {
        return 'student';
      }
    }
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'student',
    freezeTableName: true,
    indexes: [
      {
        unique: true,
        fields: ['email']
      }]
  });
  return student;
};
