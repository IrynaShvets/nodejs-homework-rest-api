const operations = require("../../models/contacts");

const addContact = async (req, res) => {
  if (!req.body) {
    res.error.message = "Missing required field";
  }
  const result = await operations.addContact(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addContact;
