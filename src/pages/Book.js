import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake , faCommentDots , faChevronLeft } from "@fortawesome/free-solid-svg-icons";

let data = new FormData();
data.append("function",1);

const Book = () => {
    const [currForm,setCurrForm] = useState(0);

    const [searchParams] = useSearchParams();
    const doctor_id = searchParams.get("doctor_id");
    const request_data = new FormData();
    request_data.append("id",doctor_id);
    data.set("doctor-id",doctor_id);

    const [doctorName,setDoctorName] = useState("");
    const [doctorSpecialty,setDoctorSpecialty] = useState("");
    const [doctorImage,setDoctorImage] = useState("");
    const [doctorHMOs,setDoctorHMOs] = useState([]);
    const [doctorVirtualSchedule,setDoctorVirtualSchedule] = useState([]);
    const [doctorWalkInSchedule,setDoctorWalkInSchedule] = useState([]);
    
    useEffect(() => {
        axios.post("http://localhost/GVH_PHP/get_doctor.php",request_data) 
        .then(response => {
            if (typeof response.data == "object") {
                let {firstname,lastname,specialty_id,profile_image,hmos_id,schedule} = response.data;
                setDoctorName(firstname + " " + lastname);
                setDoctorImage(profile_image);
    
                (function() {
                    const request_data = new FormData();
                    request_data.append("id",specialty_id);
                    axios.post("http://localhost/GVH_PHP/get_specialties.php",request_data) 
                    .then(response => {
                        if (typeof response.data == "object") setDoctorSpecialty(response.data.name);
                    });
                })();
    
                (function() {
                    const request_data = new FormData();
                    request_data.append("hmos_id",hmos_id);
                    axios.post("http://localhost/GVH_PHP/get_hmos.php",request_data)
                    .then(response => {
                        if (typeof response.data == "object") setDoctorHMOs(response.data);
                    });
                })();
                
               let schedule_data = schedule.split(".");
               let virtual = schedule_data[0].split(",");
               let walkIn = schedule_data[1].split(",");
               setDoctorVirtualSchedule(virtual);
               setDoctorWalkInSchedule(walkIn);
            }
        });
    },[]);

    function nextForm(formData) {
        for (let [key,value] of formData.entries()) {
            data.set(key,value);
        } 
        if (currForm < 2)
            setCurrForm(currForm + 1);
        else {
            axios.post("http://localhost/GVH_PHP/queue.php",data)
            .then(response => {
                if (response.data == "") {
                    alert("SUCCESS!");
                }
                
            });
        }
        
    }

    function prevForm() {
        setCurrForm(currForm - 1);
    }

    return (
        <>
            <div style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.5)",zIndex:9,display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div style={{width:"30rem",height:"30rem",background:"white",borderRadius:"20px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div className="card h-50" style={{border:"none"}}>
                        <div className="card-body d-flex justify-content-center">
                            <div>
                                <h3>Log your account.</h3>
                                <form>
                                    <div>
                                        <label>Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div>
                                        <label>Password</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="text-center bg-primary text-white mt-2" style={{borderRadius:"50px"}}>
                                        <button className="btn text-white">SUBMIT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="book">
                <div style={{width:"100%",maxWidth:"800px",margin:"4rem auto"}}>
                    <div className="row w-100">
                        <div className="col-5 d-flex flex-column align-items-center">
                            <a style={{display:"inline-block",width:"5rem",background:"blue",padding:"1.5rem 5rem"}}>LOGO</a>
                            <div style={{marginTop:"6rem",display:"flex",flexDirection:"column",alignItems:'center'}}> 
                                <div style={{width:"11rem",height:"11rem",borderRadius:"50%",overflow:"hidden"}}>
                                    <img src={doctorImage} className="img-fluid"/>
                                </div>
                                <div style={{fontWeight:"500",fontSize:"1.3rem"}}>Dr. {doctorName}</div>
                                <div style={{fontSize:".9rem"}} className="text-center">{doctorSpecialty}</div>
                            </div>
                        </div>
                        <div className="col-7 d-flex justify-content-center align-items-center py-3 px-5 " style={{borderRadius: "20px",boxShadow:"0 0 20px 0 rgba(0,0,0,0.1)"}}>
                            {
                                function() {
                                    let result = <BookMain next={nextForm}></BookMain>;
                                    if (currForm == 1) result = <BookSchedule virtual_schedule={doctorVirtualSchedule} walkIn_schedule={doctorWalkInSchedule} hmos={doctorHMOs} next={nextForm} prev={prevForm}></BookSchedule>
                                    else if (currForm == 2) result = <BookDetails next={nextForm} prev={prevForm}></BookDetails>

                                    return (
                                        <>
                                            {result}
                                        </>
                                    );
                                }()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function BookMain({next}) {
    
    const passData = function(type) {
        let data = new FormData();
        data.append("patient-type",type);
        next(data);
    }

    return (
        <>
            <div className="w-100 py-2" style={{height:"600px"}}>
                <div className="d-flex justify-content-center paginate">
                    <a style={{background: "rgba(171, 171, 171, 0.757)"}}>1</a>
                    <a style={{background: "rgba(171, 171, 171, 0.157)"}}>2</a>
                    <a style={{background: "rgba(171, 171, 171, 0.157)"}}>3</a>
                    <a style={{background: "rgba(171, 171, 171, 0.157)"}}>4</a>
                </div>
                    <div className="px-5" style={{marginTop:"10rem"}}>
                        <h4 className="mb-4">Hi!</h4>
                        <p>
                            To request for a Virtual or Face-to-Face Appointment, please answer the following...
                        </p>
                        <div className="mt-5">
                            <button className="w-100" style={{border:"1px solid rgba(0,0,0,0.1)",borderRadius:"50px",padding:".7rem",fontWeight:"600"}} onClick={() => passData("1")}>I'm an Existing Patient</button>
                            <button className="w-100" style={{border:"1px solid rgba(0,0,0,0.1)",borderRadius:"50px",padding:".7rem",fontWeight:"600",marginTop:"1rem"}} onClick={() => passData("0")}>I'm a New Patient</button>
                        </div>
                    </div>
            </div>
        </>
    );
}

function BookSchedule({next,prev,hmos,virtual_schedule,walkIn_schedule}) {
    let [useHMO,setUseHMO] = useState(null);
    let [walkIn,setWalkIn] = useState(true);

    function submitForm(event) {
        event.preventDefault();

        let data = new FormData(event.target);
        next(data);
    }

    return (
        <>
            <div className="w-100 py-2" style={{minHeight:"600px"}}>
                    <div className="d-flex justify-content-center paginate position-relative">
                        <a onClick={prev} style={{color:"rgba(136, 136, 136, 1 )",cursor:"pointer",position:"absolute",left:"-.5rem",fontSize:"1rem"}}> <FontAwesomeIcon icon={faChevronLeft} style={{fontSize:".9rem",marginRight:".3rem"}}/> Back</a>
                        <a style={{background: "rgba(171, 171, 171, 0.757)"}}>1</a>
                        <a style={{background: "rgba(171, 171, 171, 0.757)"}}>2</a>
                        <a style={{background: "rgba(171, 171, 171, 0.157)"}}>3</a>
                        <a style={{background: "rgba(171, 171, 171, 0.157)"}}>4</a>
                    </div>
                        <div style={{marginTop:"3rem"}}>
                            <select style={{fontSize:"1.5rem",fontWeight:"600",textAlign:'left'}} name="patient-type">
                                {
                                    ["I'm a New Patient","I'm an Existing Patient"].map((type,index) => {
                                        let result = <option value={index}>{type}</option>
                                        if (index == data.get("patient-type")) result = <option value={index} selected>{type}</option>;
                                        return (result);
                                    })
                                }
                            </select>
                            <div className="mt-4">
                                <p style={{fontSize:".75rem",fontWeight:"600",color:"rgba(136, 136, 136, 1 )"}}>ARE YOU USING HMO/HEALTHCARD FOR THIS CONSULTATION?</p>
                                <div style={{color:"rgba(171, 171, 171, 0.757)",fontWeight:600}}>
                                    <button className="py-2" onClick={() => setUseHMO("true")} style={{background:useHMO == "true" ? "rgba(0,0,0,0.03)" : "transparent",borderRadius:"15px",padding:"0 2rem"}}>Yes</button>
                                    <button className="py-2" style={{background:useHMO == "false" ? "rgba(0,0,0,0.03)" : "transparent",borderRadius:"15px",padding:"0 2rem"}} onClick={() => setUseHMO("false")}>No</button>
                                </div>
                            </div>
                            {   
                                useHMO ? 
                                <form onSubmit={submitForm} style={{fontSize:".75rem",fontWeight:"600",color:"rgba(136, 136, 136, 1 )"}}>
                                    {
                                        useHMO == "true" ?
                                        <div className="form-group" >
                                            <label className="my-3">SELECT HMO</label> <br/>
                                            <div style={{background:"rgba(0,0,0,0.03)",padding:".9rem .8rem",fontSize:"1rem",fontWeight:600,borderRadius:"15px"}} className="row">
                                                <div className="col-1">
                                                    <FontAwesomeIcon icon={faHandshake} style={{color:"#0E26B1",fontSize:"1.5rem"}} />
                                                </div>
                                                <div className="col-11">
                                                    <select name="hmo" className="w-100" style={{background:"transparent",outline:"none"}} required>
                                                        <option style={{display:"none"}} selected>Select hmo partner</option>
                                                        {
                                                            hmos.map((insurance,index) => {
                                                                const {name,id} = insurance;
                                                                let result = <option value={id}>{name}</option>
                                                                if (data.get("hmo") == insurance) result = <option selected value={id}>{name}</option>
                                                                return (result);
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                            :
                                        <></>
                                    }
                                    <div className="form-group">
                                            <label className="my-3">
                                                I WOULD LIKE TO REQUEST FOR A
                                            </label>
                                            <br/>
                                            <div style={{background:"rgba(0,0,0,0.03)",padding:".9rem 1rem",fontSize:"1rem",fontWeight:600,borderRadius:"15px"}} className="row">
                                                <div className="col-1">
                                                    <FontAwesomeIcon icon={faCommentDots} style={{color:"#32CD32",fontSize:"1.5rem"}}/>
                                                </div>
                                                <div className="col-11">
                                                    <select className="w-100" style={{outline:"none",background:"transparent"}} name="appointment-type" onChange={event => setWalkIn(event.target.value == "1")}>
                                                        <option value="1">Clinic Visit</option>
                                                        <option value="0">Virtual Consult</option>
                                                    </select>
                                                </div>  
                                            </div>
                                    </div>
                                    <div className="form-group" style={{fontSize:'1rem',fontWeight:"500"}}>
                                        <label className="my-3">
                                            Schedules:
                                        </label>
                                        {
                                            walkIn ? 
                                                <ul className="px-3 " style={{listStyle:"disc"}}>
                                                    {
                                                        walkIn_schedule.map(schedule => {
                                                            return (
                                                                <li>{schedule}</li>
                                                            );
                                                        })
                                                    }
                                                </ul> :
                                                <ul className="px-3 " style={{listStyle:"disc"}}>
                                                    {
                                                        virtual_schedule.map(schedule => {
                                                            return (
                                                                <li>{schedule}</li>
                                                            );
                                                        })
                                                    }
                                                </ul> 
                                        }
                                    </div>
                                    <div className="form-group">
                                        <label className="my-3">SCHEDULED ON</label> <br/>
                                        <input style={{background:"rgba(0,0,0,0.03)",width:"100%",outline:"none",padding:".7rem",borderRadius:"15px"}} name="appointment-date" type="text" defaultValue={data.get("appointment-date")} />
                                    </div>
                                    <div className="form-group">
                                        <label className="my-3">REASON FOR BOOKING/CHIEF COMPLAINT</label><br/>
                                        <input style={{background:"rgba(0,0,0,0.03)",width:"100%",outline:"none",padding:".7rem",borderRadius:"15px"}} name="appointment-reason" type="text" defaultValue={data.get("appointment-reason")} />
                                    </div>
                                    <div className="text-center mt-3">
                                        <input type="submit" value="CONTINUE" style={{background:"#1C9EF9",color:"white",padding:".7rem 3.5rem",borderRadius:"50px",fontSize:"1rem"}}/>
                                    </div>
                                </form>

                                :

                                <></>
                            }
                        </div>
            </div>
        </>
    )
}

function BookDetails({next,prev}) {
    const [isMale,setIsMale] = useState("true");

    function submitForm(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        next(data);
    }

    return (
        <>
            <div className="w-100 py-2" style={{minHeight:"600px"}}>
                <div className="d-flex justify-content-center paginate position-relative">
                    <a onClick={prev} style={{color:"rgba(136, 136, 136, 1 )",cursor:"pointer",position:"absolute",left:"-.5rem",fontSize:"1rem"}}><FontAwesomeIcon icon={faChevronLeft} style={{fontSize:".9rem",marginRight:".3rem"}}/> Back</a>
                    <a style={{background: "rgba(171, 171, 171, 0.757)"}}>1</a>
                    <a style={{background: "rgba(171, 171, 171, 0.757)"}}>2</a>
                    <a style={{background: "rgba(171, 171, 171, 0.757)"}}>3</a>
                    <a style={{background: "rgba(171, 171, 171, 0.157)"}}>4</a>
                </div>
                    <div style={{marginTop:"3rem"}}>
                      <h4 style={{fontWeight:650}}>Patient Details</h4>
                      <p style={{color:"rgba(136, 136, 136, 1 )",fontSize:".95rem"}}>Patient details are required for your medical record. Please fill in all the details below.</p>
                      <form onSubmit={submitForm} style={{color:"rgba(136, 136, 136, 1 )",fontSize:".9rem",fontWeight:"500"}}>
                            <div className="form-group">
                                <label className="mb-1 mt-3">FIRST NAME</label> <br/>
                                <input style={{background:"rgba(0,0,0,0.03)",width:"100%",outline:"none",padding:".7rem",borderRadius:"15px"}}  type="text" name="firstname" />
                            </div>
                            <div className="form-group">
                                <label className="mb-1 mt-3">MIDDLE NAME</label> <br/>
                                <input style={{background:"rgba(0,0,0,0.03)",width:"100%",outline:"none",padding:".7rem",borderRadius:"15px"}}  type="text" name="middlename" />
                            </div>
                            <div className="form-group">
                                <label className="mb-1 mt-3">LAST NAME</label> <br/>
                                <input style={{background:"rgba(0,0,0,0.03)",width:"100%",outline:"none",padding:".7rem",borderRadius:"15px"}}  type="text" name="lastname"/>
                            </div>
                            <div className="form-group">
                                <label className="mb-1 mt-3">DATE OF BIRTH (MM/DD/YYYY)</label>
                                <input style={{background:"rgba(0,0,0,0.03)",width:"100%",outline:"none",padding:".7rem",borderRadius:"15px"}}  type="text" name="birthdate"/>
                            </div>
                            <div className="form-group">
                                <label className="mb-1 mt-3">SEX</label> <br/>
                                <button type="button" onClick={() => setIsMale("true")} style={{background:isMale == "true" ? "rgba(0,0,0,0.03)" : "transparent",borderRadius:"15px",padding:".6rem 2rem"}}>Male</button>
                                <button type="button" onClick={() => setIsMale("false")} style={{background:isMale == "false" ? "rgba(0,0,0,0.03)" : "transparent",borderRadius:"15px",padding:".6rem 2rem"}}>Female</button>
                            </div>
                            <div className="form-group">
                                <label className="mb-1 mt-3">ADDRESS</label> <br/>
                                <input style={{background:"rgba(0,0,0,0.03)",width:"100%",outline:"none",padding:".7rem",borderRadius:"15px"}}  type="text" required name="address" />
                            </div>
                            <div className="form-group">
                                <label className="mb-1 mt-3">MOBILE NUMBER (Optional) </label> <br/>
                                <input style={{background:"rgba(0,0,0,0.03)",width:"100%",outline:"none",padding:".7rem",borderRadius:"15px"}}  type="text" name="number"/>
                            </div>
                            <div className="form-group">
                                <label className="mb-1 mt-3">E-MAIL</label>
                                <input style={{background:"rgba(0,0,0,0.03)",width:"100%",outline:"none",padding:".7rem",borderRadius:"15px"}}  type="text" required name="email"/> 
                                <p>You will need to verify your email id with an OTP (One Time Pin) at the next step.</p>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" required />
                                I have read, understood, and accepted the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                            </div>
                            <div className="text-center mt-3">
                                <input type="submit" value="CONTINUE" style={{background:"#1C9EF9",color:"white",padding:".7rem 3.5rem",borderRadius:"50px",fontSize:"1rem"}}/>
                            </div>
                      </form>
                    </div>
            </div>
        </>
    )
}

export default Book;