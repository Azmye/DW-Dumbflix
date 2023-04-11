import { Link } from 'react-router-dom';
import navBrand from '../../assets/img/nav-brand.png';
import Register from '../Modal/Register';
import React, { useContext, useEffect, useState } from 'react';
import Login from '../Modal/Login';
import { ModalContext } from '../../Context/ModalContext';
import { UserContext } from '../../Context/UserContext';
import { FaUser } from 'react-icons/fa';
import UserDropdown from '../Modal/UserDropdown';

const Navbar = () => {
  const [modalState, modalDispatch] = useContext(ModalContext);
  const [userState, _] = useContext(UserContext);
  const [isUserDropdown, setUserDropdown] = useState();

  return (
    <React.Fragment>
      <nav className="fixed left-0 right-0 bg-zinc-900 text-white py-3 z-50">
        <div className="container px-8 mx-auto flex justify-between items-center relative">
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
          {!userState.isLogin && (
            <div className="flex gap-3 font-semibold">
              <button onClick={() => modalDispatch({ type: 'REGISTER_MODAL' })} className="bg-white text-red-700 px-4 py-1 rounded-md">
                Register
              </button>
              <button onClick={() => modalDispatch({ type: 'LOGIN_MODAL' })} className="bg-red-700 text-white px-4 py-1 rounded-md">
                Login
              </button>
            </div>
          )}

          {/* User Photo Profile */}
          {userState.isLogin && (
            <div className="lg:w-44">
              <FaUser onMouseOver={() => setUserDropdown(true)} className="ml-auto" />
            </div>
          )}

          {userState.isLogin && isUserDropdown && (
            <div onMouseLeave={() => setUserDropdown(false)} className={`absolute -right-1 mt-3 top-full`}>
              <UserDropdown />
            </div>
          )}
        </div>
      </nav>

      {/* Register Modal */}
      {modalState.isRegisterModal && (
        <div className="relative w-full z-50 flex justify-center">
          <div onClick={() => modalDispatch({ type: 'CLOSE_AUTH_MODAL' })} className="absolute w-full h-[200vh] bg-zinc-900/60"></div>
          <Register className={`absolute w-96 bg-zinc-900 mt-32 p-8 rounded-md`} />
        </div>
      )}
      {/* Login Modal */}
      {modalState.isLoginModal && (
        <div className="relative w-full z-50 flex justify-center">
          <div onClick={() => modalDispatch({ type: 'CLOSE_AUTH_MODAL' })} className="absolute w-full h-[200vh] bg-zinc-900/60"></div>
          <Login className={`absolute w-96 bg-zinc-900 mt-44 p-8 rounded-md`} />
        </div>
      )}
    </React.Fragment>
  );
};

export default Navbar;
