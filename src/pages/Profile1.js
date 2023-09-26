import pdtric1 from "../images/pediatric1.jpg";

const Profile1 = () => {
    return ( 
        <>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="profile1" >
                        <div className="row">
                            <div className="col-4">
                                <div className="card ">
                                    <img src={pdtric1} className="flex-shrink-0 me-3" alt="" width="50%"/>
                                    
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <div className="card-body">
                                        <h2>Dr. Emalyn B. Gengup</h2>
                                        <h5>MD,RPh</h5>
                                        <p style={{fontWeight: "500"}}>Specialty</p>
                                        <p>Emergency Medicine</p>
                                        <p>Family Medicine</p>      
                                        <p>General Medicine</p>
                                        <p>Pediatrics</p>
                                        <p>Primary Care</p>
                                        <br />
                                        <p style={{fontWeight: "500"}}>Subspecialty</p>
                                        <p>Emergency Medicine</p>
                                        <p>General OB-GYN</p>
                                        <p>General Pediatrics</p>
                                        <p>General Surgery</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
     );
}
 
export default Profile1;