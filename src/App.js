import React, { Component } from "react";
import "react-bootstrap/dist/react-bootstrap.js";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login_page/Login";
import Drag from "./component/Drag_n_Drop/Drag";
import Drop from "./component/Drag_n_Drop/Drop";
import calender from "./Pages/Calender";
import Landing from "./Pages/Landing";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Login} exact />
          <Route path="/Drag" component={Drag} exact />

          <Route path="/landing" component={Landing} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
