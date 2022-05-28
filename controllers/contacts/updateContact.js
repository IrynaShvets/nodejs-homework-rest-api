const operations = require("../../models/contacts");

const updateContact = async (req, res) => {
  const { id } = req.params;
  if (!req.body) {
    res.error.message = "Missing required field";
  }
  const result = await operations.updateContact(id, req.body);
  if (!result) {
    const error = new Error(`Contact with id=${id} not found.`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateContact;
