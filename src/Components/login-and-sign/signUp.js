import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  return (
    <div className="login">
      <h1>Sign Up</h1>
      <span className="signupSpan">
        <b>Select a username</b>
        <input />
      </span>
      <span className="signupSpan">
        <b>Select a password</b>
        <input />
      </span>
      <h3>
        Already a User? <Link to="/login">Login</Link>
      </h3>
    </div>
  );
};

export default SignUp;
