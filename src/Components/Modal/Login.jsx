import { useContext } from 'react';
import { UserContext } from '../../Context/UserContext';
import { ModalContext } from '../../Context/ModalContext';

const Login = (props) => {
  const [userState, userDispatch] = useContext(UserContext);
  const [_, modalDispatch] = useContext(ModalContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    userDispatch({
      type: 'LOGIN_SUCCESS',
    });

    modalDispatch({
      type: 'CLOSE_AUTH_MODAL',
    });
  };

  return (
    <div className={`${props.className}`}>
      <h2 className="font-semibold mb-5 text-2xl text-white">Login</h2>
      <form>
        <input type="email" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" placeholder="Email" />

        <input type="password" className="w-full mb-3 rounded-md p-2 placeholder-white border-2 border-white bg-zinc-500 focus:outline-none" placeholder="Password" />

        <button onClick={handleOnClick} className="w-full bg-red-700 py-2 rounded-md mb-2 text-white font-semibold">
          Login
        </button>

        <p className="text-sm text-center">
          Don't have an account? click <span className="font-semibold cursor-pointer">Here</span>
        </p>
      </form>
    </div>
  );
};

export default Login;
