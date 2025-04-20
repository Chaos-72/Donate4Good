const mongoose = require("mongoose");

// user schema defines the structure of the table
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true,      
    },
    phone: {
        type: String,
        require: true,      
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
    
})

// model of the user schema
const UserModel = new mongoose.model("userschema", UserSchema)

// exporting the model
module.exports = UserModel;

