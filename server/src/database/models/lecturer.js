'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lecturer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      lecturer.belongsTo(models.professor, {
        foreignKey: {
          name: 'professor_id',
          field: 'professor_id'
        },
        onDelete: 'cascade'
      });
      lecturer.belongsTo(models.course, {
        foreignKey: {
          name: 'course_id',
          field: 'course_id'
        },
        onDelete: 'cascade'
      });
    }
  }
  lecturer.init({
    professor_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'lecturer',
    freezeTableName: true
  });
  return lecturer;
};
