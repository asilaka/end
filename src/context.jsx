import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  //НАЧАЛО КОНТЕКСТА
  const [state, setstate] = useState(false);

  const actionName = () => {
    setstate(!state);
  };

  const [heart, setHeart] = useState([]);

  const asd = localStorage.getItem('heart');

  const value = {
    state,
    actionName,
    heart,
    setHeart,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
