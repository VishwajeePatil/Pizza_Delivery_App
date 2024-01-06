import React, { useContext, useState } from 'react'
import styles from "./Loginform.module.css"
import axios from "axios"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye  , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import LoadingScreenContext from '../../Contetx API\'s/LoadingScreen/LoadingScreen';

const Loginform = () => {
  const [typePass,settypePass] = useState(true)
  const [message,setMessage] = useState({msg:"",clr:true})
  const {setLoadingScreen} = useContext(LoadingScreenContext);
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })
  const handelChange = (e)=>{
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const handelSubmit = async (event)=>{
    event.preventDefault();
    try {
      setLoadingScreen(true)
      const res = await axios.post("http://localhost:8000/auth/login",formData)
      setLoadingScreen(false)
      setMessage({msg:res.data.msg,clr:true})
    } catch (error) {
      setLoadingScreen(false)
      setMessage({msg:error.response.data.msg,clr:false})
    }
  }
  return (
    <div className={styles.formcontainer}>
      <form >
      <div className={styles.email}>
        <label>Email</label>
        <div>
        <input type="email" placeholder='Enter Email Address' name="email" onChange={handelChange}/>
        </div>
      </div>

      <div className={styles.password}>
        <label> Password </label>
        <input type={typePass ? "password" : "text"} placeholder='* * * * * * * * ' name="password" onChange={handelChange}/>
        <FontAwesomeIcon icon={typePass ? faEyeSlash : faEye } className={styles.eyeIcon} />
      </div>

      <div>
        <p style={{color: message.clr ? "green" : "red"}}>{message.msg}</p>
      </div>
      <div>
        <input type="submit" onClick={handelSubmit}/>
      </div>
      </form>
    </div>
  )
}

export default Loginform
