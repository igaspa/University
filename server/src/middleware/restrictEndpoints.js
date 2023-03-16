const { AuthorizationError, NotFoundError } = require('../validators/customErrors');
const { result, exam, lecturer } = require('../database/models');
// Verify if student has access to their own exam results
exports.verifyStudentResultAccess = async (req, res, next) => {
  if (!req?.user) { throw new AuthorizationError(); }

  const studentId = parseInt(req.params.firstId);
  const examId = parseInt(req.params.secondId);

  const foundResult = await result.findOne({ where: { studentId: req.user.id, examId } });
  if (!foundResult) throw new NotFoundError();

  if (foundResult.studentId !== studentId) { throw new AuthorizationError(); }

  next();
};

exports.verifyProfessorResultAccess = async (req, res, next) => {
  if (!req?.user) { throw new AuthorizationError(); }

  const examId = parseInt(req.params.secondId || req.body.examId);

  const foundExam = await exam.findOne({ where: examId });
  if (!foundExam) throw new NotFoundError();

  const professorId = req.user.id;
  const courseId = foundExam.courseId;

  const foundLecturer = await lecturer.findOne({ where: { professorId, courseId } });

  if (!foundLecturer) {
    throw new AuthorizationError();
  }
  next();
};
