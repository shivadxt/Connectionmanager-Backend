const mongoose = require ("mongoose");

const contactSchema = mongo.schema ({

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