
import './App.css';
import NoteState from './context/NewState'
import About from './componenets/About';
import Home from './componenets/Home';
import Navbar from './componenets/Navbar';
import Login from './componenets/Login';
import Signup from './componenets/Signup';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Alert from './componenets/Alert';




function App() {
  const [alert, setAlert] = useState(null)

const showAlert = (msg, type) => {
  setAlert({ msg: msg, type: type })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
  return (
 <>
  <NoteState>

  <Router>
    
    <Navbar path='/signup'></Navbar>
    <Alert alert={alert}></Alert>
    <div className="container">
    <Routes>
    <Route  path='/' element={<Home showAlert={showAlert}/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
    <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}/>

  
    </Routes>
    
       </div>
    </Router>
    </NoteState>
 </>
  );
}

export default App;
