import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";



import Layout from "./pages/Layout";
import Account from "./pages/Account";
import OpenAccount from "./components/account/OpenAccount";
import SignIn from "./components/account/SignIn";
import ForgetPassword from "./components/account/ForgetPassword";
import Help from "./pages/Help";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Account}></IndexRoute>      
      <Route path="/account" component={Account}>
        <Route path="/openaccount" component={OpenAccount} />
        <Route path="/signin" component={SignIn} />
      </Route>
      <Route path="/help" component={Help}/>
      <Route path="/forgetpassword" component={ForgetPassword}/>
    </Route>
  </Router>,
  app);
