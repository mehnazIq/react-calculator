import react, { useState } from "react";
import Header from "./component/Header/Header";

import KeyPadMehnaz  from './component/keypad/keypad';
import MoonIcon from "./assets/moon.png"
import SunIcon from "./assets/sun.png"
import './App.css';



function App() {
  const[isDarkMode, setIsDarkMode]= useState(false)

  return (
    <div className="app" data-theme="dark">

      <div className="app_calculator">
       <div className="app_calculator_navbar">
        <Header/>
        <KeyPadMehnaz/>
          <div className="app_calculator_navbar_toggle" onClick={()=>setIsDarkMode(!isDarkMode)}>
            <div 
            className={`app_calculator_navbar_toggle_circle ${
              isDarkMode ?
       "app_calculator_navbar_toggle_circle_active" : ""
       }`}/>

      </div>
      <img src={isDarkMode ? MoonIcon: SunIcon} alt="mode"/>
    </div>
      </div>
        </div>

    
  );
}

export default App;
