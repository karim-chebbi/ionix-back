// require express
const express = require("express")

// create an instance of express
const app = express()

// body parser middleware
app.use(express.json())

// require dotenv
require("dotenv").config()

// require PORT
const PORT = process.env.PORT

// run server
app.listen(PORT, (error) => {
    error
      ? console.log(error)
      : console.log(`⚡ ⚡ ⚡ Server is running on http://localhost:${PORT}`);
})

// route API endpoint
app.get("/", (req, res) => {
    res.send("API is running...")
})

// connect to MongoDB
const connectDB = require("./config/connectDB")
connectDB()

// require car routes
app.use("/api/cars", require("./routes/carRoutes"))