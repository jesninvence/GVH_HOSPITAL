import {Link} from "react-router-dom";
import carrer from "../images/carrers.png";

const Medtech = () => {
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
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Medical Technologist</a>
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
                        <h6>Medical Technologist</h6>
                        <p>Medical Ancillary Services</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Medical Technologist  is responsible for performing and observing test on patient’s specimens and correctly recording all results based on the department’s standard operating procedures and policies. S/He will be assigned in at least three (3) different sections of the laboratory and should be able to use and maintain all laboratory equipment in these areas correctly. S/He is also responsible for maintaining PAR and communicating with other department’s physicians and the hospital’s administration for critical results. S/He is also be responsible for recognizing results or problems that require referral to the Pathologist.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. A Degree in Bachelor of Science in Medical Technology.</p>
                        <p>2. Professional License from Professional Regulatory Commission.</p>
                        <p>3. A member of good standing of the Philippine Association of Medical Technologist (PAMET).</p>
                        <p>4. Possess a current certificate in Basic Life Support (BLS) training.</p>
                        <p>5. Knowledgeable in basic Microsoft Office application.</p>
                        <p>6. Excellent in patient and customer relation skills.</p>
                        <p>7. Knowledgeable in basic Microsoft Office application and keen on details.</p>
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
 
export default Medtech;