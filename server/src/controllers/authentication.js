const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ValidationError } = require('../validators/customErrors');
const { student, professor } = require('../database/models');

async function loginStudent (req, res) {
  const { email, password } = req.body;
  const user = await student.findOne({ where: { email } });
  if (!user) { throw new ValidationError('User does not exist'); }
  const dbPassword = user.password;
  await bcrypt.compare(password, dbPassword).then((match) => {
    if (match) {
      const token = jwt.sign(
        { email, role: user.role, id: user.id },
        process.env.SECRETTOKEN
      );
      res.cookie('accessToken', token,
        { maxAge: 2592000000 });
      res.status(200).json('Logged in');
    } else {
      throw new ValidationError('Wrong credential');
    }
  });
};
async function loginProfessor (req, res) {
  const { email, password } = req.body;
  const user = await professor.findOne({ where: { email } });
  if (!user) { throw new ValidationError('User does not exist'); }
  const dbPassword = user.password;
  const match = await bcrypt.compare(password, dbPassword);
  console.log(match);
  if (match) {
    const token = jwt.sign(
      { email, role: user.role, id: user.id },
      process.env.SECRETTOKEN
    );
    res.cookie('accessToken', token,
      { maxAge: 2592000000 });
    res.status(200).json('Logged in');
  } else {
    throw new ValidationError('Wrong credential');
  }
};

module.exports.login = async (req, res) => {
  const { email } = req.body;
  const user = await professor.findOne({ where: { email } });
  if (!user) { return loginStudent(req, res); } else { return loginProfessor(req, res); }
};
