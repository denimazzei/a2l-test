/* import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//import "assets/css/nucleo-icons.css";
//import "assets/scss/blk-design-system-react.scss?v=1.2.0";
//import "assets/demo/demo.css";
import "./index.css";

import Index from "views/Index.js";
import LandingPage from "components/LandingPage.js";
import RegisterPage from "components/RegisterPage/RegisterPage.js";
import LoginPage from "components/LoginPage/LoginPage";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/home" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

*/
