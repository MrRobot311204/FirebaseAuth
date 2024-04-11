import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterAndLogin from './Components/RegisterAndLogin.jsx';
import Home from './Components/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<RegisterAndLogin/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  </BrowserRouter>
)
// Create the routes by first installing the npm package of react-router dom available 
