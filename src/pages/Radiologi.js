import {Link} from "react-router-dom";
import carrer from "../images/carrers.png";

const Radiologic = () => {
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
                            <a href="#" style={{backgroundColor: "#0073ff", color: "white"}}>Radiology Technologist</a>
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
                            <Link to="/">
                                <a href="">Clinical Pharmacist</a>
                            </Link>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Radiologic Technologist</h6>
                        <p>Medical Ancillary Services</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The primary role of a radiologic technologist is using x-ray equipment to produce images of tissues, organs, bones, and vessels and administering radiation therapy treatments. The daily tasks of a radiology technologist require precise work and attention to detail as well as adherence to strict safety procedures.</p>
                        <br />
                        <p>S/He regulates the equipment used to expose the patient, develops and documents general radiographic images and necessary pertinent data to PACS for archiving. This position operates equipment safely and maintains A.L.A.R.A. standards while performing all types of procedures at the same time establishes and maintains a good rapport and professional relationship with fellow employees, other departments, and medical staff.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br /><br />
                        <p>1. A graduate of Bachelor of Science in Radiologic Technology.</p>
                        <p>2. Possess a valid license from Professional Regulations Commission as a licensed Radiologic Technologist.</p>
                        <p>3. With one to two (1-2) years of relevant work experience is preferred.</p>
                        <p>4. Knowledgeable in basic Microsoft Office application.</p>
                        <p>5. Excellent English communication skills, both oral and written. Can communicate in the Visayan and/or Tagalog dialect/s.</p>
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
 
export default Radiologic;