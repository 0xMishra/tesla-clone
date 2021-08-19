import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { bgImageArray } from "./data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [width, setWidth] = useState("w-0");
  const [display, setDisplay] = useState("-right-32");
  const [sidebar, setSidebar] = useState("w-0");

  const showSidebar = () => {
    setSidebar("w-96");
    setWidth("w-screen");
    setDisplay("right-0");
  };
  const hideSidebar = () => {
    setSidebar("w-0");
    setWidth("w-0");
    setDisplay("-right-32");
  };
  return (
    <AppContext.Provider
      value={{
        sidebar,
        showSidebar,
        hideSidebar,
        width,
        display,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
