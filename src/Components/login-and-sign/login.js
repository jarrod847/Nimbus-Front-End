import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import User from "../Recoil/atom/user";
import { LoginToApi } from "../Recoil/thunk/loginAndSignUpThunk";
import AxiosWithUrl from "../utilities/axiosWithUrl";

const Login = (props) => {
  const [userCred, setUserCred] = useState({
    displayName: "",
    password: "",
  });
  const setUserProfile = useSetRecoilState(User);

  const handleLogin = (e) => {
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    LoginToApi(userCred, setUserProfile)();
    props.history.push("/profile");
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
