import React from "react";

export default class Help extends React.Component
{
 
 render() {   
    return (
        <div>
            <div class="row">
                <div class="col-md-5 col-sm-6">
                    <h1>Contact Us</h1>
                    <p class="lead">Please feel free to contact us.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-5 col-sm-6">
                    <form name="helpForm" class="form-horizontal form-help">
                        <div class="form-group">
                            <div class="col-sm-3"><label>Name</label></div>
                            <div class="col-sm-9"><input type="text" name="name" pattern="[a-z A-Z]{1,32}" title="Your name must be alphabetic" class="form-control"
                                placeholder="Enter Full Name" required="" aria-required="true" aria-invalid="true"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-3"><label>Email Address</label></div>
                            <div class="col-sm-9"><input type="email" name="email" class="form-control" placeholder="Enter Email Address" required="" aria-required="true" aria-invalid="true"/></div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-3"><label>Phone Number</label></div>
                            <div class="col-sm-9"><input type="number" pattern="\d{10}" title="Your 10 digit phone Number Eg: 2261309999" name="phone" class="form-control"
                                placeholder="Enter Phone Number" aria-invalid="false" /></div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-3"><label>Message</label></div>
                            <div class="col-sm-9"><textarea type="text" name="message" class="form-control" placeholder="Enter Message" required="" aria-multiline="true"
                                aria-required="true" aria-invalid="true"></textarea>
                            </div>
                        </div>

                        <div class="form-details"><button type="submit" value="Submit" class="btn btn-primary pull-right" aria-disabled="false">Submit</button></div>
                    </form>
                </div>
                <div class="col-md-7 col-sm-6">
                    <div class="rksv-info">
                        <h2>Please Note</h2>
                        <p>Call our office at<br/>
                            <a href="tel:912261309999">+91-22-6130-9999</a>
                            for any queries you may have on the application form.
                        </p>
                    </div>
                </div>
            </div>
        </div>      
    );
  }

}