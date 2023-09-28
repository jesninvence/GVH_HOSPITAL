import profile from "../images/elon.jpg";

const PatientsProfile = () => {
    return ( 
        <>
            <div className="container">
                <div className="user-profile">
                    <br />
                    <div className="row">
                        <div className="col-3 g-5">
                            <div className="prolife">
                                <img src={profile} alt="" className="profile-img" />
                                <div className="profile-title">
                                    <h3 className="text-center">Elon Musk</h3>
                                </div>
                                <div className="more-info">
                                    <button>Account</button>
                                    <button>Password</button>
                                    <button>Security</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 g-5">
                            <div className="account-details">
                                <p>First Name:</p>
                                <p className="name">Elon</p>
                                <br />
                                <p>Email:</p>
                                <p className="name">elonmusk@gmail.com</p>
                                <br />
                                <p>Address:</p>
                                <p className="name">Manila</p>
                                <br />
                                <p>Birth Date:</p>
                                <p className="name">06/12/1978</p>
                            </div>
                        </div>
                        <div className="col-4 g-5">
                            <div className="acount-details">
                                <p>Last Name:</p>
                                <p className="name">Musk</p>
                                <br />
                                <p>Phone Number:</p>
                                <p className="name">+63 947451321</p>
                                <br />
                                <p>Zip Code:</p>
                                <p className="name">1000</p>
                                <br />
                                <p>Gender:</p>
                                <p className="name">Male</p>
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-8">
                            <button className="update">Update Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default PatientsProfile;