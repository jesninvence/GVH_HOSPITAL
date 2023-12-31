import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import {React, useState , useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
<<<<<<< HEAD
import logo from "../images/capstonelogo.png";
=======
>>>>>>> master

const NavigationBar = () => {
    let [logged,setLogged] = useState(false);
    const [profileImage,setProfileImage] = useState('');
    const [name,setName] = useState('User');

    let cru = localStorage.getItem("cru");
    useEffect(
        () => {
            if (cru) {
                let sc = localStorage.getItem("sc");
                let data = new FormData();
                data.append("cru",cru);
                data.append("sc",sc);
<<<<<<< HEAD
                data.append("function",1);
=======
>>>>>>> master

                axios.post("http://localhost/GVH_PHP/get_user.php",data)
                .then(response => {
                    let result = response.data;
                    if (typeof result == "object") {
                        setLogged(true);
                        setProfileImage(result.profile_image);
                        if (result.firstname && result.lastname)
                            setName(`${result.firstname} ${result.lastname}`);
                    }
                });
            } 
        },[]
    );

    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-white sticky-bottom">
<<<<<<< HEAD
                <div className="container-fluid d-flex">
=======
                <div className="container-fluid px-5">
>>>>>>> master
                    <section className="logo">
                        <Link to="/">
                            <img src={logo} alt="" width="100px" />
                        </Link>
                    </section>
<<<<<<< HEAD
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
                        {
                                logged ? 
                                    <Link to="/user" className="d-flex align-items-center gap-2 ">
                                        <p className="m-0">Hello , {name}!</p>
                                        <div style={{display:"inline-block",width:"2.5rem",height:"2.5rem",border:"1px solid gray",borderRadius:"50%",overflow:"hidden"}}>
                                            <img src={profileImage} />
                                        </div>
                                    </Link>
                                    :
                                    <>
                                        <Link to="/signup">
                                            <button className="sgnup">Sign-up</button>
                                        </Link>
                                        <Link to="/login">
                                            <button className="sgnup" style={{background:"white",color:"blue",border:"2px solid blue"}}>Log-in</button>
                                        </Link>
                                    </>
                            }   
=======
                    <ul className="navbar-nav text-center">
                        <li className="nav-item">
                            <Link className="nav-link text-black md" to="/">
                                Home
                            </Link>
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
                            <a className="nav-link text-black" href="">About Us</a>
                        </li>
                    </ul>
                    <div>
                        {
                            logged ? 
                                <Link to="/user" className="d-flex align-items-center gap-2 ">
                                    <p className="m-0">Hello , {name}!</p>
                                    <div style={{display:"inline-block",width:"2.5rem",height:"2.5rem",border:"1px solid gray",borderRadius:"50%",overflow:"hidden"}}>
                                        <img src={profileImage} />
                                    </div>
                                </Link>
                                :
                                <>
                                    <Link to="/signup">
                                        <button className="sgnup">Sign-up</button>
                                    </Link>
                                    <Link to="/login">
                                        <button className="sgnup" style={{background:"white",color:"blue",border:"2px solid blue"}}>Log-in</button>
                                    </Link>
                                </>
                        }   
>>>>>>> master
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default NavigationBar;