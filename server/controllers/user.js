import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

const secret = 'test'; // Ensure the secret is defined

export const signin = async (req, res) => {
  const { email, password } = req.body;
  console.log("Signin Data:", req.body); 
  try {
    //console.log("Reached try block signin");

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      console.log("User doesn't exist");
      return res.status(404).json({ message: "User doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      console.log("Invalid credentials");
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" });
    console.log("Signin successful");
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    console.error("Error during signin:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  console.log("Signup Data:", req.body); 
  try {
    console.log("Reached try block signup");

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return res.status(400).json({ message: "Passwords do not match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
    const token = jwt.sign({ email: result.email, id: result._id },'test', { expiresIn: "1h" });

    console.log("Signup successful",);
    res.status(200).json({ result, token });
    // console.log(result);
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};
