import React from 'react';
import Navbar from './Components/Global/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
