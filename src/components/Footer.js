import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter , faFacebookF , faInstagram , faLinkedinIn , faYoutube} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return ( 
        <>
            <div id="footer">
                <div className="links">
                    <div className="container">
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <div>
                                <h4>For Patients</h4>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <a href="#">Find a Doctor</a>
                                    <a href="#">HMO's</a>
                                    <a href="#">Specialties</a>
                                    <a href="#">Conditions</a>
                                    <a href="#">Services</a>
                                    <a href="#">Online Consultation</a>
                                </div>
                            </div>
                            <div>
                                <h4>For Doctors</h4>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <a href="#">List your Practice</a>
                                    <a href="#">Find a Doctor</a>
                                    <a href="#">Find a Doctor</a>
                                </div>
                            </div>
                            <div>
                                <h4>General</h4>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <a href="#">About Us</a>
                                    <a href="#">Terms & Conditions</a>
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Partners</a>
                                    <a href="#">Corporate</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Podcast</a>
                                </div>
                            </div>
                            <div style={{flexBasis:"30%"}}>
                                <h4>How Can We Help You?</h4>
                                <form>
                                    <div>
                                        <input type="text" placeholder="Email" className="form-control"/> 
                                    </div>
                                    <div className="mt-1">
                                        <textarea placeholder="Message" className="form-control" rows={5} ></textarea>
                                    </div>
                                    <div className="mt-1">
                                        <input className="btn btn-primary" type="submit"/>   
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center">
                    <div className="socials">
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                    <div style={{color:"gray"}}>
                        Copyright &copy; 2023 by NowServing All Rights Reserved.
                    </div>
                </div>
            </div>
        </>
     );
}


export default Footer;