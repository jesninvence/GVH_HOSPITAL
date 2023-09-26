import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell , faHouse , faUserDoctor , faUserGroup , faCalendar , faPrescriptionBottle , faBox , faFilter , faInbox , faMessage , faMagnifyingGlass , faRightFromBracket , faUser} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useRef , useState } from "react";
import axios from "axios";
import { getUserType } from "../../components/GetUser";
import logo from "../../images/capstonelogo.png";


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
                        <Sidebar sideLink={availableLinks}></Sidebar>
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
                <section className="logo">
                    <Link to="/">
                        <img src={logo} alt="" width="100px" />
                    </Link>
                </section>
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



function Sidebar({sideLink}) {
    return (
        <>
            <div className="d-flex flex-column sidebar">
                    {
                        sideLink.map( ([name,icon]) =>{
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
                        })
                    }
            </div>
        </>
    );
}

export default Dashboard;