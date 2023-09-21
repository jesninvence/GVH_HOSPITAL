import map from "../images/map1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
    return ( 
        <>  
            <br /><br />
            <div className="container text-center">
                <div className="row">
                    <div className="col-6">
                        <div className="card" style={{border: "none"}}>
                            <br />
                            <FontAwesomeIcon icon={faAward} className="exp"/>
                            <br />
                            <h1 className="count">50</h1>
                            <h5>Years of Experience</h5>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card" style={{border: "none"}}>
                            <br />
                            <FontAwesomeIcon icon={faPeopleGroup} className="exp"/>
                            <br />
                            <h1 className="count">28000+</h1>
                            <h5>Patients Annually</h5>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </>
     );
}
 
export default Info;