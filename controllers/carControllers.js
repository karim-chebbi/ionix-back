const Car = require("../models/car");

// test car controller
exports.test = async (req, res) => {
  try {
    return res.status(200).send({ message: "Car controller is working!" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error testing car controller", error });
  }
};

// add new car controller
exports.addCar = async (req, res) => {
  try {
    const newCar = new Car(req.body);
    await newCar.save();
    return res
      .status(201)
      .send({ message: "New car added successfully!", car: newCar });
  } catch (error) {
    return res.status(500).send({ message: "Error adding new car", error });
  }
};

// get all cars controller
exports.getAllCars = async (req, res) => {
  try {
    const foundCars = await Car.find();
    return res
      .status(200)
      .send({
        success: [{ msg: "All cars retrieved successfully!" }],
        count: foundCars.length,
        cars: foundCars,
      });
  } catch (error) {
    return res
      .status(500)
      .send({ errors: [{ msg: "Error getting all cars" }], error: error });
  }
};


// get car by id controller
exports.getCarById = async (req, res) => {
  try {
    const {id} = req.params
    const foundCar = await Car.findById(id);
    if (!foundCar) {
      return res
        .status(404)
        .send({ errors: [{ msg: "Car not found with this id" }] });
    }
    return res.status(200).send({
      success: [{ msg: "Car retrieved successfully!" }],
      car: foundCar,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ errors: [{ msg: "Error getting car by id" }], error: error });
  }
};


// delete car by id controller
exports.deleteCarById = async (req, res) => {
    try {
        const {id} = req.params
        const deletedCar = await Car.findByIdAndDelete(id)
        if (!deletedCar) {
            return res
              .status(404)
              .send({ errors: [{ msg: "Car not found with this id" }] });
          }
          return res.status(200).send({
            success: [{ msg: "Car deleted successfully!" }],
            car: deletedCar,
          });
    } catch (error) {
            return res
              .status(500)
              .send({
                errors: [{ msg: "Error delete car by id" }],
                error: error,
              });
    }
}

// update car by id controller
exports.updateCarById = async (req, res) => {
    try {
        const {id} = req.params
        const newData = req.body
        const updatedCar = await Car.findByIdAndUpdate(id, newData, {returnDocument: "after"})
        if (!updatedCar) {
            return res
              .status(404)
              .send({ errors: [{ msg: "Car not found with this id" }] });
          }
          return res.status(200).send({
            success: [{ msg: "Car updated successfully!" }],
            car: updatedCar,
          });
    } catch (error) {
            return res
              .status(500)
              .send({
                errors: [{ msg: "Error update car by id" }],
                error: error,
              });
        
    }
}