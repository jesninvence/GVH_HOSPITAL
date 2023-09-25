import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Link , useNavigate } from "react-router-dom";
import { getUserType } from "../../components/GetUser";


function allow_user(user_type,callback) {
    getUserType().then(type => {
        if (type != user_type) callback();
    })
}

export const DashMain = () => {
    const [userType,setUserType] = useState();

    useEffect(() => {
        getUserType().then(type => {
            setUserType(type == 1 ? "Admin" : (type == 2) ? "Doctor" : "Patient");
        });
    },[]);

    return (
        <>
            <h1>Dashmain Goes Brr.. {userType}</h1>
        </>
    );
}

export const DashDoctors = () => {
    const navigate = useNavigate();

    useEffect(() => {
        allow_user(1,() => navigate("/user"));
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
        allow_user(1,() => navigate("/user"));
    },[]);

    return (
        <>
            <h1>Dash Patients Goes Brr..</h1>
        </>
    );
}
export const DashAppointments = () => {
    return (
        <>
            <h1>Dash Appointments Goes Brr..</h1>
        </>
    );
}
export const DashQueue = () => {
    const navigate = useNavigate();
    const [queues,setQueues] = useState([]);

    useEffect(() => {
        allow_user(1,() => navigate("/user"));
        axios.get("http://localhost/GVH_PHP/queue.php")
        .then(response => {
            if (typeof response.data == "object") setQueues(response.data);
        });
    },[]);

    const acceptAppointment = function(id,accept) {
        const data = new FormData();
        data.append("id",id);
        data.append("accept",accept);

        axios.post("http://localhost/GVH_PHP/queue.php",data)
        .then(response => {
            if (response.data == "") window.location.reload();
        });
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <table id="appointment_queues">
                        <thead>
                            <tr>
                                <th>DOCTOR</th>
                                <th>PATIENT</th>
                                <th>APPOINTED DATE</th>
                                <th>REQUEST DATE</th>
                            </tr>
                        </thead>                                            
                        <tbody>
                            {queues.map(queue => {
                                let {id,doctor_id,patient_id,appointed_date,request_date} = queue;
                                return (
                                    <tr>
                                        <td>{doctor_id}</td>
                                        <td>{patient_id}</td>
                                        <td>{appointed_date}</td>
                                        <td>{request_date}</td>
                                        <td>
                                            <button className="btn btn-success me-2" onClick={() => acceptAppointment(id,true)}>ACCEPT</button>
                                            <button className="btn btn-danger" onClick={() => acceptAppointment(id,false)}>DECLINE</button>
                                        </td>
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
        allow_user(1,() => navigate("/user"));
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
        allow_user(1,() => navigate("/user"));
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
        allow_user(1,() => navigate("/user"));
    },[]);

    return (
        <>
            <h1>Dash Laboratory Goes Brr..</h1>
        </>
    );
}
export const DashInbox = () => {
    return (
        <>
            <h1>Dash Inbox Goes Brr..</h1>
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
        allow_user(1,() => navigate("/user"));
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
                </select>
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