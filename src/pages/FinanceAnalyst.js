import carrer from "../images/carrers.png";
import {Link} from "react-router-dom";

const FinanceAnalyst = () => {
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
                        <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Finance</a>
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
                            <a href="" style={{backgroundColor: "#0073ff", color: "white"}}>Finance Analyst</a>
                            <hr />
                            <Link to="/billingspe">
                                <a href="">Billing Specialist</a>
                            </Link>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <br /><br /><br /><br />
                        <h1>Apply for this position:</h1>
                        <hr />
                        <h6>Finance Analyst</h6>
                        <p>Finance</p>
                        <p>Full-Time</p>
                        <p>Actively Hiring</p>
                        <br />
                        <h6>JOB SUMMARY</h6>
                        <br />
                        <p>The Finance Analyst III supports the analysis and development of the financial information required to successfully support the Hospital’s initiatives and provides coaching and direction more junior finance analysts. This position will work with all levels of the organization to report, monitor and manage key financial and non-financial performance indicators.</p>
                        <br />
                        <h6>QUALIFICATIONS</h6>
                        <br />
                        <p>1. Bachelor’s Degree in Finance, Accounting or related field. Certified Public Accountant (CPA) preferred.</p>
                        <p>2. Strong analytical skills and sound understanding of accounting principles;</p>
                        <p>3. Good working experience with Microsoft Office suite, especially Excel (pivot tables and simple macros);</p>
                        <p>4. Experience creating financial models, including use of database manipulation (e.g. ERP, Excel, etc.);</p>
                        <p>5. Effective written and verbal communication skills with the ability to interpret results in a clear and concise format;</p>
                        <p>6. Strong presence with the ability to interact with senior leadership;</p>
                        <p>7. A minimum 5 years of financial analyst experience with 2 years as both associate and intermediate experience preferred.</p>
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
 
export default FinanceAnalyst;