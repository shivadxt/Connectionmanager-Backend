const {constants} = require ("../constants")
const errorHandler = (err, req, res, next) => {
// The errorHandler function takes four parameters:
// err: the error object that has been thrown by a previous middleware function or route handler.
// req: the request object representing the HTTP request being handled.
// res: the response object representing the HTTP response being sent.
// next: the function that invokes the next middleware function in the stack.
    const statusCode = res.statusCode ? res.statusCode : 500;

switch (statusCode) {
    case constants.VALIDATION_ERROR:
        res.json({title : "Validation Failed", message: err.message, stackTrace: err.stack });
        break;

    case constants.NOT_FOUND:
        res.json({title : "Not Found", message: err.message, stackTrace: err.stack });
    
    case constants.FORBIDDEN:
        res.json({title : "forbidden", message: err.message, stackTrace: err.stack });

    case constants.UNAUTHORIZED:
        res.json({title : "unauthorized", message: err.message, stackTrace: err.stack });

    case constants.SERVER_ERROR:
        res.json({title : "server error", message: err.message, stackTrace: err.stack });

    default:
        console.log("No Error, All Good!");
        break;
}   
};

module.exports = errorHandler;