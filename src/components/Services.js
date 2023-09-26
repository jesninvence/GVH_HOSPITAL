import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlaskVial } from "@fortawesome/free-solid-svg-icons";
import { faLungs } from "@fortawesome/free-solid-svg-icons";
import { faXRay } from "@fortawesome/free-solid-svg-icons";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Services = () => {
    return ( 
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-8">
                                <h1>Our Hospital Services</h1>
                                <p>
                                    Here at GVH Medical Hospital, we offer most comprehensive health
                                    care services at affordable costs.
                                </p>
                            </div>
                            <div className="col-4 text-end align-self-center">
                                <Link to="/drservices">
                                    <button className="more">See All</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="container text-center">
                <div className="row">
                    <div className="col-3 g-3">
                        <Link to="/doctor" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faUserDoctor} className="icon"/>
                                <div className="card-body">
                                    <h5>Expert Doctor</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/laboratory" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faFlaskVial} className="icon"/>
                                <div className="card-body">
                                    <h5>Laboratory Services</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/renalunit" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faLungs} className="icon"/>
                                <div className="card-body">
                                    <h5>Renal Unit</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/radiology" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faXRay} className="icon"/>
                                <div className="card-body">
                                    <h5>Radiology</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/emergency" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faTruckMedical} className="icon"/>
                                <div className="card-body">
                                    <h5>Emergency/Acute Care</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/heartins" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faHeartPulse} className="icon"/>
                                <div className="card-body">
                                    <h5>Heart Institute</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/healthunit" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faNotesMedical} className="icon"/>
                                <div className="card-body">
                                    <h5>Executive Health Unit</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/cancercent" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faHandHoldingMedical} className="icon"/>
                                <div className="card-body">
                                    <h5>Cancer Center</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
     );
}
 
export default Services;