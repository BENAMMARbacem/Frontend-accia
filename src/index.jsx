import React, { createContext, useState, useEffect } from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { ThemeProvider } from "@material-tailwind/react";

export const Context = createContext({ isAuthenticated: false });

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedAuthState = localStorage.getItem("isAuthenticated");

    if (storedAuthState) {
      setIsAuthenticated(JSON.parse(storedAuthState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <App />
    </Context.Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AppWrapper />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
