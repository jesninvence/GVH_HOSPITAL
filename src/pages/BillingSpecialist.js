import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const BillingSpecialist = () => {
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
                        <a href="" style={{backgroundColor: "#0073ff", color: "white", padding: "10px 5px"}}>Finance</a>
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
                            <Link to="/financeana">
                                <a href="">Finance Analyst</a>
                            </Link>
                            <hr />
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Billing Specialist</a>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Billing Specialist</h6>
                        <p>Finance</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Billing Specialist  is responsible for providing support to senior Billing Specialists in managing patient billing and ensuring that procedures are billed according matching systems data / documents. S/He assists reviewing and updating client statements as necessary, scanning documents to patient accounts, and reviewing correspondence and following up as needed.</p>
                        <p>S/He supports the operations of the unit by following established protocol, policies and procedures, and is also responsible for coordinating with the applicable concerned persons / department in the conduct of his / her duty.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. Bachelor’s degree in Finance/Accounting or any business-related course with accounting units.</p>
                        <p>2. At least one (1) year of related work experience, is an advantage, but not required.</p>
                        <p>3. Knowledge of medical billing & collection practices and other third party operating procedures and practices is an advantage.</p>
                        <p>4. Excellent interpersonal skills.</p>
                        <p>5. Knowledgeable in basic Microsoft Office application.</p>
                        <p>6. Must be well organized and detail–oriented.</p>
                        <p>7. Proficient English communication skills, both oral and written. Preferably, can communicate in Visayan and Tagalog language.</p>
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
 
export default BillingSpecialist;