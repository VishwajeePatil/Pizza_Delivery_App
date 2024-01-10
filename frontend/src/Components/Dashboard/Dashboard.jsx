import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"

import tokenContext from '../../Contetx API\'s/token/TokenContext';
import Varient from '../Varient/Varient';
import styles from "./Dashboard.module.css"

const Dashboard = () => {
  const {getToken,setToken} = useContext(tokenContext);
  const [varients,setVarients] = useState([]);
  const [msg,setmsg] = useState("");
  const getData = async()=>{
    try {
      const res = await axios.get("http://localhost:8000/dashboard/varient",{
        headers:{
          Authorization : `Bearer ${getToken()}`
        }
      });
      setVarients(res.data)
    } catch (error) {
      console.log(error)
      setmsg(error.response.data);
    }
  }
  useEffect(()=>{
    getData();
  },[])
  console.log(varients)
  return (
    <div>
      <div className="container">
        <div className={styles.varients}>
          <div className={styles.heading}>
            <p>Available Varients</p>
            <button>Add</button>
          </div>
        {
          varients.map((elem)=>(
            <Varient elem={elem}/>
            ))
          }
          </div>
      </div>
    </div>
  )
}

export default Dashboard
