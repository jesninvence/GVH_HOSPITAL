import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const Networkinf = () => {
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
                        <a href="" style={{backgroundColor: "#0073ff", color: "white", padding: "10px 5px"}}>Information Technology</a>
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
                            <Link to="/systemdev">
                                <a href="">System Developer</a>
                            </Link>
                            <hr />
                            <Link to="/clientsupport">
                                <a href="">IT Specialist - Client Support Services</a>
                            </Link>
                            <hr />
                                <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>IT Specialist - Network & Infastructure</a>
                            <hr />
                            <Link to="/businessanalyst">
                                <a href="">Business System Analyst</a>
                            </Link>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>IT Specialist – Network & Infrastructure</h6>
                        <p>Information Technology</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The IT Specialist  for Network & Infrastructure is responsible for implementation of network and infrastructure related services, such as, but not limited to installation, maintaining network operations, servers, operating systems, SAN, NAS and back-up of infrastructure related applications and related hardware in Chong Hua Hospital based on set IT standards. S/He also analyzes, diagnoses and solves network & infrastructure related applications; documents results/issues as appropriate.</p>
                        <p>In addition, s/he participates in the creation, review and implementation of IT policies and procedures as necessary. S/He may be required to participate in projects that focuses in improving the quality of service in the identified unit or area.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. Must possess at least a Bachelor’s degree in Engineering (Computer/Telecommunications), Computer Science, Information Technology or equivalent.</p>
                        <p>2. Must have three to five (3-5) years of IT work experience with computer technology in a business environment.</p>
                        <p>3. Experience in IT-related disciplines, such as, but not limited to:</p>
                        <p>     a. Network engineering e.g. Cisco/HP switches</p>
                        <p>     b. Database administration e.g. Sybase, Oracle, MSSQL, MySQL</p>
                        <p>     c. Storage Technologies e.g. EMC2, HP, NetApp, etc.</p>
                        <p>     d. IP-based phone systems (Asterisk-based desired)</p>
                        <p>     e. Microsoft technologies: Windows Server 2012 or later, Active Directory Services, SSCM, SCOM,</p>
                        <p>Exchange Server, Outlook, IIS, SharePoint, Lync, Windows 7/8/10 or later, MS Office Applications, etc.</p>
                        <p>4. Experience with information systems in a 24x7, “real-time” environment supporting a service delivery organization.</p>
                        <p>5. Experience in virtualization technologies (VMWare & Hyper-V) to apply to hardware, software, memory, storage, data and network, an advantage.</p>
                        <p>6. Ability to work with the technical resources, understand customers’ needs and translate these needs into efforts to deliver the final solution; customer service driven with a problem resolution focus.</p>
                        <p>7. Knowledge of applicable data privacy practices and laws as they relate to technology issues</p>
                        <p>8. Must be able to lift 35 lbs. of equipment unassisted</p>
                        <p>9. Basic understanding of hospital standards (JCI, DOH Benchbook, etc.); Knowledge of privacy regulations, ability to maintain patient privacy in daily role and other healthcare standards, an advantage.</p>
                        <p>10. Able to communicate in English, both oral and written; able to communicate in the Visayan or Tagalog dialect.</p>
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
 
export default Networkinf;