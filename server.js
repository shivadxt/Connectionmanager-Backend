const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const dbConnect = require("./config/dbConnection");
const dotenv = require("dotenv").config();
//const dotenv = require("dotenv").config(); is importing the dotenv module and calling its config() function.

const app = express();

const port = process.env.PORT || 5000;
//The || operator is the logical OR operator in JavaScript. 
//If the process.env.PORT variable is not defined, 
//then the port constant will be assigned the default value of 5000. 
//This ensures that the application will listen to port 5000 if no PORT environment variable is specified.

// app.get('/api/contact/js', (req, res) => {
//     res.status(200).json({message:"Hello Guys"});
//     });

dbConnect();

app.use(express.json()); //Built-in Middleware for POST Request Body
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`sever running on ${port}`)
});
//The callback function passed as the second argument to listen() is executed 
//when the server starts listening for incoming requests. 
//In this case, it logs a message to the console using string interpolation to display 
//the value of the port variable in the message. This message is helpful for developers to know that 
//the server is running and on which port it is listening.