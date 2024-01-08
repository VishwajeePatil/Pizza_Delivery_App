import React, { useState } from 'react'
import tokenContext from './TokenContext'
const TokenContextProvider = ({children}) => {
    const setToken = (token)=>{
      localStorage.setItem("token",token)
    }
    const getToken = ()=>{
      return localStorage.getItem("token");
    }
  return (
    <div>
      <tokenContext.Provider value = {{setToken,getToken}}>
        {children}
      </tokenContext.Provider>
    </div>
  )
}

export default TokenContextProvider
