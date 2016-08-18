import React from "react";
import { Link } from "react-router";

export default class SignIn extends React.Component {
  render() {
    var divStyle={marginTop:'10px'};
    return (
       <div style={divStyle}>
       <div class="row">
        <form class="form-horizontal col-sm-7">
          <div class="form-group">
            <div class="col-sm-7">              
              <input type="email" name="email" class="form-control" placeholder="Enter your email address" required=""/>
            </div>
           </div>
           <div class="form-group">
            <div class="col-sm-7">             
              <input type="password" name="password" class="form-control" placeholder="password" required=""/>
            </div>
            <div class="col-sm-4"><input type="submit" value="Next" class="btn btn-primary"/></div>
           </div>
        </form>    
        </div> 
        <div class="row">
         <p>Forgot your password? <strong class="text-primary" role="button" tabindex="0"><Link to="forgetpassword">RESET PASSWORD</Link></strong></p>
        </div>   
      </div>
    );
  }
}
