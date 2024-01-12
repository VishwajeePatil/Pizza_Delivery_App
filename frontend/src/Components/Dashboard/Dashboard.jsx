import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"

import tokenContext from '../../Contetx API\'s/token/TokenContext';
import Varient from '../Varient/Varient';
import styles from "./Dashboard.module.css"
import AddVarientFrom from '../Forms/Varient/AddVarientFrom';
import LoadingScreenContext from '../../Contetx API\'s/LoadingScreen';
import Stock from '../Stock/Stock';
const Dashboard = () => {
  const {setLoadingScreen} = useContext(LoadingScreenContext);
  console.log("page")
  const [stock,setStock] = useState()
  const [addVarient,setAddVarient] = useState(false);
  const {getToken} = useContext(tokenContext);
  const [refresh,setRefresh] = useState(false);
  const [varients,setVarients] = useState([]);
  const [msg,setmsg] = useState("");
  const getData = async()=>{
    try {
      setLoadingScreen(true);
      const res = await axios.get("http://localhost:8000/dashboard/varient",{
        headers:{
          Authorization : `Bearer ${getToken()}`
        }
      });
      setVarients(res.data)
      const stock = await axios.get("http://localhost:8000/dashboard/stock",{
        headers:{
          Authorization : `Bearer ${getToken()}`
        }
      });
      setStock(stock.data)
      setLoadingScreen(false);
    } catch (error) {
      console.log(error)
      setmsg(error.response.data);
      setLoadingScreen(false);
    }
  }
  useEffect(()=>{
    getData();
  },[refresh])
  
  const deleteVarient = async(id)=>{
    try {
      setLoadingScreen(true);
      const res = await axios.delete(`http://localhost:8000/dashboard/deletevarient/${id}`,{
        headers:{
          Authorization : `Bearer ${getToken()}`
        }
      })
      setLoadingScreen(false);
      setRefresh(!refresh);

    } catch (error) {
      console.log(error)
      setLoadingScreen(false);
    }
  }
  const toggelAddVarient = ()=>{
    setAddVarient(false)
  }
  const postVarient = async(data)=>{
      try {
        setLoadingScreen(true);
        const res = await axios.post("http://localhost:8000/dashboard/addvarient",data,{
          headers:{
            authorization : `Bearer ${getToken()}`
          }
        })
        setLoadingScreen(false);
        setAddVarient(false);
        setRefresh(!refresh)
      } catch (error) {
        setLoadingScreen(false);
        console.log(error)
      }
  }
  const handelRefresh = (flag)=>{
    setRefresh(!refresh);
  }
  return (
    <div className={styles.main}>
      <div className="container">
        {addVarient ? <AddVarientFrom toggelAddVarient={toggelAddVarient} postVarient={postVarient}/> : null}
        <div className={styles.stock}>
          {stock ? <Stock stock={stock} handelRefresh={handelRefresh} /> : null}
        </div>
        <div className={styles.varients}>
          <div className={styles.heading}>
            <p>Available Varients</p>
            <button onClick={()=>setAddVarient(!addVarient)}>Add</button>
          </div>
        {
          varients.map((elem)=>(
            <Varient elem={elem} key={elem._id} deleteVarient={deleteVarient}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard
