import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trailers from './Components/Pages/Trailers';
import './App.css';

function App() {

  return (
    <div className='app'>
      <Router >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Trailer/:id" element={<Trailers/>}/>
        </Routes>
        </Router> 
        </div>
  );
}

export default App;