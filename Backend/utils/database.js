// import mongoose
const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;

// function to connect with database

const connectToDB = async () => {
    try {
        await mongoose.connect(URL);
        console.log("connected to database successfully")
    } catch (error) {
        console.log("database not connected",error);
        process.exit();
    }
}

module.exports = connectToDB;



