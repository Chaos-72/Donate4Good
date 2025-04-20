require("dotenv").config();
// import express 
const express = require("express");
const router = require("./router/auth-router");
const connectToDB = require("./utils/database");
const app = express();

// middle ware used to parsed the json payload
app.use(express.json());

// this is home page of auth using router
app.use("/api/auth", router)

// register page with using router
app.use("/api/auth/register", router)


const port = 5000;

// connect to database

connectToDB().then(()=> {
    app.listen(port, ()=>{
        console.log("server is running at port: ", port);
    });
});

