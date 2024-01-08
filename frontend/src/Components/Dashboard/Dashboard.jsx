import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import tokenContext from '../../Contetx API\'s/token/TokenContext';


const Dashboard = () => {
  const {token,setToken} = useContext(tokenContext);
  const [msg,setmsg] = useState("");
  const getData = async()=>{
    try {
      const res = await axios.get("http://localhost:8000/dashboard/",{
        headers:{
          Authorization : `Bearer ${token}`
        }
      });
      setmsg("You Are Authorised");
      console.log(res);
    } catch (error) {
      console.log(error)
      setmsg(error.response.data);
    }
  }
  useEffect(()=>{
    getData();
  },[])
  return (
    <div>
      <h1>{msg}</h1>
    </div>
  )
}

export default Dashboard
