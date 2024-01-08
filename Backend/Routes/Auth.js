const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const { UserModel } = require("../Model/UserModel");

const authRouter = express.Router();

authRouter.post("/signup", async (req, res) => {
  const { name, email, mobileNo, password, getOffer } = req.body.formData;
  const user = await UserModel.findOne({ email });
  if(!user) {
    const hash = await bcrypt.hash(password, 3);
    try {
          const new_user = new UserModel({
            name: name,
            email: email,
            mobileNo: mobileNo,
            password: hash,
            getOffer: getOffer,
          });
          await new_user.save();
          res.status(201).json({ msg: "Signup Successful" });
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(409).send({msg:"User Already Exists..."});
  }
});

authRouter.put("/forgetpass", async (req, res) => {
  const { email, password} = req.body.formData;
  const hash = await bcrypt.hash(password, 3);
  const user = await UserModel.findOneAndUpdate({ email },{$set:{password:hash}});
  if(user) {
    res.status(200).send({msg:"Password Chnaged Successfully"})
  } else {
    res.status(404).send({msg:"User Not Found..."});
  }
});

authRouter.post("/login",async(req,res)=>{
  const {email,password} = req.body;
  const user = await UserModel.findOne({email});
  if(!user){
    res.status(404).send({msg:"User Not Found ! Signup First "});
  }
  else{
    const hash = user.password;
    bcrypt.compare(password,hash,(err,result)=>{
      if(result){
          const token = jwt.sign({user},process.env.secretKey);
          res.status(200).send({ msg: "Login Successful",token:token,role:user.role});
      }
      else{
        res.status(401).send({msg:"Invalid Credentials"});
      }
    })

  }
})
module.exports = authRouter;
