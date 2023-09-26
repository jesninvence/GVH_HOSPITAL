import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const StaffNurse = () => {
    return ( 
        <>
            <div className="carrer">
                <img src={carrer} alt="" width="100%"/>
            </div>
            <br />
            <div className="carrers d-flex position-relative m-2">
                <div className="flex-shrink-0 me-3">
                    <Link to="/carrers">
                        <a href="">Medical Ancillary Services</a>
                    </Link>
                </div>
                <div className="flex-shrink-0 me-3">
                    <Link to="/finance">
                        <a href="">Finance</a>
                    </Link>
                </div>
                <div className="flex-shrink-0 me-3">
                    <Link to="/general">
                        <a href="">General Services</a>
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
                        <a href="" style={{backgroundColor: "#0073ff", color: "white", padding: "10px 5px"}}>Nursing Services Office</a>
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
                            <Link to="/surgicalass">
                                <a href="">Surgical Assistant 1</a>
                            </Link>
                            <hr />
                                <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Staff Nurse</a>
                            <hr />
                            <Link to="/midwife">
                                <a href="">Midwife</a>
                            </Link>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Staff Nurse</h6>
                        <p>Nursing Services Office</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>A Staff Nurse  provides support to the healthcare team by addressing the psychosocial, physical and general aspects of patient care related to the services of the unit, which will cover a wide patient demographic with assignments and rotations in medical-surgical, neonatal / pediatric, ob-gyn, specialized care, critical care, emergency, out-patient, isolation, medical ancillary units, etc.</p>
                        <p>At this level, the incumbent works on familiarizing him/herself with the services of the unit. S/He also participates in the continuous improvement of quality of service in the department, and performs other duties as directed by the immediate superior.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. A graduate of Bachelor of Science in Nursing (BSN).</p>
                        <p>2. Possess a valid license from the Professional Regulation Commission (PRC) as a Registered Nurse.</p>
                        <p>3. Possess a current certificate in Basic Life Support Training (BLS).</p>
                        <p>4. Current member of good standing of the following associations:</p>
                        <p>a. Philippine Nurses’ Association (PNA)</p>
                        <p>b. Operating Room Nurses Association of the Philippines (ORNAP) – preferred specifically for</p>
                        <p>5. Must be certified in all trainings required for the unit/ area of assignment as stated in the Nursing Training Matrix.</p>
                        <p>6. Possess excellent patient care knowledge and ability.</p>
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
 
export default StaffNurse;