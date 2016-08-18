import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super()
    }

    componentWillMount() {
        this.setState({ name: 'Contact Us',url: 'help' });       
    }
   
    onItemClick() {    
       this.state.name = this.state.name=="Back"?"Contact Us":"Back";
       this.state.url =this.state.url=="help"?"account":"help";;
       console.log(this.state.data);        
    }

    

    render() {
        return (
            <div class="ng-scope">
                <div class="container-fluid ng-scope">
                    <div class="row">
                        <div class="col-xs-12">
                            <nav class="navbar">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="https://new.upstox.com"><img src="src/assets/images/logo.png" alt=""/></a>
                                </div>
                                <ul class="nav navbar-nav pull-right">
                                    <li><Link to={this.state.url} onClick={this.onItemClick.bind(this)} aria-hidden="false" class="">{this.state.name}</Link></li>                                 
                               </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

