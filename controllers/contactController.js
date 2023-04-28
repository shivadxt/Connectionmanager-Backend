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

const getidContact = asyncHandler(async (req, res) => {
    console.log(req.params.id);
    Contact.findById(req.params.id, function(err, contact){
        if (err){
            console.log("inside");
            res.status (404);
            throw new Error("Contact not found");
        }
        else{
            console.log("im here",contact);
            res.status (200).json (contact);
        }
      });
    // const contact = await Contact.findById(req.params.id);
    console.log("im here");
});

// const getidContact = asyncHandler(async (req, res) => {
//     console.log(req.params.id);
//     Contact.findById(req.params.id, function(err, contact){
//         if (err){
//             console.log("inside");
//             res.status (404);
//             throw new Error("Contact not found");
//         }
//         else{

//             console.log("im here",contact);
//             res.status (200).json (contact);
//         }
//       });
//     // const contact = await Contact.findById(req.params.id);
//     console.log("im here",contact1);
//     if (!contact._id) {
//     console.log("inside");
//     res.status (404);
//     throw new Error("Contact not found");
//     }
//     console.log("bdccnb",contact);
//     // res.status (200).json (contact);
    // });
  

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