import React, { createContext, useState } from 'react';
import Navbar from './Components/Global/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Shows from './Pages/Shows';
import DetailItem from './Pages/DetailsItem';

// use context
export const RegisterModal = createContext();
export const SetRegisterModal = createContext();
export const LoginModal = createContext();
export const SetLoginModal = createContext();

const App = () => {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  return (
    <React.Fragment>
      <SetRegisterModal.Provider value={setRegisterModal}>
        <SetLoginModal.Provider value={setLoginModal}>
          <LoginModal.Provider value={loginModal}>
            <RegisterModal.Provider value={registerModal}>
              <Navbar />
            </RegisterModal.Provider>
          </LoginModal.Provider>
        </SetLoginModal.Provider>
      </SetRegisterModal.Provider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/movie-details/:id" element={<DetailItem endpoint={'/movie/'} />} />
        <Route path="/shows-details/:id" element={<DetailItem endpoint={'/tv/'} />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
