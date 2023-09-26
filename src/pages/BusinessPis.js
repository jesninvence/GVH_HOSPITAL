import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const BusinessPis = () => {
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
                        <a href="">Nursing Services Office</a>
                    </Link>
                </div>
                <div className="flex-shrink-0">
                    <Link to="/operational">
                        <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Operational Excellence</a>
                    </Link>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <br /><br /><br /><br /><br />
                        <div className="carrer-link">
                                <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Business Process Improvement Specialist</a>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Business Process Improvement Specialist</h6>
                        <p>Operational Excellence</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Business Process Improvement Specialist II is responsible in identifying and improving the outcomes of Chong Hua Hospital’s operational processes to improve efficiencies, reduce cost and increase customer satisfaction.</p>
                        <p>S/He is also responsible in the deployment of the basic and some advanced lean management tools across all parts of the organization. As an agent of change, the Specialist will serve as a catalyst to create a culture that continuously strives for operational excellence and embraces the principles of process improvement.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. Bachelor’s degree in Engineering, Business, Nursing, or other clinical discipline required. A Masters degree a plus.</p>
                        <p>2. A minimum of three (3) years of proven experience in Process Improvement using Lean and Six Sigma is required; Healthcare experience is a plus.</p>
                        <p>3. Certified or has gained practical experience in:</p>
                        <p>a. Lean – Six Sigma Methodology</p>
                        <li>b. Practical Problem Solving Process</li>
                        <p>4. Experienced and a passionate process improvement leader and educator (formal or informal), with proven problem solving experience.</p>
                        <p>5. Strong communication, facilitation, and collaboration skills with demonstrated ability to lead multidisciplinary groups.</p>
                        <p>6. Demonstrated understanding and application of basic software: MS Word, PowerPoint, Excel, Visio and Minitab.</p>
                        <p>7. Certified Professional in Healthcare Quality (CPHQ) is a preferred complement.</p>
                        <p>8. Good command of the English language.</p>
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
 
export default BusinessPis;