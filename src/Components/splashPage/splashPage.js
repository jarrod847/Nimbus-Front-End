import React from "react";
import { Link } from "react-router-dom";
import { splashText } from "./splashText";

const Home = () => {
  return (
    <div className="splash">
      <h1>Welcome to Nimbus</h1>
      <p>{splashText[0]}</p>
      <h2>Rewards System</h2>
      <p>{splashText[1]}</p>
      <div className="buttonDiv">
        <Link className="" to="/signup">
          <button className="regButton">Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
