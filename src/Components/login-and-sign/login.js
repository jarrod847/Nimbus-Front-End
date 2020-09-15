import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useRecoilState } from "recoil";
import User from "../Recoil/atom/user";

const Login = (props) => {
  const [userCred, setUserCred] = useState({
    displayName: "",
    password: "",
  });

  const [userProfile, setUserProfile] = useRecoilState(User);
  console.log(userProfile);

  const handleLogin = (e) => {
    setUserCred({
      ...userCred,
      [e.target.name]: e.target.value,
    });
  };

  const { push } = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_API_URL}user/login`, userCred)
      .then((res) => {
        console.log(res);
        setUserProfile(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("User", res.data.user.displayName);
        localStorage.setItem("Bio", res.data.user.bio);
        localStorage.setItem("img", res.data.user.img);
        props.history.push("/profile");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  console.log(userCred);
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
