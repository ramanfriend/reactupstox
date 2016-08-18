import React from "react";

export default class OpenAccount extends React.Component {
 
  render() {
     var divStyle={marginTop:'10px'};
    return (
      <div style={divStyle}>
        <form class="form-horizontal col-sm-7">
          <div class="form-group">
            <div class="col-sm-7">
              <p>You can’t change this later, so please give us the real one and we promise not to spam.Ever.</p><br/>
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
    );
  }
}
