// require express
const express = require("express")

// require cors
const cors = require("cors")

// create an instance of express
const app = express()

// body parser middleware
app.use(express.json())

app.use(cors())

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

// require auth routes
app.use("/api/auth", require("./routes/authRoutes"))