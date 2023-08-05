// import './App.css';
// let name = "<b>Milan</b>";// React do sanitisation for extrernal js
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'gray';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
      <>  
      <Navbar title="Header" aboutUsText="About Us" toggleMode={toggleMode} mode={mode} />
      <TextForm title="Text Transformation" mode={mode} />
      </>
        
  );
}

export default App;
