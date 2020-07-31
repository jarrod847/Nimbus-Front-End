import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Login = (props) => {
  const [userCred, setUserCred] = useState({
    displayName: "",
    password: "",
  });

  const handleLogin = (e) => {
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:7000/user/login`, userCred)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/profile");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={onSubmit} className="login">
      <h1>Login</h1>
      <span>
        <h3>Username:</h3>
        <input
          name="displayName"
          value={userCred.displayName}
          onChange={handleLogin}
          className="inputs"
        />
      </span>
      <span>
        <h3>Password:</h3>
        <input
          name="password"
          value={userCred.password}
          onChange={handleLogin}
          className="inputs"
        />
      </span>
      <button className="regButton">Login</button>
      <h3>
        Dont have an account? <Link to="signup">Sign up!</Link>
      </h3>
    </form>
  );
};

export default Login;
