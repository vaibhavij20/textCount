
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() 
{
  const [mode,setMode]=useState("light");
  const [t,sett]=useState("Enable dark mode")

  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark");
      sett("Enable light mode")
      document.body.style.backgroundColor="#454545"
       document.body.style.color="white"
      
    }
    else{
      setMode("light")
      sett("Enable dark mode")
       document.body.style.backgroundColor="white"
       document.body.style.color="black"
      
    }
  }
  return (
    <>
    
<Navbar title="TextCount" abouttext="About us" mode={mode} toggleMode={toggleMode} t={t}/>
<div className="container my-3" >
<TextForm heading="Enter you text here"/>
{/*<About/>*/}
</div>

    </>
  );
}

export default App;
