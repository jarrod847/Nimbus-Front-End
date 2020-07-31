import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h1>Login</h1>
      <span>
        <h3>Username:</h3>
        <input className="inputs" />
      </span>
      <span>
        <h3>Password:</h3>
        <input className="inputs" />
      </span>
      <h3>
        Dont have an account? <Link to="signup">Sign up!</Link>
      </h3>
    </div>
  );
};

export default Login;
