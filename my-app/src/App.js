// import { set } from 'mongoose';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState(false);

  const toggleMode  = ()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "Texter - Light Mode";
      // setInterval (()=>{
      //   document.title = "Use Texter for font converting";
      // }, 2000)

  }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#3b3b3d";
            document.title = "Texter - Dark Mode"

  }
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/> 
      <Alert alert="this is alert"/>
      <div className="container my-3">
        <Routes>
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/'>
          <TextForm heading="writer" mode={mode}/>
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
