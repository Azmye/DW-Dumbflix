import { Link } from 'react-router-dom';
import navBrand from '../../assets/img/nav-brand.png';
import Register from '../Modal/Register';
import React, { useContext } from 'react';
import { LoginModal, RegisterModal, SetLoginModal, SetRegisterModal } from '../../App';
import Login from '../Modal/Login';

const Navbar = () => {
  const registerModal = useContext(RegisterModal);
  const setRegisterModal = useContext(SetRegisterModal);
  const loginModal = useContext(LoginModal);
  const setLoginModal = useContext(SetLoginModal);
  return (
    <React.Fragment>
      <nav className="fixed left-0 right-0 bg-zinc-900 text-white py-3 z-50">
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Nav Links */}
          <div className="flex gap-3 items-center text-white font-semibold">
            <Link to={'/'}>Home</Link>
            <Link to={'/shows'}>TV Shows</Link>
            <Link to={'/movies'}>Movies</Link>
          </div>

          {/* Nav Brand */}
          <div>
            <img src={navBrand} alt="" />
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-3 font-semibold">
            <button onClick={() => setRegisterModal(!registerModal)} className="bg-white text-red-700 px-4 py-1 rounded-md">
              Register
            </button>
            <button onClick={() => setLoginModal(!loginModal)} className="bg-red-700 text-white px-4 py-1 rounded-md">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Register Modal */}
      {registerModal && (
        <div className="relative w-full z-50 flex justify-center">
          <div onClick={() => setRegisterModal(false)} className="absolute w-full h-[200vh] bg-zinc-900/60"></div>
          <Register className={`absolute w-96 bg-zinc-900 mt-32 p-8 rounded-md`} />
        </div>
      )}
      {/* Login Modal */}
      {loginModal && (
        <div className="relative w-full z-50 flex justify-center">
          <div onClick={() => setLoginModal(false)} className="absolute w-full h-[200vh] bg-zinc-900/60"></div>
          <Login className={`absolute w-96 bg-zinc-900 mt-44 p-8 rounded-md`} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
