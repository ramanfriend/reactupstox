import React from "react";
import { Link } from "react-router";



export default class Account extends React.Component
{
 
 render() {   
    return (
      <div>
        <div class="row">
          <div class="col-md-10">
            <h1>Account Opening Made Easy</h1>
            <p class="lead">Welcome!It gets simpler if you keep your PAN card and Cheque book handy.</p>
          </div>
        </div>
        <div class="row">
          <ul class="nav navbar-nav pull-left">
            <li><Link to="/openaccount">Register</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </div>
        <div class="row"> {this.props.children}</div>
      </div>
      
    );
  }

}