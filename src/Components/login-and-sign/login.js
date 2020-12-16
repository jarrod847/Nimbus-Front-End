import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import User from "../Recoil/atom/user";
import AxiosWithUrl from "../utilities/axiosWithUrl";

const Login = (props) => {
  const [userCred, setUserCred] = useState({
    displayName: "",
    password: "",
  });
  const [userProfile, setUserProfile] = useRecoilState(User);

  const handleLogin = (e) => {
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AxiosWithUrl()
      .post(`/user/login`, userCred)
      .then((res) => {
        setUserProfile(res.data.user);
        props.history.push("/profile");
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
          type="password"
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
