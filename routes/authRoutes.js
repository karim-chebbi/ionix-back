// require express
const express = require("express");
const { test, register, login } = require("../controllers/authControllers");
const { registerValidation, validator } = require("../middlewares/validator");
const isAuth = require("../middlewares/isAuth");


// create Router instance
const Router = express.Router()

// require test auth controller
Router.get("/test", test)

// require register controller
Router.post("/register", registerValidation(), validator, register);

// require login controller
Router.post("/login", login);

// current user controller
Router.get("/current", isAuth, (req, res) => {
    res.send({ user: req.user, msg: "Current user fetched successfully" })
})


// export Router
module.exports = Router