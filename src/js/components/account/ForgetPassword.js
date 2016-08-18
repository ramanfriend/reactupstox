import React from "react";
import { Link } from "react-router";

export default class SignIn extends React.Component {
  render() {
    var divStyle={marginTop:'10px'};
    return (       
      <div class="row">
        <div class="row">
          <div class="col-sm-6">
            <h1>Forgot Your Password?</h1>
            <p>It happens to the best of us.</p>
            <p>Please enter your email address to receive the password reset instructions.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <form method="post" name="forgotPassForm" class="form-horizontal">
              <div class="form-group">
                <div class="col-sm-9">
                  <label>Email Address</label>
                  <input type="email" class="form-control" id="inputEmail" name="inputEmail" placeholder="Enter email address" required="" />
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-9">
                  <button type="submit" class="btn btn-primary" ng-disabled="forgotPassForm.submitted" aria-disabled="false">Reset Password</button>
                  <p>Know your password?<strong class="text-primary" role="button" tabindex="0"><Link to="signin">SIGN IN</Link></strong></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>         
    );
  }
}