import Navbar from './Components/Navbar';
import './App.css';
// import Profile from './Components/Profile';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
  // Link
} from "react-router-dom";




function MyApp() {
  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    // Here we are returning alert as object
    setalert({
      msg: message,
      // There are actuallt different types of Alert like Success , Warning , Danger , info 
      type: type
    })

    // This is used so that Alert will automatically dismiss after sometime 
    setTimeout(() => {
      setalert();
    }, 2000)


  }


  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has Been Enabled", "success")
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has Been Enabled", "danger")
    }
  }

  // It is also very special as we combining the Props and State Varibale 
  return (
    <>
    <Router>
      <Navbar title="TextAnalyser" about="About" mode={mode} toggleMode={toggleMode} />

      <Alert alert={alert} />
      {/* Container class is basic class of Bootstrap used for providing 
      basic css functionalties */}
      <div className="conatiner my-4">

        {
        /* React does Partial Matching so that's why we use Exact  */
        /* /users --> Component1 
        /users/home --> --> Component 2  */
        }

        <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} title="Enter Your Details" mode={mode}  />} />
        <Route exact path= "/about" element ={<About />}/>
         
        </Routes>
      </div>

      </Router>
    </>
  );
}


export default MyApp;
