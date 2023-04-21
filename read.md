HTTP response status codes are used in web development to determine whether a particular HTTP request has been completed successfully.
Status codes and how to apply them in applications:
-The HTTP 200 OK response code implies a successful request.
-201 Created
-204 No Content
-400 Bad Request
-401 Unauthorized
-403 Forbidden
-404 Not Found
-500 Internal Server Error
-503 Service Not Available
-504 Gateway Timeout


Flow of project :
-Create an Express Server
  @server.js 
-Express Router & Contacts CRUD Route Setup
  @contactRoute.js  
-Create Contact Controller for Contacts CRUD Operations
  @contactController.js
-Multiple HTTP Methods per Route
  @contactroute.js -> line 11 and 13 combined different methods per route
-Built-in Middleware for POST Request Body
  @
-Express - Throw Error
-Error Handling Middleware
-Express Async Handler
-MongoDb Setup
-Connect Express App to MondoDB Database
-Mongoose Schema for Contacts
-CRUD Get All Contacts
-CRUD Create New Contact
-CRUD Get Contact
-CRUD Update Contact
-CRUD Delete Contact
-Adding User Routes - Registration, Login & Current
-Adding User Controller
-Mongoose Schema for User
-User Registration & Password Hashing
-JWT Access Token & User Login 
-Protecting Routes - User
-Verify JWT Token Middleware
-Handle Relationship User & Contact Schema
-Protecting Routes - Contact
-Logged in User Get All Contacts 
-Logged in User Create New Contact 
-Logged in User Update & Delete Contact 