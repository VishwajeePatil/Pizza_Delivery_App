import React, { useState } from 'react'
import LoadingScreenContext from "./LoadingScreen"
const LoadingScreenProvider = ({children}) => {
  const [loadingScreen , setLoadingScreen] = useState(false);
  return (
    <LoadingScreenContext.Provider value={{loadingScreen,setLoadingScreen}}>
      {children}
    </LoadingScreenContext.Provider>
  )
}

export default LoadingScreenProvider
