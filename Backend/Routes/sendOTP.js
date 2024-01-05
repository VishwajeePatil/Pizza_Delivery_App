const express = require("express");
const otpGenerator = require("otp-generator")
const nodemailer = require("nodemailer")

const otpRouter = express.Router();

otpRouter.post("/",(req,res)=>{

    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.adminEmail,
            pass:process.env.adminEmailPass
        }
    });
    const otp = otpGenerator.generate(6,{
        digits:true,
        lowerCaseAlphabets:false,
        upperCaseAlphabets:false,
        specialChars:false,
    })
    const mailOptions = {
        from :"sliceharber@gmail.com",
        to:"Vishupatil5446@gmail.com",
        subject:"🍕 Welcome to SliceHarber! Your Pizza Adventure Begins 🚀",
        text:`Hi [User],

        Congratulations on choosing SliceHarber – where pizza dreams come true! 🎉 To complete your signup and unlock a world of cheesy delights, here's your One-Time Password (OTP):
        
        ${otp}
        
        Enter this code during signup to savor exclusive offers and speedy pizza deliveries.
        
        Ready for a slice of heaven? Let the pizza party begin!
        
        Cheers,
        The SliceHarber Team 🍕🚀`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
          res.status(500).send({ error: "Error While Sending Mail" });
        } else {
          res.status(200).send({ msg: "Mail Sent Successfully", otp: otp });
        }
      });      
})
module.exports = otpRouter;