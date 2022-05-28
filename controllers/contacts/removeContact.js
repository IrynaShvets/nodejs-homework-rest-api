const operations = require("../../models/contacts");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await operations.removeContact(id);
  if (!result) {
    const error = new Error(`Contact with id=${id} not found.`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    message: "Contact deleted",
    data: {
      result,
    },
  });
};

module.exports = removeContact;
