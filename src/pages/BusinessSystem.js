import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const BusinessSystem = () => {
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
                        <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Information Technology</a>
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
                            <Link to="/systemdev">
                                <a href="">System Developer</a>
                            </Link>
                            <hr />
                            <Link to="/clientsupport">
                                <a href="">IT Specialist - Client Support Services</a>
                            </Link>
                            <hr />
                            <Link to="/networkinf">
                                <a href="">IT Specialist - Network & Infastructure</a>
                            </Link>
                            <hr />
                                <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Business System Analyst</a>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Business Systems Analyst</h6>
                        <p>Information Technology</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Business Systems Analyst  supports business changes and corresponding software implementations in the organization and provides guidance to more junior analysts. S/He also provides data analysis and management reporting requirements. This position strategizes with key stakeholders, leaders and end users in the organization to determine business requirements and transform them into information technology system requirements.</p>
                        <p>In addition, this position facilitates communication between process owners/ process champions in the system modification or projects. S/He also serves as lead in project development and/or oversight in the absence of the immediate superior. S/He participates in the continuous quality improvement of service, safety procedures and activities.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. A Bachelor’s degree in Accounting or related filed, OR Computer Engineering, Computer Science, Information Technology or equivalent with strong financial management experience.</p>
                        <p>2. Must have at least five (5) years of working experience in a related environment; inclusive of two (2) years in specialist role.</p>
                        <p>3. With proven experience in data analysis and proven knowledge on financial and accounting concepts and processes.</p>
                        <p>4. Basic understanding of information technology and business concepts.</p>
                        <p>5. Adept at SQL queries, report writing and presenting findings, with data modelling and data mining skills.</p>
                        <p>6. Effective written and verbal communication skills required to document business processes and convert to system requirements.</p>
                        <p>7. With proven experience in influencing good results and the ability to interact with senior leadership.</p>
                        <p>8. Knowledge and experience in project management is preferred.</p>
                        <p>9. Good working experience with Microsoft Office suite, especially in Excel (pivot tables and simple macros).</p>
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
 
export default BusinessSystem;