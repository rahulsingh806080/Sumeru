import React from "react";
// import logo from "./logo.svg";
import { Switch, Route, Redirect } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhiteBoard from "./WhiteBoard";
import "./App.css";
import HeaderTop from "./HeaderTop";

const App = () => {
  return (
    <>
      <HeaderTop></HeaderTop>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/service" component={Service}></Route>
        <Route exact path="/contact" component={Contact}></Route>

        <Redirect to="/"></Redirect>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
