import React, { createContext, useState } from 'react';
import Navbar from './Components/Global/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Shows from './Pages/Shows';
import DetailItem from './Pages/DetailsItem';
import Profile from './Pages/Profile';
import AdminHome from './Pages/AdminHome';
import AdminForm from './Pages/AdminForm';
import AdminTransactions from './Pages/AdminTransactions';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/movie-details/:id" element={<DetailItem endpoint={'/movie/'} />} />
        <Route path="/shows-details/:id" element={<DetailItem endpoint={'/tv/'} />} />
        <Route path="/admin-dashboard" element={<AdminHome />} />
        <Route path="/admin-form" element={<AdminForm />} />
        <Route path="/admin-transactions" element={<AdminTransactions />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
