
import React, { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter as Router, Route, Link, Routes
// } from "react-router-dom";


  function App() {
    const [mode, setMode] = useState('light');

    const [alert, setAlert] = useState('');
    
    const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type : type,
      })
      setTimeout(() => {
        setAlert('')
      }, 1500);

    }

     

    const ToggleMode = ()=>{
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor=("grey");
        showAlert(": Dark mode has been enabled!","success");
        setInterval(() => {
          document.title = 'TextUtiles is Amazing Website'
        }, 2000);
        setInterval(() => {
          document.title = 'Install TextUtiles Now'
        }, 1700);
    
        }
      else{
        setMode ("light");
        document.body.style.backgroundColor=("White");
        showAlert(": Light mode has been enabled!","success");


        
      }
    }
  
    // const ToggleMode = ()=>{
    //   if(mode === "light"){
    //     setMode("dark");
    //     document.body.style.backgroundColor=("#800080	");
    //     showAlert(": Purple mode has been enabled!","success");
    
    //     }
    //   else{
    //     setMode ("light");
    //     document.body.style.backgroundColor=("White");
    //     showAlert(": Light mode has been enabled!","success");


        
    //   }
    // }
    //  const TogMode = ()=>{
    //   if(mode === "light"){
    //     setMode("dark");
    //     document.body.style.backgroundColor=("#008000");
    //     showAlert(": Green mode has been enabled!","success");
    //   }
    
    //     }
    //   else{
    //     setMode ("light");
    //     document.body.style.backgroundColor=("White");
    //     showAlert(": Light mode has been enabled!","success");


    //   }
    //   }
    //  const ToggMode = ()=>{
    //   if(mode === "light"){
    //     setMode("dark");
    //     document.body.style.backgroundColor=("#800000");
    //     showAlert(": Red Dark mode has been enabled!","success");
    
    //     }
    //   else{
    //     setMode ("light");
    //     document.body.style.backgroundColor=("White");
    //     showAlert(": Light mode has been enabled!","success");


        
    //   }
    
      return (
        <>

{/* <Router> */}
       <Navbar title="TextUtiles" ServicesText="Our Services" mode={mode} ToggleMode={ToggleMode} />
       <div><Alert alert={alert} /></div>
        <div className="container my-8">
        {/* <Routes> */}
          {/* <Route path="/About">} */}
          {<About mode={mode}/>}
          {/* </Route> */}
           {/* <Route path="/home"element=}> */}
           {<TextForm showAlert={showAlert} heading='Enter the text to analyze below' mode={mode}/>}
        {/* </Route> */}
        {/* </Routes> */}
        </div>
        {/* </Router> */}
        
        </>
  );
  }
  
  export default App;

  // const showAlert = (message, type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type,
  //   })

  // }














//   <nav classNameNameName="navbar">
//   <div classNameNameName="container">
//     <a classNameNameName="navbar-brand" href="/">TEXTUTILs</a>
//     {/* <button classNameNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
//       <span classNameNameName="navbar-toggler-icon"></span>
//     </button> */}
//     {/* <div classNameNameName="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul classNameNameName="navbar-nav me-auto mb-2 mb-lg-0"> */}
//         <li classNameNameName="nav-item">
//           <a classNameNameName="nav-link active" id="na" aria-current="page" href="/">Home</a>
//         </li>
//         <li classNameNameName="nav-item">
//           <a classNameNameName="nav-link" href="/">About</a>
//         </li>
//       {/* /</ul> */}
//       <form classNameNameName="d-flex" role="search">
//         <input classNameNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button classNameNameName="btn btn-outline-success" type="submit">Search</button>
//   </form>
// {/* </div> */}
// </div>
// </nav>


