import Navbar from './Components/Navbar';
import './App.css';
// import Profile from './Components/Profile';
import TextForm from './Components/TextForm';
//import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';



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
  }


  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode has Been Enabled", "success")
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has Been Enabled", "success")
    }
  }

  // It is also very special as we combining the Props and State Varibale 
  return (
    <>
      <Navbar title="TextAnalyser" about="About" mode={mode} toggleMode={toggleMode} />


      <Alert alert={alert} />


      {/* Conaiter class is basic class of Bootstrap used for providing 
      basic css functionalties */}

      <div className="conatiner my-4">
        <TextForm title="Enter Your Details" mode={mode} />
        {/* <About /> */}
      </div>

    </>
  );
}


export default MyApp;
