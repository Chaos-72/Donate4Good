const express = require("express");
const { home, register } = require("../controllers/auth-controllers");

const router = express.Router();

// route for Home page
router.route("/").get(home);

// route for regstration
router.route("/register").post(register); // restration data is sendign using post method


// route for login
router.route("/login").post(login);
module.exports = router;
