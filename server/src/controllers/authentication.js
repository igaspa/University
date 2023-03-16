const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { ValidationError } = require('../validators/customErrors');
const { student, professor } = require('../database/models');
require('dotenv').config();

const signToken = (id, role) => {
  const token = jwt.sign(
    { id, role },
    process.env.SECRETTOKEN
  );
  return token;
};

const createToken = (user, req, res) => {
  const token = signToken(user.id, user.role);
  res.status(200).json({ token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) { throw new ValidationError('Credentials are missing'); };
  let user = await student.findOne({ where: { email } });
  if (!user) {
    user = await professor.findOne({ where: { email } });
    if (!user) {
      throw new ValidationError('User does not exist');
    }
  }
  const dbPassword = user.password;
  await bcrypt.compare(password, dbPassword).then((match) => {
    if (match) {
      createToken(user, req, res);
    } else {
      throw new ValidationError('Wrong credential');
    }
  });
};
