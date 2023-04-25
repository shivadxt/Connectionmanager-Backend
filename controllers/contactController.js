const async = require ("express-async-handler");

//@des : Get all contacts
//@route : GET/api/contacts
//@access : public

const getContact = asyncHandler (async (req,res) => {
    res.status(200).json({message:"get all contacts"});
});

//@des : Get all contacts
//@route : GET/api/contacts
//@access : public
const getidContact = asyncHandler (async (req,res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
});

//@des : Create a  contact
//@route : POST/api/contacts
//@access : public
//Built-in Middleware for POST Request Body
const createContact = asyncHandler (async (req,res) => {
    console.log("The request body is", req.body); 
    const {name,email,number} = req.body;
    if (!name || !email || !number) {
        res.status(400);
        throw new Error ("All fields are mandatory !");
    };

    res.status(201).json({message:"create a new contact"});
});

//@des : Delete contact with id
//@route : DELETE/api/contacts/id
//@access : public
const deleteContact = asyncHandler (async (req,res) => {
    res.status(200).json({message:`Delete contact for ${req.params.id}`})
});

//@des : Update contact
//@route : PUT/api/contacts/id
//@access : public
const updateContact = asyncHandler (async (req,res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
});

module.exports = {getContact, createContact, deleteContact, updateContact, getidContact};