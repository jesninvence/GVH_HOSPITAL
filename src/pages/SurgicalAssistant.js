import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const SurgicalAssistant = () => {
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
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Surgical Assistant 1</a>
                            <hr />
                            <Link to="/staffnurse">
                                <a href="">Staff Nurse</a>
                            </Link>
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
                        <h6>Surgical Assistant I</h6>
                        <p>Nursing Services Office</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>A Surgical Assistant provides aid in exposure, hemostasis, and other intraoperative technical functions that help the surgeon carry out a safe operation with optimal results for the patient. In addition to intraoperative duties, the surgical assistant also performs preoperative and postoperative duties to better facilitate proper patient care.</p>
                        <p>The surgical assistant performs these functions: pre, intra, post-operation phases always under the direction and supervision of the surgeon and in accordance with hospital policy and appropriate laws and regulations.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. A graduate of a 4-year college course, preferably paramedical or allied medical course.</p>
                        <p>2. Possesses a current certificate in Basic Life Support Training (BLS).</p>
                        <p>3. Must undergo basic Infection Control course.</p>
                        <p>4. Must undergo the Operating Room’s Orientation.</p>
                        <p>5. Knowledgeable in basic Microsoft Office application.</p>
                        <p>6. Possesses excellent patient/customer relation skills.</p>
                        <p>7. Excellent English communication skills, both oral and written. Preferably, can communicate in Visayan and Tagalog language.</p>
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
 
export default SurgicalAssistant;