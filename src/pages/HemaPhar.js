import {Link} from "react-router-dom";
import carrer from "../images/carrers.png";

const HemaPhar = () => {
    return ( 
        <>  
            <div className="carrer">
                <img src={carrer} alt="" width="100%"/>
            </div>
            <br />
            <div className="carrers d-flex position-relative m-2">
                <div className="flex-shrink-0">
                    <Link to="/carrers">
                        <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Medical Ancillary Services</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/finance">
                        <a href="">Finance</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/general">
                        <a href="" >General Services</a>
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
                        <a href="">Nursing Services Office</a>
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
                            <Link to="/respithera">
                                <a href="">Respiratory Therapist</a>
                            </Link>
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
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Hema-Onco Pharmacist</a>
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
                        <h6>Hema-Onco Pharmacist</h6>
                        <p>Medical Ancillary Services</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Oncology Pharmacist is responsible in the day-to-day operation of the Oncology Pharmacy; follows the established Hospital standards and protocol in handling, storage and preparation of Chemotherapeutic Agents and medicines. Coordinates with the immediate superior or senior hema-onco pharmacist in the execution of related services in the department.</p>
                        <p>The incumbent is rotated in different functional areas of the pharmacy services to establish skills and proficiency level needed to perform clinical functions especially in hema-onco. S/He participates in the implementation of safety initiatives and programs in the continuous quality improvement of service of the department.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. A graduate in Bachelor of Science in Pharmacy.</p>
                        <p>2. Possess a valid license from the Professional Regulations Commission as a Registered Pharmacist.</p>
                        <p>3. A current member of good standing of the Philippine Pharmacists Association and the Philippine Society of Hospital Pharmacists.</p>
                        <p>4. With at least one (1) year hospital pharmacy experience in an acute or tertiary care hospital; experience as Oncology Pharmacist is preferred.</p>
                        <p>5. With training in Safe Handling of Hazardous Drugs and Aseptic Technique Manipulation on Sterile Preparation or equivalent training and passed the standard competency evaluation is preferred.</p>
                        <p>6. Should have good knowledge in Quality Assurance and continuous quality improvement.</p>
                        <p>7. Keen on details.</p>
                        <p>8. With excellent customer relations skills.</p>
                        <p>9. Experienced in Microsoft Office applications.</p>
                        <p>10. Good English communication skills, both oral and written. Can speak the Visayan dialect and/or Tagalog.</p>
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
 
export default HemaPhar;