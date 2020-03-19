import React from 'react';
import {Link,NavLink} from 'react-router-dom';

const Navbar =()=>{
    return (
    //    <nav className="nav-wrapper red darken-3">
    //        <div className="container">
    //           <a className="Brand-logo">Poke Times</a>
    //           <ul className="right">
    //               <li><a href="/">Home</a></li>
    //               <li><a href="/about">\About</a></li>
    //               <li><a href="/contact">Contact</a></li>
    //           </ul> 
    //        </div>
    //    </nav> 

    <nav className="nav-wrapper red darken-3">
        <div className="container">
            <a className="Brand-logo">Poke Times</a>
            <ul className="right">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contact">contact</Link></li>
            </ul> 
       </div>
   </nav> 
    )
    
}

export default Navbar;
