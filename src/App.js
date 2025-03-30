import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      
        <Weather defaultCity="Budapest"/>
     
        <footer>
          This project was coded by Csilla Csejtei and is{" "}
          <a
            href="https://github.com/CsillaCsejtei/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}


