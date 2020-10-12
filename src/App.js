import React from 'react';
// import logo from './logo.svg';
import './App.css';

import MyRoute from "./Component/myRoute";
import Navigation from "./Component/Navigation";
import {BrowserRouter} from "react-router-dom";



function App() {
  return (
    <div className="App">

        <BrowserRouter>
            <Navigation/>
            <MyRoute/>
        </BrowserRouter>

    </div>
  );
}

export default App;
