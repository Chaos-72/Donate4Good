const express = require('express');
const UserModel = require('../Models/UserModel');


// *************
// Home Logic
// **************

const home = async (req, res) => {
    try {

        res.status(200).send("Home logic using controllers");
    } catch (error) {
        res.status(400).send({msg: "Page not found, home controllers"});
    }
}

// *************
// Register Logic
// **************

const register = async (req, res) => {
    try {
        // console.log(req.body);
        // 1. getting data from the request body
        const {name, phone, email, password} = req.body;
   
        // 2. checking is user already exist
        const userExist = await UserModel.findOne({email});

        // if user exist then show msg
        if(userExist) {
            return res.status(400).send({msg: "Email already exist"});
        }

        // if user does not exist then create user
        await UserModel.create({name, phone, email, password});

        res.status(200).send({msg: req.body});
    } catch (error) {
        res.status(400).send({msg: "page not found, register controller"});
    }

}


// *************
// Register Logic
// **************

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        

    } catch (error) {
        
    }
}

module.exports = {home, register}