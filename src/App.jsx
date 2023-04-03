import React from 'react';
import Navbar from './Components/Global/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Shows from './Pages/Shows';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
