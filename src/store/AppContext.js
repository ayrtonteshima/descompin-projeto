import { createContext } from "react";

export const Context = createContext({});

export const AppContext = ({ children }) => {
  return (
    <Context.Provider value={{ name: 'Ayrton Teshima' }}>
      {children}
    </Context.Provider>
  )

}