import React, { useState } from 'react'
import styles from "./SignupForm.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye  , faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const SignupForm = () => {
  const [typePass,settypePass] = useState(true)
  const changepasstype = ()=>{
    settypePass(!typePass)
  }
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    dob: "",
    password: "",
    getOffer: false
  })
  return(
    <div className={styles.formcontainer}>
      <div className={styles.name}>
        <label>Full Name</label>
        <input type="text" placeholder='Enter Full Name' />
      </div>

      <div className={styles.email}>
        <label>Email</label>
        <div>
        <input type="email" placeholder='Enter Email Address' />
        <button>Send OTP</button>
        </div>
      </div>

      <div className={styles.email}>
        <label>Enter OTP</label>
        <div>
        <input type="text" placeholder='_ _ _   _ _ _'/>
        <button>Verify OTP</button>
        </div>
      </div>

      <div className={styles.password}>
        <label> Password </label>
        <input type={typePass ? "password" : "text"} placeholder='* * * * * * * * ' />
        <FontAwesomeIcon icon={typePass ? faEyeSlash : faEye } className={styles.eyeIcon} onClick={changepasstype}/>
      </div>
      <div className={styles.getoffer}>
        <label>Get Updates Of Exiting Offer</label>
        <input type="checkbox" />
        <div className={styles.circleMark}></div>
      </div>

      <div>
        <input type="submit" />
      </div>
    </div>
  )
}

export default SignupForm
