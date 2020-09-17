import React from "react";
import { splashText } from "./splashText";

const Home = () => {
  return (
    <div class="splash">
      <h1>Welcome to Nimbus</h1>
      <p>{splashText[0]}</p>
      <h2>Rewards System</h2>
      <p>{splashText[1]}</p>
    </div>
  );
};

export default Home;
