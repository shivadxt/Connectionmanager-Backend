//@des : Get all contacts
//@route : GET/api/contacts
//@access : public

const getContact = (req,res) => {
    res.status(200).json({message:"get all contacts"});
};

//@des : Get all contacts
//@route : GET/api/contacts
//@access : public
const getidContact = (req,res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
};

//@des : Create a  contact
//@route : POST/api/contacts
//@access : public
//Built-in Middleware for POST Request Body
const createContact = (req,res) => {
    console.log("The request body is", req.body); 
    res.status(201).json({message:"create a new contact"});
};

//@des : Delete contact with id
//@route : DELETE/api/contacts/id
//@access : public
const deleteContact = (req,res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`})
}

//@des : Update contact
//@route : PUT/api/contacts/id
//@access : public
const updateContact = (req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
}

module.exports = {getContact, createContact, deleteContact, updateContact, getidContact};