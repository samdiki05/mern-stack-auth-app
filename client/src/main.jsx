import { createContext, StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Define the Context with correct initial values and function signatures
export const Context = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  user: null,
  setUser: () => {}
});

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize with boolean
  const [user, setUser] = useState(null); // Initialize with null

  return (
    <Context.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      <App />
    </Context.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>
);