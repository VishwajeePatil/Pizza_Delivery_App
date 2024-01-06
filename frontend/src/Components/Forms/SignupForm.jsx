import React, { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye  , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import axios from "axios"
// Local Imports
import styles from "./SignupForm.module.css"
import LoadingScreenContext from '../../Contetx API\'s/LoadingScreen/LoadingScreen';

const SignupForm = () => {
  const [emailDesable,setEmailDisable] = useState(false);
  const [otp,setOtp] = useState();
  const [otpVerify,setOtpVerify] = useState(false);
  const [message,setMessage] = useState({msg:"",clr:true})
  const {setLoadingScreen} = useContext(LoadingScreenContext);
  const [typePass,settypePass] = useState(true)
  const changepasstype = ()=>{
    settypePass(!typePass)
  }
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    otp:"",
    password: "",
    getOffer: true
  })
  const handelchange = (e) => {
    const { name, value, type, checked } = e.target;
    setMessage({msg:""});
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
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
    if(formData.name == "" || formData.email == "" || formData.mobileNo=="" || formData.password=="" ){
      setMessage({msg:"Fill All The Fields ",clr:false});
    }
    else if(!otpVerify){
      setMessage({msg:"OTP Verification Pending",clr:false});
    }
    else{
      console.log(formData)
      try {
        setLoadingScreen(true);
        const res = await axios.post("http://localhost:8000/auth/signup",{formData})
        setLoadingScreen(false);
        console.log("signup",res)
        setMessage({msg:res.data.msg,clr:true});
      } catch (error) {
        setLoadingScreen(false);
        setMessage({msg:error.response.data.msg,clr:false});
      }
    }
  }
  // const submit = async (event) =>{
  //   event.preventDefault();
  //   try {
  //     setLoadingScreen(true);
  //     const res = await axios.post("http://localhost:8000/auth/signup",{
  //       name: "Vishwajeet Patil",
  //       mobileNo: "7620705446",
  //       email: "okok",
  //       otp:"true",
  //       password: "Vishu@45",
  //       getOffer: true
  //     })
  //     setLoadingScreen(false);
  //     console.log(res.response);
  //   } catch (error) {
  //     setLoadingScreen(false);
  //     setMessage({msg:error.response.data,clr:false});
  //   }
  // }
  return(
    <>
    <div className={styles.formcontainer}>
      <form >
        {/* <button onClick={submit}>demo</button> */}
      <div className={styles.name}>
        <label>Full Name</label>
        <input type="text" placeholder='Enter Full Name' onChange={handelchange} name="name" value={formData.name}/>
      </div>

      <div className={styles.name}>
        <label>Mobile Number</label>
        <input type="text" placeholder='1234567890' onChange={handelchange} name="mobileNo" value={formData.mobileNo}/>
      </div>

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
        <label> Password </label>
        <input type={typePass ? "password" : "text"} placeholder='* * * * * * * * ' name="password" onChange={handelchange} value={formData.password}/>
        <FontAwesomeIcon icon={typePass ? faEyeSlash : faEye } className={styles.eyeIcon} onClick={changepasstype}/>
      </div>

      <div className={styles.getoffer}>
        <label>Get Updates Of Exiting Offer</label>
        <input type="checkbox" checked={formData.getOffer} onChange={handelchange} value={formData.getOffer} name='getOffer'/>
        <div className={styles.circleMark}></div>
      </div>
      <div>
        <p style={{color: message.clr ? "green" : "red"}}>{message.msg}</p>
      </div>
      <div>
        <input type="submit" onClick={handelsubmit} />
      </div>
      </form>
    </div>
    </>
  )
}

export default SignupForm
