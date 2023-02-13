import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Details from './Pages/Details';

const App = () => (

  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:name" element={<Details />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  </>
);

export default App;
