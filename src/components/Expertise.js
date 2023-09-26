import doctors from "../images/wallpaperc9.jpg";
import care from "../images/criticalc1.jpg";
import facilities from "../images/facilities.jpg";
import program from "../images/program.jpg";

const Expertise = () => {
    return ( 
        <>  
            <br /><br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Our Expertise</h1>
                        <p>World class, state-of-the-art facilities, paired with an efficient and compassionate medical staff dedicated to bringing you a comprehensive, cost-efficient patient experience designed for your specific needs.</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-6 g-3">
                        <div className="card">
                            <img src={doctors} className="card-img" alt="" style={{height:"27rem"}}/>
                            <div className="card-img-overlay">
                                <h3 className="card-title">Expert Doctors</h3>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-6 g-3">
                        <div className="card">
                            <img src={care} className="card-img" alt="" style={{height:"27rem"}}/>
                            <div className="card-img-overlay">
                                <h3 className="card-title">Emergency and Critical Care</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 g-3">
                        <div className="card">
                            <img src={facilities} className="card-img" alt="" style={{height:"27rem"}}/>
                            <div className="card-img-overlay">
                                <h3 className="card-title">State-of-the-art Facilities</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 g-3">
                        <div className="card">
                            <img src={program} className="card-img" alt="" style={{height:"27rem"}}/>
                            <div className="card-img-overlay">
                                <h3 className="card-title">Training Programs</h3>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
            <br /><br /><br /><br />
        </>
     );
}
 
export default Expertise;