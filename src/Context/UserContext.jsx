import { createContext, useReducer } from 'react';

export const UserContext = createContext();

const initialState = {
  isLogin: false,
};

const reducer = (state, action) => {
  const { type, _ } = action;

  switch (type) {
    case 'LOGIN_SUCCESS':
      return {
        isLogin: true,
      };
    case 'LOGOUT':
      return {
        isLogin: false,
      };
    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={[state, dispatch]}>{children}</UserContext.Provider>;
};
