import React, { Component } from 'react';
import kuLogo from './resources/KU_logo.png';
import kuSubLogo from './resources/KU_SubLogo.png';
import HomeTab from './component/HomeTab'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {focusItem: "home"};
  }

  changeNaveItem = function (focus) {
    this.setState({
      focusItem: focus
    });
  };

  contentSite = function () {
    if (this.state.focusItem==="home") {
      return <HomeTab/>
    }
  };

  render() {
    return (
      <div className="App">
        <header className="container-fluid header header-logo">
          <img src={kuLogo} className="ku-logo d-inline-block float-left"/>
          <img src={kuSubLogo} className="ku-sub-logo d-inline-block float-left"/>
          <div className="d-inline-block float-left header-text">
            <h1 className="title">HEADER</h1>
            <h3 className="subtitle">SUB HEADER หัวข้อรอง</h3>
          </div>
        </header>
        <div className="header">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className={this.state.focusItem==="home" ? "nav-link active" :  "nav-link"} href="#" id="home" onClick={() => this.changeNaveItem("home")}>Home</a>
            </li>
            <li className="nav-item">
              <a className={this.state.focusItem==="link-1" ? "nav-link active" :  "nav-link"} href="#" id="link-1" onClick={() => this.changeNaveItem("link-1")}>Link</a>
            </li>
            <li className="nav-item">
              <a className={this.state.focusItem==="link-2" ? "nav-link active" :  "nav-link"} href="#" id="link-2" onClick={() => this.changeNaveItem("link-2")}>Link</a>
            </li>
            <li className="nav-item">
              <a className={this.state.focusItem==="link-3" ? "nav-link active" :  "nav-link"} href="#" id="link-3" onClick={() => this.changeNaveItem("link-3")}>Link</a>
            </li>
          </ul>
        </div>
        <div className="content h-100">
          {this.contentSite()}
        </div>
      </div>
    );
  }
}

export default App;
