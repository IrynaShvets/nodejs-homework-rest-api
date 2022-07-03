const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "iruna456@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const email = {
  to: "rojarek651@lenfly.com",
  from: "iruna456@meta.ua",
  subject: "Нова заява з сайту",
  html: "<p>З сайта прийшла нова заява</p>",
};

transporter
  .sendMail(email)
  .then(() => console.log("Email send success"))
  .catch((error) => console.log(error.message));
