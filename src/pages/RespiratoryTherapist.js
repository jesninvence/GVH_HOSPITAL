import { Link } from "react-router-dom";
import carrer from "../images/carrers.png";

const RespiratoryTherapist = () => {
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
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Respiratory Therapist</a>
                            <hr />
                            <Link to="/radiologic">
                                <a href="">Radiologic Technologist</a>
                            </Link>
                            <hr />
                            <Link to="/pharmacist">
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
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Respiratory Therapist</h6>
                        <p>Medical Ancillary Services</p>
                        <p>Full-Time</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Respiratory Therapist  meets patient's goals and needs and provides quality care by conducting pulmonary function tests; assessing and interpreting evaluations and test results; determining respiratory therapy treatment plans in consultation with physicians and by prescription.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br /><br />
                        <h6>1. A graduate of Bachelor of Science in Respiratory Therapy.</h6>
                        <br />
                        <h6>2. With one to two (1-2) years of relevant work experience is preferred.</h6>
                        <br />
                        <h6>3. Demonstrates knowledge sufficient to ensure safe practice:</h6>
                        <br />
                        <li>Patient Assessment</li>
                        <li>Aerosol Drugs Pharmacology</li>
                        <li>Pulmonary anatomy</li>
                        <li>Pulmonary diseases</li>
                        <li>Mechanical Ventilation</li>
                        <li>Pulmonary Function Test</li>
                        <li>Mechanical Ventilation</li>
                        <li>ABG</li>
                        <li>PFT</li>
                        <li>Bronchoscopy</li>
                        <li>Basic Life Support</li>
                        <br />
                        <h6>4. Knowledgeable in basic Microsoft Office application.</h6>
                        <br /><br /><br /><br />
                        <h6>FOR MORE INFORMATION, YOU MAY CONTACT US</h6>
                        <br />
                        <p>GVH MEDICAL HOSPITAL</p>
                        <p>(032) 255 8000 Loc. 76472</p>
                        <p>hrd@gvhmedical.com.ph</p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
     );
}
 
export default RespiratoryTherapist;