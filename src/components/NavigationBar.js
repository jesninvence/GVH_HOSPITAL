import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-lg bg-white sticky-bottom">
            <div className="container-fluid">
                <section className="logo">
                    <h1>LOGO</h1>
                </section>
                <ul className="navbar-nav text-center">
                    <li className="nav-item">
                        <a className="nav-link text-black md" href="">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="">Doctors</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="">Operation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-black" href="">Contact Us</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="btn btn-black text-end text-black" href="">login</a>
                    </li> */}
                </ul>
                <div>
                    <Link to="/signup">
                        <button className="sgnup">Sign-up</button>
                    </Link>
                    <Link to="/login">
                        <button className="sgnup" style={{background:"white",color:"blue",border:"2px solid blue"}}>Log-in</button>
                    </Link>
                </div>
            </div>
        </nav>
        </>
     );
}
 
export default NavigationBar;