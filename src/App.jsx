import React, { Component } from "react";
import "./commonResource/style.css"; 
import Section from "./Component/Props/ClassComp/Section/Section";
import Header from "./Component/Props/ClassComp/Header/Header";

class App extends Component {
  render() { 
    return (
      <>
        <div className="all-container">
          <Header/> 
          <Section/>
        </div>
      </>
    );
  }
}

export default App;
