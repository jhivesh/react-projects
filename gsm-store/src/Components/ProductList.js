import React, { Component } from 'react'
import NavBar from "../Components/Auth/Navbar"
import "./Auth/NavBar.css";

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                Hello from ProductList
            </div>
        )
    }
}
