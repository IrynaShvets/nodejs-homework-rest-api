const { Conflict } = require("http-errors");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const uuid = require("uuid").v4;
const { sendEmail } = require("../../helpers");
const { User } = require("../../models");

const register = async (req, res) => {
  const { password, email, subscription } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }
  const verificationToken = uuid();
  const avatarURL = gravatar.url(email);
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({
    password: hashPassword,
    email,
    subscription,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: "Email confirmation",
    html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">Confirm Email</a>`,
  };
  await sendEmail(mail);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
        subscription,
        avatarURL,
        verificationToken,
      },
    },
  });
};

module.exports = register;
