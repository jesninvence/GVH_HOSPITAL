import {Link} from "react-router-dom";
import carrer from "../images/carrers.png";

const ClinicalPhar = () => {
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
                            <a href=""style={{backgroundColor: "#0073ff", color: "white"}}>Clinical Pharmacist</a>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Clinical Pharmacist</h6>
                        <p>Medical Ancillary Services</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Clinical Pharmacist I provides pharmaceutical care according to standards established by Chong Hua Hospital, the local and international regulatory boards; s/he evaluates individual drug orders for appropriateness, and safety through close coordination with either Clinical Pharmacist II & III or the immediate superior.</p>
                        <p>S/He operates based on deployed pharmacy model aligned with Chong Hua Hospital standards. S/He seeks guidance with the immediate superior in ensuring the appropriateness of all physician medication orders as well as patient drug therapy in accordance with the medical staff approved clinical practice standards. S/He also keeps himself/herself abreast on the up-to-date drug use policies and practices through internal and external training and updates. S/He is responsible in preparing all training materials needed for internal training programs and pharmacology training calibration for all pharmacy personnel.</p>
                        <p>The incumbent may be assigned in PCU or in the main Pharmacy area of the hospital.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. A graduate of Bachelor of Science in Clinical Pharmacy and or a graduate of Bachelor of Science in Pharmacy with relevant education on Clinical Pharmacy.</p>
                        <p>2. Possesses a valid license from the Professional Regulations Commission as a Registered Pharmacist.</p>
                        <p>3. A current member of good standing of the Philippine Pharmacists Association and the Philippine Society of Hospital Pharmacists.</p>
                        <p>4. A minimum of one (1) year relevant work experience in the clinical field.</p>
                        <p>5. Possess a current certificate in Basic Life Support Training.</p>
                        <p>6. Experienced in Microsoft Office applications.</p>
                        <p>7. With excellent customer relations skills.</p>
                        <p>8. Good English communication skills, both oral and written. Can speak the Visayan dialect and/or Tagalog.</p>
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
 
export default ClinicalPhar;