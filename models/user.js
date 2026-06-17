// require mongoose
const mongoose = require("mongoose");

// get schema instance
const Schema = mongoose.Schema;


// create user schema
const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },  
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    phone: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
}, { timestamps: true, collection: "users" });


// export model
module.exports = User = mongoose.model("User", userSchema)