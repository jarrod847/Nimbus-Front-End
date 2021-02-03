import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { useSetRecoilState } from "recoil";
import User from "../Recoil/atom/user";
import AxiosWithUrl from "../utilities/axiosWithUrl";
import { SignUpApi } from "../Recoil/thunk/loginAndSignUpThunk";

const SignUp = (props) => {
  const [form, setForm] = useState({
    displayName: "",
    password: "",
    bio: "",
    img: "",
  });
  const setUserProfile = useSetRecoilState(User);
  const handleSignUp = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    SignUpApi(form, setUserProfile)();
    props.history.push("/profile");
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
