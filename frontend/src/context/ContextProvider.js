import React, { useState } from "react";
export const MyContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  return (
    <MyContext.Provider value={{ token, setToken }}>
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
