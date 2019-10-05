import React, { Component } from "react";
import "react-bootstrap/dist/react-bootstrap.js";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./Pages/Landing";
import Homepage from "./Pages/Homepage";
import DashBoard from "./Pages/DashBoard";
import ContactUs from "./Pages/ContactUs/Contactus";
import Catering from "./Pages/Catering/Catering";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/landing" component={Landing} exact />
          <Route path="/homepage" component={Homepage} exact />
          <Route path="/" component={DashBoard} exact />
          <Route exact path="/contactus" component={ContactUs} />
          {/* <Route exact path="/catering" component={Catering} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
