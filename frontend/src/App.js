import './App.css';
import {Routes,Route} from "react-router-dom"
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import LoadingScreen from './Components/LoadingScreen';
import { useContext } from 'react';
import LoadingScreenContext from './Contetx API\'s/LoadingScreen/LoadingScreen';
function App() {
  const {loadingScreen , setLoadingScreen} = useContext(LoadingScreenContext);
  // setLoadingScreen(true)
  return (
    <>
    {loadingScreen ? <LoadingScreen/> : null}
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/auth/signup' element={<Signup/>}/>
     </Routes> 
    </div>
    </>
  );
}

export default App;
