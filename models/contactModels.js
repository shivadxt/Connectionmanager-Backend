const mongoose = require ("mongoose");

const contactSchema = mongoose.Schema ({

    name : {
        type : String,
        required : [true, " Please enter name"]

    },
    email : {
        type : String,
        required : [true, " Please enter email"]

    },
    number : {
        type : String,
        required : [true, " Please enter number"]

    },

},
{
    timestamps: true,
}
);

module.exports = mongoose.model("Contact",contactSchema);
//The mongoose.model() function takes two arguments: a string representing 
//the name of the model ("Contact" in this case), and a schema object that
//defines the structure of the documents that will be stored in the corresponding MongoDB collection.