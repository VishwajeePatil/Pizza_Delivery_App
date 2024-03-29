const express = require("express");
const cors = require("cors")
const {connection} = require("./db")
const {UserModel} = require("./Model/UserModel")
const authRouter = require("./Routes/Auth");
const otpRouter = require("./Routes/sendOTP");
const adminRouter = require("./Routes/Admin");
const authentication = require("./Middelwares/authentication");
const authorization = require("./Middelwares/Authorization");
const app = express();

app.use(cors({origin:"*"}))
app.use(express.json());
app.use(express.text());

app.use("/auth",authRouter);
app.use("/otp",otpRouter);
app.use("/dashboard",authorization,adminRouter);

app.get("/",(req,res)=>{
    res.send("This Is Home Route");
})

app.listen(8000,async()=>{
    try {
        console.log("Server Is Live At 8000")
        await connection
        console.log("DataBase Connected Successfully")
    } catch (error) {
        console.log("Error While Connecting Database")
    }
})
