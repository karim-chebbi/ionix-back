// require express
const express = require("express")
const { test, addCar, getAllCars, getCarById, deleteCarById, updateCarById } = require("../controllers/carControllers")

// create Router instance
const Router = express.Router()

// require test car controller
Router.get("/test", test)

// require add new car controller
Router.post("/", addCar)

// require get all cars controller
Router.get("/", getAllCars)

// require get car by id controller
Router.get("/:id", getCarById)

// delete car by id controller
Router.delete("/:id", deleteCarById)

// update car by id controller
Router.patch("/:id", updateCarById)



// export Router
module.exports = Router