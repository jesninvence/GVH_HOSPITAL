import doctors from "../images/doctorf3.webp";
import doctor1 from "../images/pediatric1.jpg";
import doctor2 from "../images/doctor12.webp";
import doctor3 from "../images/doctorm4.jpg";
import {Link} from "react-router-dom";

const MeetOurDoctos = () => {
    return ( 
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Meet Our Doctors</h1>
                    <p>What makes GVH the best Medical hospital for you is our team of renowned experts across different specialties who work together to give you the care you deserve. It is home to some of the best specialists in the country.</p>
                </div>
            </div>
        </div>
        <br /><br />
        <div className="container text-center">
            <div className="row">
                <div className="col-3">
                    <div className="card">
                        <img src={doctors} alt="" style={{height:"100%"}}/>
                        <div className="card-body">
                            <h5>Dr. Sandra N. Shessh</h5>
                            <p>Pediatrics</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src={doctor1} alt=""/>
                        <div className="card-body">
                            <h5>Dr. Emalyn B. Gengup</h5>
                            <p>Pediatrics</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src={doctor2} alt="" style={{height:"100%"}}/>
                        <div className="card-body">
                            <h5>Dr. Anthony F. Owshi</h5>
                            <p>Surgery</p>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card">
                        <img src={doctor3} alt="" style={{height:"100%"}}/>
                        <div className="card-body">
                            <h5>Dr. Frank P. Ohdamn</h5>
                            <p>Surgery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br /><br />
        <div className="container text-center">
            <div className="row">
                <div className="col-12">
                    <Link to="/doctor">
                        <button className="more">See All</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default MeetOurDoctos;