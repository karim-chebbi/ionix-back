// require mongoose
const mongoose = require("mongoose")

// get schema instance
const Schema = mongoose.Schema

// create car schema
const carSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  year: Number,
  description: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: true,
  },
  autonomy: {
    type: Number,
    required: true,
  },
  chargingTime: {
    type: Number,
    required: true,
  },
}, { timestamps: true, collection: "cars" });



// export model
module.exports = Car = mongoose.model("Car", carSchema)