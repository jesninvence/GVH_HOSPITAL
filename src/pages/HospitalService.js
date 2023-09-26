import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faFlaskVial } from "@fortawesome/free-solid-svg-icons";
import { faLungs } from "@fortawesome/free-solid-svg-icons";
import { faXRay } from "@fortawesome/free-solid-svg-icons";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { faCapsules } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Srvcs from "../images/hwallpaper4.png";

const HospitalService = () => {
    return ( 
        <>
            <div className="servWall">
                <img src={Srvcs} alt="" width="100%"/>
            </div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-8">
                                <p>
                                    Here at GVH Medical Hospital, we offer most comprehensive health
                                    care services at affordable costs.
                                </p>
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
                    <div className="col-3 g-3">
                        <Link to="/sleepdis" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faBed} className="icon"/>
                                <div className="card-body">
                                    <h5>Center for Sleep Disorder</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/eyeins" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faEye} className="icon"/>
                                <div className="card-body">
                                    <h5>Eye Institute</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/foodservices" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faCarrot} className="icon"/>
                                <div className="card-body">
                                    <h5>Food & Nutrition Services</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/neurophy" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faUser} className="icon"/>
                                <div className="card-body">
                                    <h5>Neurophysiology</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/nursing" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faUserNurse} className="icon"/>
                                <div className="card-body">
                                    <h5>Nursing Services</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/pharmacy" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faCapsules} className="icon"/>
                                <div className="card-body">
                                    <h5>Pharmacy</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/wellness" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faDumbbell} className="icon"/>
                                <div className="card-body">
                                    <h5>Wellness Center</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-3 g-3">
                        <Link to="/endoscopy" style={{textDecoration: "none"}}>
                            <div className="card srvcs">
                                <br />
                                <FontAwesomeIcon icon={faPills} className="icon"/>
                                <div className="card-body">
                                    <h5>Endoscopy Services</h5>
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
 
export default HospitalService;