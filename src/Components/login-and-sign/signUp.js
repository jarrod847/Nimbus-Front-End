import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useRecoilState } from "recoil";
import User from "../Recoil/atom/user";
import AxiosWithUrl from "../utilities/axiosWithUrl";

const SignUp = (props) => {
  const [form, setForm] = useState({
    displayName: "",
    password: "",
    bio: "",
    img: "",
  });
  const [userProfile, setUserProfile] = useRecoilState(User);
  const handleSignUp = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    AxiosWithUrl()
      .post(`/user/register`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/profile");
        setUserProfile(res.data);
        localStorage.setItem("info", res.data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={onSubmit} className="signUp">
      <h1>Sign Up</h1>
      <div className="signUpCred">
        <span className="signupSpan">
          <b>Select a username</b>
          <input
            name="displayName"
            value={form.displayName}
            onChange={handleSignUp}
          />
        </span>
        <span className="signupSpan">
          <b>Select a password</b>
          <input
            name="password"
            onChange={handleSignUp}
            value={form.password}
          />
        </span>{" "}
        <span className="signupSpan">
          <b>Img (Img URL)</b>
          <input name="img" onChange={handleSignUp} value={form.img} />
        </span>{" "}
        <span className="signupSpan">
          <b>Bio</b>
          <textarea
            className="bioText"
            name="bio"
            onChange={handleSignUp}
            value={form.bio}
          />
        </span>
      </div>

      <button className="regButton">Sign Up</button>
      <h3>
        Already a User? <Link to="/login">Login</Link>
      </h3>
    </form>
  );
};

export default SignUp;
