const { Contact } = require("../../models");

const addContact = async (req, res) => {
  const { _id } = req.user;
  const result = await Contact.create({ ...req.body, owner: _id });
  const { favorite } = req.body;
  if (!req.body) {
    return res.status(400).json({ message: "missing required name field" });
  }
  if (!favorite) {
    req.body.favorite = false;
  }
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addContact;
