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
            <div className="container text-center">
                <div className="row">
                    <div className="col-6 g-3">
                        <div className="card ">
                            <img src={doctors} alt="" />
                            <div className="card-body">
                                <h2>Expert Doctors</h2>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="col-6 g-3">
                        <div className="card">
                            <img src={care} alt="" style={{height: "23rem"}}/>
                            <div className="card-body">
                                <h2>Emergency and Critical Care</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 g-3">
                        <div className="card">
                            <img src={facilities} alt="" style={{height: "23rem"}}/>
                            <div className="card-body">
                                <h2>State-of-the-art Facilities</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 g-3">
                        <div className="card">
                            <img src={program} alt="" />
                            <div className="card-body">
                                <h2>Training Programs</h2>
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