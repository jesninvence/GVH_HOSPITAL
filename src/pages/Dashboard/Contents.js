import axios from "axios";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState , useRef} from "react";
import { Navigate, Link , useNavigate } from "react-router-dom";
import { getUserType } from "../../components/GetUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Bar } from 'react-chartjs-2';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  ChartJS.register(
      CategoryScale,
      LinearScale,
      BarElement,
      Title,
      Tooltip,
      Legend
    );
  
  
=======
import { useEffect, useState , useRef} from "react";
import { Navigate, Link , useNavigate } from "react-router-dom";
import { getUserType } from "../../components/GetUser";

>>>>>>> master

function allow_user(user_type,not,callback) {
    
    getUserType().then(type => {
        if ((type != user_type && !not) || (type == user_type && not)) callback();
    })
}

export const DashMain = () => {
    const [userType,setUserType] = useState();

    useEffect(() => {
        getUserType().then(type => {
            setUserType(type == 1 ? "Admin" : (type == 2) ? "Doctor" : "Patient");
        });
    },[]);

<<<<<<< HEAD

    return (
        <>
            <h1>{userType}</h1>
            {
                userType == "Admin" ?
                    <AdminDashboard></AdminDashboard>
                                :
                    <PatientProfile></PatientProfile>
            }
=======
    return (
        <>
            <h1>Dashmain Goes Brr.. {userType}</h1>
>>>>>>> master
        </>
    );
}

<<<<<<< HEAD

function PatientProfile() {
    return(
        <>
            
        </>
    );
}

function AdminDashboard() {
        const [doctorTotal,setDoctorTotal] = useState();
        const [patientTotal,setPatientTotal] = useState();
        const [appointmentTotal,setAppointmentTotal] = useState();

        useEffect(() => {
            (function() {
                const data = new FormData();
                data.append("target","users");
                data.append("attribute","type_id");
                data.append("value","2");
                axios.post("http://localhost/GVH_PHP/get_total.php",data)
                .then(response => {
                    if (!isNaN(response.data)) setDoctorTotal(response.data);
                })
            })();
            (function() {
                const data = new FormData();
                data.append("target","appointments");
                data.append("attribute","1");
                data.append("value","1");
                axios.post("http://localhost/GVH_PHP/get_total.php",data)
                .then(response => {
                    console.log("appointments " + response.data)
                    if (!isNaN(response.data)) setAppointmentTotal(response.data);
                })
            })();
            (function() {
                const data = new FormData();
                data.append("target","users");
                data.append("attribute","type_id");
                data.append("value","4");
                axios.post("http://localhost/GVH_PHP/get_total.php",data)
                .then(response => {
                    if (!isNaN(response.data)) setPatientTotal(response.data);
                })
            })();
        },[])
        const options = {
            responsive: true,
            plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
            },
        };
        
        const labels = ['Doctors','Patients','Appointments','Trash'];
        
        const data = {
            labels,
            datasets: [
            {
                label: 'Data',
                data: [doctorTotal,patientTotal,appointmentTotal,3],
                backgroundColor: ["#2962ff","#ff6d00","#2e7d32","#d50000"],
            }
            ],
        };
        return (
            <>
                        
            <main className="main-container">
                <div className="main-title">
                    <h4>DASHBOARD</h4>
                    {/* <h3>DASHBOARD{userType}</h3> */}
                </div>

                <div className="main-cards">

                    <div className="card">
                        <div className="card-inner">
                            <h6>DOCTORS</h6>
                            <span className="material-icons-outlined"><FontAwesomeIcon icon={faUserDoctor} /></span>
                        </div>
                        <h5>{doctorTotal}</h5>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <h6>PATIENTS</h6>
                            <span className="material-icons-outlined"><FontAwesomeIcon icon={faUserGroup} /></span>
                        </div>
                        <h5>{patientTotal}</h5>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <h6>APPOINTMENTS</h6>
                            <span className="material-icons-outlined"><FontAwesomeIcon icon={faCalendarCheck} /></span>
                        </div>
                        <h5>{appointmentTotal}</h5>
                    </div>

                    <div className="card">
                        <div className="card-inner">
                            <h6>TRASH</h6>
                            <span className="material-icons-outlined"><FontAwesomeIcon icon={faTrashCan} /></span>
                        </div>
                        <h5>24</h5>
                    </div>

                </div>
                <br /><br />
                <div className="container">
                    <div className="patient-list">
                        <div className="row">
                            <div className="col-12">
                                <div className="card bg-light">
                                    <div className="card-header">
                                        New Request
                                        <button type="button" className="btn btn-primary position-relative" style={{left: "1rem"}}>
                                                <FontAwesomeIcon icon={faBell} />
                                            <span className="position-absolute top-5 start-95 translate-mdiddle badge rounded-pill bg-danger">
                                                2
                                            </span>
                                            <span className="visually-hidden">unread notification</span>
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Patient Name</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td scope="row">1</td>
                                                    <td>Elon Musk</td>
                                                    <td>Manila</td>
                                                    <td>09/28/2023</td>
                                                    <td>
                                                        <button><FontAwesomeIcon icon={faCheck} /></button>
                                                        <Link to="/patientsprofile">
                                                            <button style={{backgroundColor: "#2962ff"}}><FontAwesomeIcon icon={faUser} /></button>
                                                        </Link>
                                                        <button><FontAwesomeIcon icon={faTrashCan} /></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tbody>
                                                <tr>
                                                    <td scope="row">2</td>
                                                    <td>Mark Logan</td>
                                                    <td>Davao</td>
                                                    <td>09/28/2023</td>
                                                    <td>
                                                        <button><FontAwesomeIcon icon={faCheck} /></button>
                                                        <button><FontAwesomeIcon icon={faUser} /></button>
                                                        <button><FontAwesomeIcon icon={faTrashCan} /></button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Bar options={options} data={data}/>
        </>
    );
}


=======
>>>>>>> master
export const DashDoctors = () => {
    const navigate = useNavigate();

    useEffect(() => {
        allow_user(1,false,() => navigate("/user"));
    },[]);

    return (
        <>
            <h1>Doctors</h1>
            <Link to="/user/doctors/add">Add Doctor</Link>
        </>
    );
}
export const DashPatients = () => {
    const navigate = useNavigate();

    useEffect(() => {
        allow_user(1,false,() => navigate("/user"));
    },[]);

    return (
        <>
            <h1>Dash Patients Goes Brr..</h1>
        </>
    );
}
export const DashAppointments = () => {
    const [appointments,setAppointments] = useState([]);
    const [actions,setActions] = useState(false);

    useEffect(() => {
        getUserType().then(type => {
            let data = new FormData();
            data.append("function",1);
            if (type != 1) {
                const cru = localStorage.getItem("cru");
                data.append("id",cru);
                data.append("specific",true);
                data.append("type",type == 2 ? "doctor" : "patient");
            } else setActions(true);
        
            axios.post("http://localhost/GVH_PHP/appointments.php",data)
            .then(response => {
                if (typeof response.data == "object")
                    setAppointments(response.data);
            });
        });
    },[]);

    const doneAppointment = (id) => {
        let data = new FormData();
        data.append("id",id);
        data.append("function",2);
        axios.post("http://localhost/GVH_PHP/appointments.php",data)
        .then(response => {
            if (response.data == "") window.location.reload(); 
        });
    }

    return (
        <>
            <h1>Appointments</h1>
<<<<<<< HEAD
            <div className="card" style={{backgroundColor: "#2e7d32"}}>
                <div className="card-body text-white">
                    <table className="appoint-tb">
                    <thead>
                            <tr>
                                <th>DOCTOR</th>
                                <th>PATIENT</th>
                                <th>REASON</th>
                                <th>HMO</th>
=======
            <div className="card">
                <div className="card-body">
                    <table className="appoint-tb">
                        <thead>
                            <tr>
                                <th>DOCTOR</th>
                                <th>PATIENT</th>
>>>>>>> master
                                <th>APPOINTED DATE</th>
                            </tr>
                        </thead>                                            
                        <tbody>
                            {appointments.map(appointment => {
<<<<<<< HEAD
                                let {id,doctor_id,patient_id,doctor_name,patient_name,reason,hmo_name,appointed_date} = appointment;
                                return (
                                    <tr>
                                        <td>{doctor_name}</td>
                                        <td>{patient_name}</td>
                                        <td>{reason}</td>
                                        <td>{hmo_name}</td>
=======
                                let {id,doctor_id,patient_id,appointed_date} = appointment;
                                return (
                                    <tr>
                                        <td>{doctor_id}</td>
                                        <td>{patient_id}</td>
>>>>>>> master
                                        <td>{appointed_date}</td>
                                        {
                                            actions ?
                                                <td>
                                                    <button className="btn btn-success" onClick={() => doneAppointment(id)}>Done</button>
                                                </td>
                                                :
                                                <></>
                                        }
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export const DashQueue = () => {
    const navigate = useNavigate();
    const [queues,setQueues] = useState([]);
    const [actions,setActions] = useState(false);

    useEffect(() => {
        allow_user(2,true,() => navigate("/user"));
        
        getUserType().then(type => {
            let data = new FormData();
            data.append("function",3);
            if (type != 1) {
                let cru = localStorage.getItem("cru");
                data.append("id",cru);
                data.append("type",type == 2 ? "doctor" : "patient");
            } else setActions(true);
            axios.post("http://localhost/GVH_PHP/queue.php",data)
            .then(response => {
                if (typeof response.data == "object") setQueues(response.data);
<<<<<<< HEAD
                console.log(response)
=======
>>>>>>> master
            });
        });

    },[]);

    const acceptAppointment = function(id,accept) {
        const data = new FormData();
        data.append("id",id);
        data.append("accept",accept);
        data.append("function",2);

        axios.post("http://localhost/GVH_PHP/queue.php",data)
        .then(response => {
            if (response.data == "") window.location.reload();
        });
    }

    const cancelAppointment = function(id) {
        const data = new FormData();
        data.append("id",id);
        data.append("function",4);

        axios.post("http://localhost/GVH_PHP/queue.php",data)
        .then(response => {
            if (response.data == "") window.location.reload();
            console.log(response);
        });
    }

    return (
        <>
            <h1>QUEUE</h1>
            <div className="card">
                <div className="card-body">
                    <table className="appoint-tb">
                        <thead>
                            <tr>
                                <th>DOCTOR</th>
                                <th>PATIENT</th>
                                <th>APPOINTED DATE</th>
<<<<<<< HEAD
                                <th>REASON</th>
                                <th>HMO</th>
=======
>>>>>>> master
                                <th>REQUEST DATE</th>
                            </tr>
                        </thead>                                            
                        <tbody>
                            {queues.map(queue => {
<<<<<<< HEAD
                                let {id,doctor_id,doctor_name,patient_name,patient_id,appointed_date,reason,hmo_id,request_date,hmo_name} = queue;
                                return (
                                    <tr>
                                        <td>{doctor_name}</td>
                                        <td>{patient_name}</td>
                                        <td>{appointed_date}</td>
                                        <td>{reason}</td>
                                        <td>{hmo_name}</td>
=======
                                let {id,doctor_id,patient_id,appointed_date,request_date} = queue;
                                return (
                                    <tr>
                                        <td>{doctor_id}</td>
                                        <td>{patient_id}</td>
                                        <td>{appointed_date}</td>
>>>>>>> master
                                        <td>{request_date}</td>     
                                        {
                                            actions ?
                                                <td>
                                                    <button className="btn btn-success me-2" onClick={() => acceptAppointment(id,true)}>ACCEPT</button>
                                                    <button className="btn btn-danger" onClick={() => acceptAppointment(id,false)}>DECLINE</button>
                                                </td>
                                                :
                                                <td>
                                                    <button className="btn btn-danger" onClick={() => cancelAppointment(id)}>CANCEL</button>
                                                </td>
                                        }                                
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export const DashPharmacy = () => {
    const navigate = useNavigate();

    useEffect(() => {
        allow_user(1,false,() => navigate("/user"));
    },[]);

    return (
        <>
            <h1>Dash Pharmacy Goes Brr..</h1>
        </>
    );
}
export const DashInventory = () => {
    const navigate = useNavigate();

    useEffect(() => {
        allow_user(1,false,() => navigate("/user"));
    },[]);

    return (
        <>
            <h1>Dash Inventory Goes Brr..</h1>
        </>
    );
}
export const DashLaboratory = () => {
    const navigate = useNavigate();

    useEffect(() => {
        allow_user(1,false,() => navigate("/user"));
    },[]);

    return (
        <>
            <h1>Dash Laboratory Goes Brr..</h1>
        </>
    );
}
export const DashInbox = () => {
    let [inboxes,setInboxes] = useState([]);
    useEffect(() => {
        let cru = localStorage.getItem("cru");
        let data = new FormData();
        data.append("function",1);
        data.append("id",cru);
        axios.post("http://localhost/GVH_PHP/inboxes.php",data)
        .then(response => {
            if (typeof response.data == "object") setInboxes(response.data.reverse());
        });
    },[]);
    
    const markAsRead = function(id) {
        let data = new FormData();
        data.append("id",id);
        data.append("function",2);
        axios.post("http://localhost/GVH_PHP/inboxes.php",data)
        .then(response => {
            console.log(response)
            if (response.data == "") window.location.reload();
        });
    }

    return (
        <>
            <h1>Inbox</h1>
            <div className="container-fluid">
                {
                    inboxes.map(inbox => {
                        return (
                            <div className="card">
                                <div style={{fontWeight : inbox.viewed > 0 ? "300" : "600"}} className="card-body">
                                    <div className="row">
                                        <div className="col-10">
                                            <div>
                                                <span className="text-secondary" style={{fontSize:".9rem"}}>{inbox.datetime_received}</span>
                                            </div>
                                            {inbox.message}
                                        </div>
                                        <div className="col-2 align-self-center">
                                            <button style={{fontSize: "300",textDecoration:"underline"}} onClick={() => markAsRead(inbox.id)}>Mark as read</button>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}
export const DashChat = () => {
    return (
        <>
            <h1>Dash Chat Goes Brr..</h1>
        </>
    );
}

export const DashDoctorAdd = () => {
    const navigate = useNavigate();

    useEffect(() => {
        allow_user(1,false,() => navigate("/user"));
    },[]);


    let [specialties,setSpecialties] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/GVH_PHP/get_specialties.php")
        .then(response => {
            if (typeof response.data == "object") setSpecialties(response.data);
        });
    },[]);

    const addDoctor = function(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post("http://localhost/GVH_PHP/register.php",data)
        .then(response => console.log(response.data));
    }

    return (
        <>
            <h1>Add Doctors</h1>
            <Link to="/user/doctors">Go Back!</Link>
            <form onSubmit={addDoctor}>
                First Name <input type="text" name="firstName" /> <br/>
                Last Name <input type="text" name="lastName" /> <br/>
                Email <input type="text" name="email" /> <br/>
                Password <input type="text" name="password" /> <br/>
                Phone Number <input type="text" name="number" /> <br/>
                <label>Date of Birth</label>    <br />
                            <div>
                                <select name="birthDay">
                                    {
                                        (new Array(31).fill(0)).map((_,index) => {
                                            let day = 1 + index;
                                            let result = (
                                                <option value={day}>
                                                        {day}
                                                </option>
                                            );
                                            return result;
                                        })
                                    }
                                </select>
                            </div>
                            <div>
                                <select name="birthMonth">
                                    {
                                        ["January","February","March","April","May","June","July","August","September","October","November","December"].map(month => {
                                            let result = (
                                                <option value={month}>
                                                    {month}
                                                </option>
                                            );

                                            return result;
                                        })
                                    }
                                </select>
                            </div>
                            <div>
                                <select name="birthYear">
                                    {
                                        (new Array(Math.abs(1800 - ((new Date()).getFullYear() + 1)))).fill(0).map((_,index) => {
                                            let year = 1800 + index;
                                            let result = (
                                                <option value={year}>
                                                    {year}
                                                </option>
                                            );
                                            if (year == 1950 ) {
                                                result = (
                                                    <option selected value={year}>
                                                        {year}
                                                    </option>
                                                );
                                            }
                                            return result;
                                        })
                                    }
                                </select>
                            </div>
                Address<input type="text" name="address" /> <br/>
                City<input type="text" name="city" /> <br/>
                Region<input type="text" name="region" /> <br/>
                Zip<input type="text" name="zip" /> <br/>
                Specialty 
                <select name="specialty">
                    {
                        specialties.map(specialty => {
                            return (
                                <>
                                    <option value={specialty.id}>
                                        {specialty.name}
                                    </option>
                                </>
                            );
                        })
                    }
                </select> <br/>
                Experience <input type="number" name="experience"/>
                <input type="hidden" name="user_type" value="2" />
                <input type="submit" value="create doctor" className="border"/>
            </form>
        </>
    );
}


export const DashLogout = () => {
    localStorage.removeItem("cru");
    if (!localStorage.getItem("ru"))
        localStorage.removeItem("sc");
    return (
        <>
            <Navigate to="/login"></Navigate>
        </>
    );
}