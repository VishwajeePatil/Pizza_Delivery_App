import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye  , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"
import axios from "axios"

import styles from "./ForgetPass.module.css"
import LoadingScreenContext from '../../../Contetx API\'s/LoadingScreen';


const ForgetPasswords = () => {
  const [emailDesable,setEmailDisable] = useState(false);
  const [otp,setOtp] = useState();
  const [otpVerify,setOtpVerify] = useState(false);
  const [message,setMessage] = useState({msg:"",clr:true})
  const {setLoadingScreen} = useContext(LoadingScreenContext);
  const [typePass,settypePass] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    otp:"",
    password: "",
  })

  const changepasstype = ()=>{
    settypePass(!typePass)
  }

  const handelchange = (e) => {
    const { name, value} = e.target;
    setMessage({msg:""});
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendOtp = async (event)=>{
    event.preventDefault();
    setLoadingScreen(true);
    try {
      const res = await axios.post("http://localhost:8000/otp",{email:formData.email});
      setLoadingScreen(false);
      if(res.status == 200){
        setOtp(res.data.otp);
        setMessage({msg:res.data.msg,clr:true})
      }
      else{
        setMessage({msg:res.data.msg,clr:false})
      }
    } catch (error) {
      setLoadingScreen(false);
      setMessage({msg:error.message,clr:false})
    }
}
const checkOtp = (event)=>{
    event.preventDefault();
    if(otp===formData.otp){
      setOtpVerify(true);
      setMessage({msg:"OTP Verify SuccessFully",clr:true})
      setEmailDisable(true);
    }
    else{
      setMessage({msg:"OTP Doesn't Match",clr:false})
    }
  }

  const handelsubmit = async (event)=>{
    event.preventDefault();
    if(formData.email === "" || formData.password === "" ){
      setMessage({msg:"Fill All The Fields ",clr:false});
    }
    else if(!otpVerify){
      setMessage({msg:"OTP Verification Pending",clr:false});
    }
    else{
      try {
        setLoadingScreen(true);
        const res = await axios.put("http://localhost:8000/auth/forgetpass",{formData})
        setLoadingScreen(false);
        setMessage({msg:res.data.msg,clr:true});
      } catch (error) {
        setLoadingScreen(false);
        setMessage({msg:error.response.data.msg,clr:false});
      }
    }
  }

  return (
    <div className={styles.formcontainer}>
    <form>
      <div className={styles.email}>
        <label>Email</label>
        <div>
        <input type="email" placeholder='Enter Email Address' name="email" onChange={handelchange} value={formData.email} disabled={emailDesable}/>
        <button onClick={sendOtp}>Send OTP</button>
        </div>
      </div>

      <div className={styles.email}>
        <label>Enter OTP</label>
        <div>
        <input type="text" placeholder='_ _ _   _ _ _' name="otp" onChange={handelchange} value={formData.otp}/>
        <button onClick={checkOtp}>Verify OTP</button>
        </div>
      </div>

      <div className={styles.password}>
        <label> New Password </label>
        <input type={typePass ? "password" : "text"} placeholder='* * * * * * * * ' name="password" onChange={handelchange} value={formData.password}/>
        <FontAwesomeIcon icon={typePass ? faEyeSlash : faEye } className={styles.eyeIcon} onClick={changepasstype}/>
      </div>

      <div>
        <p style={{color: message.clr ? "green" : "red"}}>{message.msg}</p>
      </div>
      <div>
        <input type="submit" onClick={handelsubmit} />
      </div>
      <div className={styles.link}>
        <Link to={"/auth/signup"}> Back To Login</Link>
      </div>
    </form>
    </div>
  )
}

export default ForgetPasswords
