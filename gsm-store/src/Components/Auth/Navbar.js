import React, { Component } from 'react';
import "./NavBar.css";
import {Link} from "react-router-dom"

class Navbar extends Component {
    render() {
        return (
            <div className="container">

                {/* a light navbar that is responsive for large devices */}
                <nav className="navbar navbar-light navbar-expand-lg bg-light" role="navigation">
                <a href="#" class="pull-left"><img src="C:\Users\user\Downloads\gsm-store.svg" width="40px" height="40px"/></a>
                    

                    {/* links */}
                    <ul className="navbar-nav mr-auto">
                        <a href="#" className="navbar-brand"><Link to="/">GSM Store</Link></a>
                    </ul>

                    {/* center nav link products and mycarts */}
                    <div className="mx-auto order-0">
                        <a href="#" className="navbar-brand mx-auto">
                            <span className="p-4">Phones</span>
                        </a>

                    </div>
                    <div className="mx-auto order-0">
                        <a href="#" className="navbar-brand mx-auto">
                            <span className="p-4">MyCart</span>
                        </a>

                    </div>




                    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <button type="button" id="button" class="btn btn-primary btn-sm">Login</button></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <button type="button" id="button" class="btn btn-secondary btn-sm">Sign up</button></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;
