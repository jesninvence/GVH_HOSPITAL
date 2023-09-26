import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const RiskSpecialist = () => {
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
                        <a href="" style={{backgroundColor: "#0073ff", color: "white", padding: "10px 5px"}}>Internal Audit</a>
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
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Risk Management Specialist</a>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Risk Management Specialist</h6>
                        <p>Internal Audit</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Risk Management Officer shall have the primary responsibility of assisting the Internal Audit Manager in the establishment and implementation of the Enterprise Risk Management System of Chong Hua Hospital. S/he shall provide support to Chong Hua Hospital’s risk initiatives in the planning, designing and ensuring execution of overall risk management processes such as:</p>
                        <li>Operational- Risks resulting from inadequate or failed internal processes, people or systems that affect internal operations</li>
                        <li>Clinical/Patient Safety- Risks associated with the delivery of care to patients, residents, and other healthcare customers.</li>
                        <li>Strategic- Risks associated with brand, reputation, competition, failure to adapt to changing times, health reform, or customer priorities.</li>
                        <li>Financial- Decisions that affect financial sustainability, access to capital or external financial ratings or the timing and recognition of revenue and expenses.</li>
                        <li>Human Capital- Refers to the organization’s workforce.</li>
                        <li>Legal/Regulatory- Risks in failure to identify, manage and monitor legal, regulatory and statutory mandates.</li>
                        <li>Hazard- Covers assets and their value.</li>
                        <p>S/he shall have the secondary responsibilities for risks reporting and quantitative analysis and shall also be expected to contribute to the delivery of the Enterprise Risk Framework in accordance with the strategic direction of Chong Hua Hospital.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1) Bachelor’s degree in Business Administration, Finance or Accounting</p>
                        <p>2) Master’s degree in Management is preferred</p>
                        <p>3) At least five (5) years’ experience in business or finance risk management</p>
                        <p>4) Exposure with an ISO certified environment is an advantage</p>
                        <p>5) Significant experience in the use of risk quantitative technique</p>
                        <p>6) A proven ability to conduct research, data analysis, and project analysis</p>
                        <p>7) High ethical standards and an uncompromising sense of integrity</p>
                        <p>8) Attention to detail, excellent interpersonal and communication skills</p>
                        <p>9) Knowledge of business and management principles involved in strategic planning, resource allocation, and coordination of people and resources</p>
                        <p>10)Computer and systems knowledge (MS Office, Excel and Outlook, Library system)</p>
                        <p>11)Excellent verbal and written English communication skills</p>
                        <p>12)Ability to communicate in Cebuano and Tagalog</p>
                        <p>13)Know how in research and information gathering systems and methods</p>
                        <p>Technical Competencies</p>
                        <p>1) Ability to effectively apply statistical concepts to analysis</p>
                        <p>2) Ability to demonstrate strong critical thinking skills</p>
                        <p>3) Ability to lay out operational plans and organize execution of activities</p>
                        <p>4) Ability to analyze problems and utilize available resources for decision making</p>
                        <p>5) Ability to innovate</p>
                        <p>Leadership Competencies</p>
                        <p>1) Strategic Focus</p>
                        <p>2) Inspiring Trust</p>
                        <p>3) Facilitating Change</p>
                        <p>4) Negotiating</p>
                        <p>5) Developing Others</p>
                        <p>6) Fostering Creativity</p>
                        <p>Core Competencies</p>
                        <p>1) Strong Client Focus</p>
                        <p>2) Drive for Continuous Development</p>
                        <p>3) Excellent Communication Skills</p>
                        <p>4) Teamwork</p>
                        <p>5) Effective Technical Writing and Presentation Skills</p>
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
 
export default RiskSpecialist;