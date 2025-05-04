import React, { useContext, useState } from "react";
import "../styles/Auth.css";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";

const Auth = () => {
  const { isAuthenticated } = useContext(Context);
  const [isLogin, setIsLogin] = useState(true); // Corrected typo in state name and setter function

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="auth-page">
        <div className="auth-container"> {/* Fixed typo in class name */}
          <div className="auth-toggle">
            <button 
              className={`toggle-btn ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)} // Fixed typo in setter function
            >
              Login
            </button>

            <button  
              className={`toggle-btn ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)} // Fixed to toggle to false for Register
            >
              Register
            </button>
          </div>
          {isLogin ? <Login /> : <Register />}
        </div>
      </div>
    </>
  );
};

export default Auth;