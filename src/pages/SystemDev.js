import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const SystemDev = () => {
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
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>System Developer</a>
                            <hr />
                            <Link to="/clientsupport">
                                <a href="">IT Specialist - Client Support Services</a>
                            </Link>
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
                        <h6>Systems Developer</h6>
                        <p>Information Technology</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Systems Developer  performs the functions needed for an optimal hospital management system development process that include system analysis and design, and the eventual development of system-based solutions tailored to the business requirements of the healthcare institution. Working closely with the “system users” in the organization, s/he carefully assesses the current and future needs of various healthcare teams and recommends the most viable option to adopt ensuring that hospital information systems remain integrated and are strategically aligned with the overall goals of the organization. S/he accordingly sets up streamlined programming workflows to aid in the efficient and effective execution of software development initiatives.</p>
                        <p>S/he also tests, troubleshoots, and resolves issues within a software system’s functionality; performs technical adjustments, installs technical updates; and maintains, analyzes, and evaluates database integrity and security settings. Additionally, s/he maintains detailed accounting of users and security access to system software; audits, modifies, and amends data in systems; monitors and reports on system usage; develops expertise in several business areas and their integration points to other departments or systems.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. Must possess at least a Bachelor’s Degree in Computer Science, Information Technology, Computer / Telecommunications Engineering or equivalent.</p>
                        <p>2. With at least three (3) years’ working experience in computer programming / web development / web services / systems analysis and design.</p>
                        <p>3. With exposure to any of the following Programming Languages: C#, .NET Core, Asp.Net MVC, Blazor, AngularJS., ORM technologies like Entity Framework or Dapper.</p>
                        <p>4. Experience in database technologies, namely, but not limited to: Sybase, Oracle, SQL profiler, MSSQL, MySQL</p>
                        <p>5. Proficient in client scripting using HTML, CSS and Javascript</p>
                        <p>6. Working knowledge with Azure DevOps CI/CD</p>
                        <p>7. Working knowledge of Cloud Computing with Azure</p>
                        <p>8. Added advantage if experience in Powerbuilder</p>
                        <p>9. Knowledge in software development & implementation security standards, accessibility guidelines and data protection practices.</p>
                        <p>10. Proactive and highly organized, with strong time management, analytical, and planning skills. Able to deliver high quality tools and applications within set timelines; customer service driven with a problem-resolution focus.</p>
                        <p>11. Experience in project management is an advantage, e.g., leading teams within set targets and time frames on the creation of, but not limited to, IT projects, strategic design and innovation, etc.</p>
                        <p>12. Healthcare experience is a plus.</p>
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
 
export default SystemDev;