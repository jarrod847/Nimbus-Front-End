import React from "react";
import NavBar from "./Components/nav/navBar";
import TimeLine from "./Components/timeLine/timeLine";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./Components/user/profile";
import Login from "./Components/login-and-sign/login";
import "./scss/app.scss";
import SignUp from "./Components/login-and-sign/signUp";
import Home from "./Components/splashPage/splashPage";
import Comments from "./Components/Comments/comments";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/timeLine" component={TimeLine} />
        <Route path="/comments" component={Comments} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
