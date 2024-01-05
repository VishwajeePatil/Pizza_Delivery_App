import React, { useContext, useState } from 'react'
import styles from "./Loginform.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye  , faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import LoadingScreenContext from '../../Contetx API\'s/LoadingScreen/LoadingScreen';

const Loginform = () => {
  const [typePass,settypePass] = useState(true)
  const [message,setMessage] = useState({msg:"",clr:true})
  const {setLoadingScreen} = useContext(LoadingScreenContext);
  return (
    <div className={styles.formcontainer}>
      <form >
      <div className={styles.email}>
        <label>Email</label>
        <div>
        <input type="email" placeholder='Enter Email Address' name="email"/>
        </div>
      </div>

      <div className={styles.password}>
        <label> Password </label>
        <input type={typePass ? "password" : "text"} placeholder='* * * * * * * * ' name="password"/>
        <FontAwesomeIcon icon={typePass ? faEyeSlash : faEye } className={styles.eyeIcon} />
      </div>

      <div>
        <p style={{color: message.clr ? "green" : "red"}}>{message.msg}</p>
      </div>
      <div>
        <input type="submit"/>
      </div>
      </form>
    </div>
  )
}

export default Loginform
