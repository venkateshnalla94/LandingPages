import React, { Component } from "react";
import "react-bootstrap/dist/react-bootstrap.js";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login_page/Login";
import Drag from "./component/Drag_n_Drop/Drag";
import Drop from "./component/Drag_n_Drop/Drop";
import Landing from "./Pages/Landing";
import Homepage from "./Pages/Homepage";
import DashBoard from "./Pages/DashBoard";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
         <Route path="/" component={Landing} exact  />
          <Route path="/Drag" component={Drag} exact />
          <Route path="/Homepage" component={Homepage} exact />
          <Route path="/dashboard" component={DashBoard} exact />

          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
