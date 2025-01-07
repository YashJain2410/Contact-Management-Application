//@description Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = (req, res) => {
    res.status(200).send("Get all contacts");
};

//@description Create new contacts
//@route POST /api/contacts
//@access public

const createContact = (req, res) => {
    console.log("The request body is: ", req.body)
    res.status(201).send({ message: "Create contact"});
};

//@description Get contacts
//@route GET /api/contacts/:id
//@access public

const getContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`});
};

//@description Update contacts
//@route PUT /api/contacts/:id
//@access public

const updateContact = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`});
};

//@description Delete contacts
//@route DELETE /api/contacts/:id
//@access public

const deleteContact = (req, res) => {
    res.status(200).send({ message: `Delete contact for ${req.params.id}`});
};

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };