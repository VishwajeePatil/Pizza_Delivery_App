import './App.css';
import {Routes,Route} from "react-router-dom"
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
import LoadingScreen from './Components/LoadingScreen';
import { useContext } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import LoadingScreenContext from './Contetx API\'s/LoadingScreen';
import ForgetPasswords from './Components/Forms/ForgotPass/ForgetPasswords';
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
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='auth/forgetpass' element={<ForgetPasswords/>}/>
     </Routes> 
    </div>
    </>
  );
}

export default App;
