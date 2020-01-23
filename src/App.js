import "./App.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>hehe</Navbar>
        <TourList></TourList>
      </React.Fragment>
    );
  }
}
