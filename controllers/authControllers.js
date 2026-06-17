const User = require("../models/user");

// require bcrypt for password hashing
const bcrypt = require("bcrypt");

// require jwt
const jwt = require("jsonwebtoken");

// test auth controller
exports.test = async (req, res) => {
  try {
    return res.status(200).send({ message: "Auth controller is working!" });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error testing Auth controller", error });
  }
};

// register auth controller
exports.register = async (req, res) => {
    try {
      const { email } = req.body;

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res
          .status(400)
          .send({ message: "User already exists with this email" });
      }

      const newUser = new User(req.body);

      // hash password
      const salt = 10;

      const hashedPassword = await bcrypt.hash(newUser.password, salt);

      newUser.password = hashedPassword;

      await newUser.save();

      // Generate JWT token
      const token = jwt.sign(
        {
          id: newUser._id,
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
        },
        process.env.SECRET_KEY,
        { expiresIn: "7d" }
      );

      return res
        .status(201)
        .send({ message: "User registered successfully!", token: token, user: newUser });
    } catch (error) {
        return res.status(500).send({ errors : [{msg: "Error server register"}], error })
        
    }
}

// login auth controller
exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const existingUser = await User.findOne({email});
        if (!existingUser) {
            return res.status(400).send({errors: [{msg: "User not found with this email"}]})
        }
        const hashedPassword = await bcrypt.compare(password, existingUser.password)

        if (!hashedPassword) {
            return res.status(400).send({errors: [{msg: "Incorrect password"}]})
        }
        return res.status(200).send({success: [{msg: "User logged in successfully!"}], user: existingUser})
    } catch (error) {
        return res
          .status(500)
          .send({ errors: [{ msg: "Error server login" }], error });
        
    }
}