import React, { useContext, useState } from 'react'
import styles from "./SignupForm.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye  , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import LoadingScreenContext from '../../Contetx API\'s/LoadingScreen/LoadingScreen';

const SignupForm = () => {
  const {loadingScreen , setLoadingScreen} = useContext(LoadingScreenContext);
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
    getOffer: false
  })
  const handelchange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handelsubmit = (event)=>{
    setLoadingScreen(true);
    event.preventDefault();
    console.log(formData)
    setTimeout(() => {
      setLoadingScreen(false);
    }, 1000);
  }
  return(
    <>
    <div className={styles.formcontainer}>
      <form onSubmit={handelsubmit}>
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
        <input type="email" placeholder='Enter Email Address' name="email" onChange={handelchange} value={formData.email}/>
        <button>Send OTP</button>
        </div>
      </div>

      <div className={styles.email}>
        <label>Enter OTP</label>
        <div>
        <input type="text" placeholder='_ _ _   _ _ _' name="otp" onChange={handelchange} value={formData.otp}/>
        <button>Verify OTP</button>
        </div>
      </div>

      <div className={styles.password}>
        <label> Password </label>
        <input type={typePass ? "password" : "text"} placeholder='* * * * * * * * ' name="password" onChange={handelchange} value={formData.password}/>
        <FontAwesomeIcon icon={typePass ? faEyeSlash : faEye } className={styles.eyeIcon} onClick={changepasstype}/>
      </div>

      <div className={styles.getoffer}>
        <label>Get Updates Of Exiting Offer</label>
        <input type="checkbox" onChange={handelchange} value={formData.getOffer} name='getOffer'/>
        <div className={styles.circleMark}></div>
      </div>

      <div>
        <input type="submit" />
      </div>
      </form>
    </div>
    </>
  )
}

export default SignupForm
