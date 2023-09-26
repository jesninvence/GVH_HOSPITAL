import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const SecurityOfficer = () => {
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
                        <a href="" style={{backgroundColor: "#0073ff", color: "white", padding: "10px 5px"}}>General Services</a>
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
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Security Officer</a>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Security Officer</h6>
                        <p>General Services</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Security Officer II will be responsible for all issues related to the security and protection of the company’s employees, executives, facilities, patients and visitors which include but are not limited to: implementing the Security Management Plan, oversight of visitors, security screening, security risk assessments, security technology implementation and maintenance within established guidelines.</p>
                        <p>S/He will facilitate protection and resolution of theft, threats and other situations, that may endanger the organization. S/He will be accountable for the execution and design improvements of the company’s security programs, security policies and procedures.</p>
                        <p>Additionally, s/he also monitors and evaluates security plans, focuses on prevention, results and assesses the attainment of outcomes.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. A Bachelor’s degree with a major in law enforcement, criminology or a closely related field.</p>
                        <p>2. With three (3) years’ work experience in Loss Control Management and criminal investigation.</p>
                        <p>3. Preferably a Certified Security Professional</p>
                        <p>4. Knowledge in weapons and their use.</p>
                        <p>5. Knowledge of pertinent national and local laws, codes, and regulations.</p>
                        <p>6. Knowledge of the principles, methods, and techniques of forensic science and crime scene investigation.</p>
                        <p>7. In-depth knowledge in R.A. 5487-AN ACT TO REGULATE THE ORGANIZATION AND OPERATION OF PRIVATE DETECTIVE, WATCHMEN OR SECURITY GUARDS AGENCIES.</p>
                        <p>8. Possesses leadership qualities to aid in building, maintaining, and elevating relationships with CHH internal and external stakeholders and drive the achievement of business strategies and results. Qualities that would include, but are not limited to:</p>
                        <p>· Integrity</p>
                        <p>· Effective Communications</p>
                        <p>· Interpersonal relationships</p>
                        <p>· Persuasion</p>
                        <p>· Adaptability</p>
                        <p>· Teamwork</p>
                        <p>· Sound administrative principles</p>
                        <p>9. Proficient in computer software applications and systems, including, but not limited to: Microsoft Word, Excel, Outlook and PowerPoint and Internet-based search and research.</p>
                        <p>10. Excellent English communication skills, both oral and written. Preferably, can communicate in Visayan and Tagalog language.</p>
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
 
export default SecurityOfficer;