const express = require("express");
const router = express.Router();
const { getContact, createContact, deleteContact, updateContact, getidContact } = require("../controllers/contactController");


//The Router() function is used to create a new router object in an Express application.
//By calling express.Router(), we are creating a new router object that can be used to define routes
//for the application. We can then use the methods of the router object, 
//such as .get(), .post(), and .use(), to define the behavior of the routes and their handlers.

router.route("/").get(getContact).post(createContact);

router.route("/:id").get(getidContact).delete(deleteContact).put(updateContact);

module.exports = router;