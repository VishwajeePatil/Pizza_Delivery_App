import React, { useState } from 'react'
import tokenContext from './TokenContext'
const TokenContextProvider = ({children}) => {
    const [token,setToken] = useState("Hello");
  return (
    <div>
      <tokenContext.Provider value = {{token,setToken}}>
        {children}
      </tokenContext.Provider>
    </div>
  )
}

export default TokenContextProvider
