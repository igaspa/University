'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('student', {
      fields: ['major_id'],
      type: 'foreign key',
      name: 'student_major_association',
      references: {
        table: 'major',
        field: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
    await queryInterface.addConstraint('enrollment', {
      fields: ['student_id'],
      type: 'foreign key',
      name: 'enrollment_student_association',
      references: {
        table: 'student',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('result', {
      fields: ['exam_id'],
      type: 'foreign key',
      name: 'result_exam_association',
      references: {
        table: 'exam',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('enrollment', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'enrollment_course_association',
      references: {
        table: 'course',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('lecturer', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'course-classes-association',
      references: {
        table: 'course',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('lecturer', {
      fields: ['professor_id'],
      type: 'foreign key',
      name: 'professor-classes-association',
      references: {
        table: 'professor',
        field: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    });
    await queryInterface.addConstraint('professor', {
      fields: ['department_id'],
      type: 'foreign key',
      name: 'professor_department_association',
      references: {
        table: 'department',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('department', {
      fields: ['major_id'],
      type: 'foreign key',
      name: 'major_department_association',
      references: {
        table: 'major',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('course', {
      fields: ['major_id'],
      type: 'foreign key',
      name: 'major_course_association',
      references: {
        table: 'major',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('exam', {
      fields: ['course_id'],
      type: 'foreign key',
      name: 'exams_course_association',
      references: {
        table: 'course',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('result', {
      fields: ['student_id'],
      type: 'foreign key',
      name: 'result_student_association',
      references: {
        table: 'student',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('student', 'student_major_association');
    await queryInterface.removeConstraint('enrollment', 'enrollment_student_association');
    await queryInterface.removeConstraint('result', 'result_exam_association');
    await queryInterface.removeConstraint('enrollment', 'enrollment_course_association');
    await queryInterface.removeConstraint('lecturer', 'course-classes-association');
    await queryInterface.removeConstraint('lecturer', 'professor-classes-association');
    await queryInterface.removeConstraint('professor', 'professor_department_association');
    await queryInterface.removeConstraint('department', 'major_department_association');
    await queryInterface.removeConstraint('course', 'major_course_association');
    await queryInterface.removeConstraint('exam', 'exams_course_association');
    await queryInterface.removeConstraint('result', 'result_student_association');
  }
};
