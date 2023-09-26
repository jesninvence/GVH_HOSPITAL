import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const ClientSupport = () => {
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
                                <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>IT Specialist - Client Support Services</a>
                            <hr />
                            <Link to="/networkinf">
                                <a href="">IT Specialist - Network & Infastructure</a>
                            </Link>
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
                        <h6>IT Specialist - Client Support Services</h6>
                        <p>Information Technology</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The IT Specialist II for Client Support Services is responsible for providing advanced technical services and in maintaining the network and communication systems of Chong Hua Hospital that includes analyzing, troubleshooting and repairing of IT equipment, servers and data. S/He also installs and configures networks and computer systems, diagnoses hardware/software faults and solves technical and application problems and documents results/issues as appropriate.</p>
                        <p>Also, s/he consults with senior team members and various leaders to improve the quality of client support services; s/he also participates in the creation and implementation of policies and processes in the department.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. Must possess at least a Bachelor’s degree in Engineering (Computer/Telecommunications), Computer Science, Information Technology or equivalent.</p>
                        <p>2. Must have at least three (3) years of IT work experience with computer technology in a business environment.</p>
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
 
export default ClientSupport;