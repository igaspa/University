const lecturerRoutes = require('./lecturer');
const courseRoutes = require('./course');
const departmentRoutes = require('./department');
const enrollmentRoutes = require('./enrollment');
const examRoutes = require('./exam');
const majorRoutes = require('./major');
const professorRoutes = require('./professor');
const resultRoutes = require('./result');
const studentRoutes = require('./student');
const authRoutes = require('./authentication');

const express = require('express');
const router = express.Router();

router.use('/lecturers', lecturerRoutes);
router.use('/courses', courseRoutes);
router.use('/departments', departmentRoutes);
router.use('/enrollments', enrollmentRoutes);
router.use('/exams', examRoutes);
router.use('/majors', majorRoutes);
router.use('/professors', professorRoutes);
router.use('/results', resultRoutes);
router.use('/students', studentRoutes);
router.use('/login', authRoutes);

module.exports = router;
