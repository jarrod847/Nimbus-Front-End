import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const SignUp = (props) => {
  const [form, setForm] = useState({
    displayName: "",
    password: "",
  });

  const handleSignUp = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_API_URL}user/register`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/profile");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };
  return (
    <form onSubmit={onSubmit} className="login">
      <h1>Sign Up</h1>
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
        <input name="password" onChange={handleSignUp} value={form.password} />
      </span>
      <button className="regButton">Sign Up</button>
      <h3>
        Already a User? <Link to="/login">Login</Link>
      </h3>
    </form>
  );
};

export default SignUp;
