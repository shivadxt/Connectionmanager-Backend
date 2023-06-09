const {constants} = require ("../constants.js")
const errorHandler = (err, req, res, next) => {
// The errorHandler function takes four parameters:
// err: the error object that has been thrown by a previous middleware function or route handler.
// req: the request object representing the HTTP request being handled.
// res: the response object representing the HTTP response being sent.
// next: the function that invokes the next middleware function in the stack.
    const statusCode = res.statusCode ? res.statusCode : 500;
//     res.json({message: 'Invalid contact ID',
//     details: 'The provided contact ID is not a valid ObjectId'
// }); // Coverting ERROR to JSON format
switch (statusCode) {
      
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
    break;    
    case constants.NOT_FOUND:
        console.log("status code");
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });
      console.log("hello");
    break;

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    break;
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("No Error, All good !");
      break;
  }
};

module.exports = errorHandler;
