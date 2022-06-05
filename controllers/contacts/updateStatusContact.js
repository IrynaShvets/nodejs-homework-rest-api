const { Contact } = require("../../models");

const updateStatusContact = async (req, res) => {
  const { contactId: id } = req.params;
  const { favorite } = req.body;
  if (!req.body) {
    res.status(400).json({ message: "Missing field favorite" });
  }
  const result = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    {
      new: true,
    }
  );
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

module.exports = updateStatusContact;
