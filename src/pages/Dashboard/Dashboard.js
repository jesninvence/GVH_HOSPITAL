import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell , faHouse , faUserDoctor , faUserGroup , faCalendar , faPrescriptionBottle , faBox , faFilter , faInbox , faMessage , faMagnifyingGlass , faRightFromBracket , faUser} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useRef , useState } from "react";
import axios from "axios";
import { getUserType } from "../../components/GetUser";
<<<<<<< HEAD
import logo from "../../images/capstonelogo.png";
=======
>>>>>>> master


const Dashboard = ({content}) => {
    let login_page = useRef();
    let cru = localStorage.getItem("cru");

    let [availableLinks,setAvailableLinks] = useState([]);

    useEffect(
        () => {
            if (!cru) {
                login_page.current.click();
                return;
            } 

            getUserType().then(response => {
                let type = response;
                console.log(type)
                switch(type) {
                    case "1" : 
                        setAvailableLinks([
                            ["Dashboard",faHouse],
                            ["Doctors",faUserDoctor],
                            ["Patients",faUserGroup],
                            ["Appointments",faCalendar],
                            ["Queue",faUserGroup],
                            ["Pharmacy",faPrescriptionBottle],
                            ["Inventory",faBox],
                            ["Laboratory",faFilter],
                            ["Inbox",faInbox],
                            ["Chat",faMessage],
                            ["Logout",faRightFromBracket]
                        ]);
                        break;
                    case "2":
                        setAvailableLinks([
                            ["Profile",faUser],
                            ["Appointments",faCalendar],
                            ["Inbox",faInbox],
                            ["Chat",faMessage],
                            ["Logout",faRightFromBracket]
                        ]);
                        break;
                    case "4":
                        setAvailableLinks([
                            ["Profile",faUser],
                            ["Appointments",faCalendar],
                            ["Queue",faUserGroup],
                            ["Inbox",faInbox],
                            ["Chat",faMessage],
                            ["Logout",faRightFromBracket]
                        ]);
                        break;
                }
            });

        },[]
    );

    return (
        <>
            <div className="container-fluid px-5" id="dashboard">
                <NavigationBar></NavigationBar>
                <div className="row mt-3">
                    <div className="col-2">
<<<<<<< HEAD
                        <Sidebar cru={cru} sideLink={availableLinks}></Sidebar>
=======
                        <Sidebar sideLink={availableLinks}></Sidebar>
>>>>>>> master
                    </div>
                    <div className="col-10 border">
                        {content}
                    </div>
                </div>
            </div>
            <Link to="/login" ref={login_page}></Link>
        </>
    );
}

function NavigationBar() {
    const [profileImage,setProfileImage] = useState('');
    useEffect(() => {
        let cru = localStorage.getItem("cru");
        let sc = localStorage.getItem("sc");    
        let data = new FormData();
        data.append("cru",cru);
        data.append("sc",sc);
<<<<<<< HEAD
        data.append("function","1");
=======
>>>>>>> master
        axios.post("http://localhost/GVH_PHP/get_user.php",data)
        .then(response => {
            if (typeof response.data == "object") {
                setProfileImage(response.data['profile_image']);
            } 
        });
    },[]);
    return (
        <>
            <div className="d-flex justify-content-between py-4">
                <div className="d-flex gap-5 align-items-center">
<<<<<<< HEAD
                <section className="logo">
                    <Link to="/">
                        <img src={logo} alt="" width="100px" />
                    </Link>
                </section>
=======
                    <a style={{background:"blue",padding:".5rem 1rem"}} href="#">LOGO</a>
>>>>>>> master
                    <Link className="btn btn-primary" to="/">Landing Page</Link>
                    <div>Application</div>
                </div>
                <div className="d-flex gap-4 align-items-center">
                    <div className="border d-flex align-items-center py-1 px-3" style={{borderRadius:"50px"}}>
                        <input style={{display:"inline-block",outline : "none",marginRight:".5rem"}} type="text" placeholder="Search..."/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    <a><FontAwesomeIcon style={{fontSize:"1.2rem"}} icon={faBell} /></a>
                    <button>
                        <div style={{width:"2.5rem",height:"2.5rem",border:"1px solid rgba(0,0,0,0.5)",borderRadius:"50%",overflow:"hidden"}}>
                            <img src={profileImage} />
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}



<<<<<<< HEAD
function Sidebar({sideLink,cru}) {
    const [totalInbox,setTotalInbox] = useState(0);

    useEffect(() => {
        const data = new FormData();
        data.append("target","inboxes");
        data.append("attribute","user_id");
        data.append("value",cru);
        data.append("addition"," AND `viewed` = 0");

        axios.post("http://localhost/GVH_PHP/get_total.php",data)
        .then(response => {
            if (!isNaN(response.data)) setTotalInbox(response.data);
        })
    },[]);

=======
function Sidebar({sideLink}) {
>>>>>>> master
    return (
        <>
            <div className="d-flex flex-column sidebar">
                    {
                        sideLink.map( ([name,icon]) =>{
<<<<<<< HEAD
                                let result = <Link to={name == "Dashboard" || name == "Profile" ? "/user" : "/user/" + name.toLowerCase() }>
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <FontAwesomeIcon icon={icon} />
                                                        </div>
                                                        <div className="col-10">
                                                            {name}
                                                        </div>
                                                    </div>
                                            </Link>
                                        console.log(totalInbox)
                                if (name == "Inbox" && totalInbox > 0) {
                                    result = <Link className="dashSideLink" data-totalInbox={totalInbox} to={name == "Dashboard" || name == "Profile" ? "/user" : "/user/" + name.toLowerCase() }>
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <FontAwesomeIcon icon={icon} />
                                                        </div>
                                                        <div className="col-10">
                                                            {name}
                                                        </div>
                                                    </div>
                                            </Link>
                                }
                                return(result);
=======
                                return(
                                    <Link to={name == "Dashboard" || name == "Profile" ? "/user" : "/user/" + name.toLowerCase() }>
                                        <div className="row">
                                            <div className="col-2">
                                                <FontAwesomeIcon icon={icon} />
                                            </div>
                                            <div className="col-10">
                                                {name}
                                            </div>
                                        </div>
                                </Link>
                                );
>>>>>>> master
                        })
                    }
            </div>
        </>
    );
}

export default Dashboard;