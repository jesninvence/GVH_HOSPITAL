import {Link} from "react-router-dom";
import carrer from "../images/carrers.png";

const Dietician = () => {
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
                            <Link to="/hemaphar">
                                <a href="">Hema-Onco Pharmacist</a>
                            </Link>
                            <hr />
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Dietician</a>
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
                        <h6>Dietician</h6>
                        <p>Medical Ancillary Services</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>Dietitian I plans and delivers nutritional care to patients according to the physician’s diagnoses. S/He screens newly admitted patients to identify those at nutritional risk. This position is responsible for supervising food service personnel and directing and coordinating activities of kitchen workers in preparing and cooking food.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. A Degree in Dietetics or Nutrition and Dietetics.</p>
                        <p>2. Possess a valid license from Professional Regulations Commission as a licensed Dietitian or Nutritionist/Dietitian</p>
                        <p>3. With one to two (1-2) years of relevant work experience is preferred.</p>
                        <p>4. Possess a current certificate in Basic Life Support (BLS) training.</p>
                        <p>5. Knowledgeable in basic Microsoft Office application.</p>
                        <p>6. Demonstrates knowledge sufficient to ensure safe practice:</p>
                        <br />
                        <li>Basic Foods</li>
                        <li>Meal Management</li>
                        <li>Food Chemistry</li>
                        <li>Routine Hospital Diet</li>
                        <li>Cultural and Ethnic Influences in Nutrition</li>
                        <li>Food Plating</li>
                        <li>Food Service Systems</li>
                        <li>Basic Procurement</li>
                        <li>Budget Management</li>
                        <li>Menu development</li>
                        <li>Fluid, Energy and Nutrient Requirement Determination</li>
                        <li>GI Physiology</li>
                        <li>Lipid Absorption and Transport</li>
                        <li>Medical Nutrition Therapy</li>
                        <li>NCP</li>
                        <li>PES statement development</li>
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
 
export default Dietician;