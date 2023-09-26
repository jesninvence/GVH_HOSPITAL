import "bootstrap/dist/css/bootstrap.min.css";
import {React, useState , useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

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
                <div className="container-fluid px-5">
                    <section className="logo">
                        <h1>LOGO</h1>
                    </section>
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
                    </div>
                </div>
            </nav>
        </>
     );
}
 
export default NavigationBar;