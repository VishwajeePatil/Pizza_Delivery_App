import React, { useState } from 'react'
import style from "./SignupForm.module.css"
const SignupForm = () => {
    const [formData,setformData] = useState({
        name:"",
        mobileNo:"",
        email:"",
        dob:"",
        password:"",
        getOffer:false
    })
  return (
    <div className={style.main}>
      
    </div>
  )
}

export default SignupForm
