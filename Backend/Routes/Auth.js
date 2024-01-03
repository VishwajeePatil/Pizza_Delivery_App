const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 3;

const { UserModel } = require("../Model/UserModel");
const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  const { name, email, mobileNo, dob, password, getOffer } = req.body;
  const user = await UserModel.findOne({ email });
  console.log(user);
  if (!user) {
    const hash = await bcrypt.hash(password, saltRounds);
    try {
          const new_user = new UserModel({
            name: name,
            email: email,
            mobileNo: mobileNo,
            dob: dob,
            password: hash,
            getOffer: getOffer,
          });
          await new_user.save();
          res.status(201).json({ message: "Signup Successful" });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(409).send("User Already Exists");
  }
});

module.exports = authRouter;
