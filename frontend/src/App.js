import './App.css';
import {Routes,Route} from "react-router-dom"
import Signup from './Components/Signup/Signup';
import Navbar from './Components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/auth/signup' element={<Signup/>}/>
     </Routes> 
    </div>
  );
}

export default App;
