import React, { useState } from 'react'
import style from "./Signup.module.css"
import Loginform from '../Forms/Loginform'
import SignupForm from '../Forms/SignupForm'
const Signup = () => {
  const [form,setform] = useState(true)
  const formChangeSignup = ()=>{
    setform(false);
  }
  const formChangeLogin = ()=>{
    setform(true);
  }
  return (
    <>
    <div className={style.main}>
      <div className="container">
        <div className={style.header}>
            <div onClick={formChangeSignup} className={form ? null : style.headerActive}>Signup</div>
            <div onClick={formChangeLogin} className={form ? style.headerActive : null}>Login</div>
        </div>
        <div className={style.forms}>
            {
              form ? <Loginform/> : <SignupForm/>
            }
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup
