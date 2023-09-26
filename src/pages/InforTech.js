import carrer from "../images/carrers.png";
import error from "../images/error1.png";
import {Link} from "react-router-dom";

const InforTech = () => {
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
                                <a href="">Systems Developer</a>
                            </Link>
                            <hr />
                            <Link to="/clientsupport">
                                <a href="">IT Specialist - Client Support Services</a>
                            </Link>
                            <hr />
                            <Link to="/networkinf">
                                <a href="">IT Specialist - Network & Infrastructure</a>
                            </Link>
                            <hr />
                            <Link to="/businessanalyst">
                                <a href="">Business Systems Analyst</a>
                            </Link>
                            <hr />
                        </div>
                    </div>
                    <div className="col-8">
                        <img src={error} alt="" />
                    </div>
                </div>
            </div>
            <br /><br />
        </>
     );
}
 
export default InforTech;