import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {Link} from "react-router-dom";
import logo from "../images/capstonelogo.png";

const NavigationBar = () => {
    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-bottom">
                <div className="container-fluid d-flex">
                    <section className="logo">
                        <Link to="/">
                            <img src={logo} alt="" width="100px" />
                        </Link>
                    </section>
                    <div>
                        <ul className="navbar-nav text-center" id="snd-nav">
                            <Link to="/" style={{textDecoration: "none"}}>
                                <li className="nav-item">
                                    <a className="nav-link md" href="">Home</a>
                                </li>
                            </Link>
                            <Link to="/drservices" style={{textDecoration: "none"}}>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Services</a>
                                </li>
                            </Link>
                            <Link to="/doctor" style={{textDecoration: "none"}}>
                                <li className="nav-item">
                                    <a className="nav-link" href="">Doctors</a>
                                </li>
                            </Link>
                            <div className="dropdown">
                                <a className="dropbtn" href="">Patients & Visitors Guide <FontAwesomeIcon icon={faAngleDown} /></a>
                                <div className="dropdown-content">
                                    <Link to="/admission">
                                        <a href="">Admission Procedure</a>
                                    </Link>
                                    <Link to="/discharge">
                                        <a href="">Discharge Procedure</a>
                                    </Link>
                                    <Link to="/advance">
                                        <a href="">Advance Directives</a>
                                    </Link>
                                    <Link to="/medical">
                                        <a href="">Medical Records</a>
                                    </Link>
                                    <Link to="/patientrights">
                                        <a href="">Patient Rights & Responsibilities</a>
                                    </Link>
                                    <Link to="/pharmacyinfo">
                                        <a href="">Pharmacy Information</a>
                                    </Link>
                                    <Link to="/pricelist">
                                        <a href="">Pricelist</a>
                                    </Link>
                                    <Link to="/visitation">
                                        <a href="">Visitation Guidelines</a>
                                    </Link>
                                    <Link to="/others">
                                        <a href="">Others</a>
                                    </Link>
                                </div>
                            </div>
                            <div className="dropdown">
                                <a className="dropbtn" href="#">Career Center <FontAwesomeIcon icon={faAngleDown} /></a>
                                <div className="dropdown-content">
                                    <Link to="/carrers">
                                        <a href="">Carrers</a>
                                    </Link>
                                    <Link to="/recidency">
                                        <a href="">Residency Training Programs</a>
                                    </Link>
                                    <Link to="/fellowship">
                                        <a href="">Fellowship Training Programs</a>
                                    </Link>
                                </div>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link" href="">About Us</a>
                            </li>
                        </ul>
                    </div>
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