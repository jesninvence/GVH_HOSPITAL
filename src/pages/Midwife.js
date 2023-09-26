import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const Midwife = () => {
    return ( 
        <>
            <div className="carrer">
                <img src={carrer} alt="" width="100%"/>
            </div>
            <br />
            <div className="carrers d-flex position-relative m-2">
                <div className="flex-shrink-0">
                    <Link to="/carrers">
                        <a href="">Medical Ancillary Services</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/finance">
                        <a href="">Finance</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/general">
                        <a href="">General Services</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/humanres">
                        <a href="">Human Resources</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/infortech">
                        <a href="">Information Technology</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/internal">
                        <a href="">Internal Audit</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/nursingser">
                        <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Nursing Services Office</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
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
                            <Link to="/surgicalass">
                                <a href="">Surgical Assistant 1</a>
                            </Link>
                            <hr />
                            <Link to="/staffnurse">
                                <a href="">Staff Nurse</a>
                            </Link>
                            <hr />
                                <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Midwife</a>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Midwife</h6>
                        <p>Nursing Services Office</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>A Midwife in the Nursery provides direct and indirect patient care in the neonatal setting. She supports the healthcare team by communicating with the Doctors / Head Nurse / co-workers, as appropriate about changes in the patient’s clinical condition and symptomatology.</p>
                        <p>She responds quickly and accurately to the changes in the patient’s condition and contributes to the maintenance of a safe and hygienic environment by ensuring the order and cleanliness of the unit.</p>
                        <p>Additionally, she is able to perform general midwife duties in all departments with adequate supervision.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. A graduate of Bachelor of Science in Midwifery.</p>
                        <p>2. Possess a valid license from the Professional Regulation Commission as a Registered Midwife.</p>
                        <p>3. Current member of good standing of Integrated Midwife Association of the Philippines (IMAP).</p>
                        <p>4. Possesses a current Heart Savers certification.</p>
                        <p>5. Possess excellent patient care knowledge and ability.</p>
                        <p>6. Excellent customer / patient relation skills.</p>
                        <br /><br />
                        <h6>FOR MORE INFORMATION, YOU MAY CONTACT US</h6>
                        <br />
                        <p>GVH Medical Hospital</p>
                        <p>(032) 255 8000 Loc. 764889</p>
                        <p>hrd@gvhmedical.com.ph</p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
     );
}
 
export default Midwife;