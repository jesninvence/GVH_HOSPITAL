import carrer from "../images/carrers.png";
import error from "../images/error1.png";
import {Link} from "react-router-dom";

const Carrers = () => {
    return ( 
        <>
            <div className="carrer">
                <img src={carrer} alt="" width="100%"/>
            </div>
            <br />
            <div className="carrers d-flex position-relative m-2">
                <div className="flex-shrink-0 me-3">
                    <Link to="/carrers">
                        <a href="" style={{backgroundColor: "#0073ff", color: "white", padding: "10px 5px"}}>Medical Ancillary Services</a>
                    </Link>
                </div>
                <div className="flex-shrink-0 me-3">
                    <Link to="/finance">
                        <a href="">Finance</a>
                    </Link>
                </div>
                <div className="flex-shrink-0 me-3">
                    <Link to="/general">
                        <a href="" >General Services</a>
                    </Link>
                </div>
                <div className="flex-shrink-0 me-3">
                    <Link to="/humanres">
                        <a href="">Human Resources</a>
                    </Link>
                </div>
                <div className="flex-shrink-0 me-3">
                    <Link to="/infortech">
                        <a href="">Information Technology</a>
                    </Link>
                </div>
                <div className="flex-shrink-0 me-3">
                    <Link to="/internal">
                        <a href="">Internal Audit</a>
                    </Link>
                </div>
                <div className="flex-shrink-0 me-3">
                    <Link to="/nursingser">
                        <a href="">Nursing Services Office</a>
                    </Link>
                </div>
                <div className="flex-shrink-0 me-3">
                    <Link to="/operational">
                        <a href="">Operational Excellence</a>
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <br /><br /><br /><br /><br />
                        <div className="carrer-link">
                            <Link to="/respithera">
                                <a href="">Respiratory Therapist</a>
                            </Link>
                            <hr />
                            <Link to="/radiologic">
                                <a href="">Radiologic Technologist</a>
                            </Link>
                            <hr />
                            <Link to="pharmacist">
                                <a href="">Pharmacist</a>
                            </Link>
                            <hr />
                            <Link to="/medtech">
                                <a href="">Medical Technologist</a>
                            </Link>
                            <hr />
                            <Link to="/hemaphar">
                                <a href="">Hema-Onco Pharmacist</a>
                            </Link>
                            <hr />
                            <Link to="/dietician">
                                <a href="">Dietician</a>
                            </Link>
                            <hr />
                            <Link to="/clinicalphar">
                                <a href="">Clinical Pharmacist</a>
                            </Link>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                            <img src={error} alt="" />
                    </div>
                </div>
            </div>
            <br /><br />
        </>
     );
}
 
export default Carrers;