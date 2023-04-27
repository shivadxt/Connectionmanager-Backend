const asyncHandler = require ("express-async-handler");
const Contact = require ("../models/contactModels");
// const constants = require ("../constants")
//@des : Get all contacts
//@route : GET/api/contacts
//@access : public

const getContact = asyncHandler (async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
}); 

//@des : Get all contacts
//@route : GET/api/contacts
//@access : public
// const getidContact = asyncHandler (async (req,res,next) => {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) {
//         const error = new Error('Contact not found');
//         error.status = 404;
//         return next(error);
//     }
//     res.status(200).json(contact);
//   });

const createContact = asyncHandler (async (req,res) => {
    console.log("The request body is", req.body); 
    const {name,email,number} = req.body;
    if (!name || !email || !number) {
        res.status(400);
        throw new Error ("All fields are mandatory !");
    };

    const contact = await Contact.create ({
        name,
        email,
        number
    });

    res.status(201).json({message:"created a new contact"});
});

const getidContact = asyncHandler(async (req, res, next) => {
    // console.log("Getting contact with ID:", req.params.id);
    const contact = await Contact.findById(req.params.id);
    console.log("Getting Kontact with ID:", req.params.id);
    if (!contact) {
        console.log("Getting contact with ID:", req.params.id);
      const error = new Error("Contact not found");
      error.status = 404; // Set the status code of the error
      return next(error);
    }
    res.status(200).json(contact);
  });
  

//@des : Create a  contact
//@route : POST/api/contacts
//@access : public
//Built-in Middleware for POST Request Body


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