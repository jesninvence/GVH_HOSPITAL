import axios from "axios";
import { useState , useRef , useEffect } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const inputData = new FormData();

const Signup = () => {
    const [current,setCurrent] = useState(0);
   
    const formData = [useRef(),useRef(),useRef()];
    const bars = [useRef(),useRef(),useRef()];
    
    const createAccount = function() {
        axios.post("http://localhost/GVH_PHP/register.php",inputData)
        .then(response => {
            console.log(response);
            document.getElementById("createdAccountSuccess").style.display = "block";
        }).catch(exception => console.log(exception));
    }

    const acceptData = function() {
       formData[current].current.requestSubmit();
    }

    const updateCurrent = function() {
        bars[current].current.classList.remove("currFormPos");
        setCurrent(current + 1);
    }

    const prevCurrent = function() {
        if (current == 0) return;
        bars[current].current.classList.remove("currFormPos");
        setCurrent(current - 1);
    }

    useEffect(
        function() {
            bars[current].current.classList.add("currFormPos");
        },[current]
    )

    return (
        <>  
            <div style={{background:"rgba(0,0,0,0.05)",marginBottom:"5rem"}}>
                <div className="container  py-5" id="signin">
                    <div className="row">
                        <div className="col-5 pe-5">
                            <h3>Registration Form</h3>
                            <p>The power of community to create health is far greater than any physician, clinic or hospital.</p>
                            <hr />
                            <div className="row">
                                <div className="col-11 formBars" style={{fontSize:"1.3rem",color:"gray"}}>
                                    <div className="py-4 ps-5" ref={bars[0]}>User Profile</div>
                                    <div className="py-4 ps-5" ref={bars[1]}>Residential Address</div>
                                    <div className="py-4 ps-5" ref={bars[2]}>Upload Document</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-7 pb-5" style={{background:"white",borderRadius:"10px"}}>    
                            {
                                function() {
                                    let result = <UserProfile inputData={inputData} setData={formData[0]} updateCurrent={updateCurrent}></UserProfile>
                                    if (current == 1) result = <ResidentialAddress inputData={inputData} setData={formData[1]} updateCurrent={updateCurrent}></ResidentialAddress>
                                    if (current == 2) result = <UploadDocuments inputData={inputData} setData={formData[2]} createAccount={createAccount}></UploadDocuments>
                                    return (
                                        result
                                    );
                                }()
                            }
                            <div className="d-flex justify-content-end mx-5 position-relative">
                                {current == 0 ? <></> : <button onClick={prevCurrent} className="position-absolute start-0" style={{padding:".5rem 2.2rem",fontSize:"1.2rem",borderRadius:"50px",color:"white",background:"blue",border:"none"}}>Back</button>}
                                <button onClick={acceptData} style={{padding:".5rem 2.2rem",fontSize:"1.2rem",borderRadius:"50px",color:"white",background:"blue",border:"none"}}>
                                    {current == 2 ? "Create Account" : "Next"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
            <div id="createdAccountSuccess">
                <div>
                    <div>
                        <div className="text-center">
                            <FontAwesomeIcon className="d-inline-block" style={{border:"3px solid blue",borderRadius:'50%',width:"2rem",height:"2rem",padding:"1rem",color:"blue"}} icon={faCheck} />
                        </div>
                        <p style={{fontWeight:300}}>
                            Your account has been created successfully!
                        </p>
                        <div className="text-center">
                            <Link to="/login">
                                <button style={{background:"blue",color:"white",borderRadius:"50px",padding:".5rem 5rem",border:"none"}}>Log In</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function UserProfile({inputData,setData,updateCurrent}) {
    const submitForm = function(event) {
        event.preventDefault();
        let data = new FormData(event.target);
    
        if (data.get("password") != data.get("confirmPassword")) {
            document.querySelector(".formError").innerHTML = "Error : Password And Confirm Password are not the same.";
        } else {
            for (let [key,value] of data.entries()) {
                if (!(key == "confirmPassword"))
                    inputData.set(key,value);
            }
            updateCurrent();
        }
    }

    return (
        <>
            <div className="container p-5 mb-5">
                <h3 style={{marginTop:".5rem"}}>User Profile</h3>
                <hr />
                <form onSubmit={submitForm} ref={setData} className="ms-auto">
                    <div className="row">
                        <div className="form-group col">
                            <label>First Name</label>
                            <input className="form-control" type="text" name="firstName" required defaultValue={inputData.get("firstName")}/>
                        </div>
                        <div className="form-group col">
                            <label>Last Name</label>
                            <input className="form-control" type="text" name="lastName" required defaultValue={inputData.get("lastName")}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="form-group col">
                            <label>Email ID</label>
                            <input className="form-control" type="text" name="email" required defaultValue={inputData.get("email")}/>
                        </div>
                        <div className="form-group col">
                            <label>Phone Number</label>
                            <input className="form-control" type="text" name="number" defaultValue={inputData.get("number")}/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="form-group col">
                            <label>Password</label>
                            <input className="form-control" type="text" name="password" required defaultValue={inputData.get("password")}/>
                        </div>
                        <div className="form-group col">
                            <label>Confirm Password</label>
                            <input className="form-control" type="text" name="confirmPassword" required defaultValue={inputData.get("confirmPassword")}/>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col selects" >
                            <label>Date of Birth</label>    <br />
                            <div>
                                <select name="birthDay" defaultValue={inputData.get("birthDay")}>
                                    {
                                        (new Array(31).fill(0)).map((_,index) => {
                                            let day = 1 + index;
                                            let result = (
                                                <option value={day}>
                                                        {day}
                                                </option>
                                            );
                                            if (inputData.get("birthDay") == day) result = (
                                                <option value={day} selected>
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
                                            if (inputData.get("birthMonth") == month) result = (
                                                <option selected value={month}>
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
                                            let inputedYear = inputData.get("birthYear");
                                            let result = (
                                                <option value={year}>
                                                    {year}
                                                </option>
                                            );
                                            if ((!inputedYear && year == 1950 ) || inputData.get("birthYear") == year) {
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
                        </div>
                    </div>
                    <br/>
                    <div className="formError text-danger">Fill the forms!</div>
                </form>
            </div>
        </>
    );
}

function ResidentialAddress({inputData,setData,updateCurrent}) {
    const submitForm = function(event) {
        event.preventDefault();
        let data = new FormData(event.target);
    
        for (let [key,value] of data.entries()) {
            inputData.append(key,value);
        }
        updateCurrent();
    }


    return (
        <>
            <div className="container p-5">
                <h3 style={{marginTop:".5rem"}}>Residential Address</h3>
                <hr />
                <form ref={setData} onSubmit={submitForm} className="ms-auto">
                    <div className="row">
                            <div className="form-group col">
                                <label>Address</label>
                                <input className="form-control" type="text" name="address" required defaultValue={inputData.get("address")}/>
                            </div>
                            <div className="form-group col">
                                <label>City</label>
                                <input className="form-control" type="text" name="city" required defaultValue={inputData.get("city")}/>
                            </div>
                    </div>
                    <br/>
                    <div className="row">
                            <div className="form-group col">
                                <label>Region</label>
                                <input className="form-control" type="text" name="region" required defaultValue={inputData.get("region")}/>
                            </div>
                            <div className="form-group col">
                                <label>Postal / Zip Code</label>
                                <input className="form-control" type="text" name="zip" required defaultValue={inputData.get("zip")}/>
                            </div>
                    </div>
                    <br/>
                </form>
            </div>
        </>
    );
}

function UploadDocuments({inputData,setData,createAccount}) {
    const submitForm = function(event) {
        event.preventDefault();
        let data = new FormData(event.target);
    
        for (let [key,value] of data.entries()) {
            inputData.append(key,value);
        }

        createAccount();
    }

    return (
        <>
            <div className="container p-5">
                <h3 style={{marginTop:".5rem"}}>Upload Document</h3>
                <hr />
                <form onSubmit={submitForm} ref={setData}>
                    
                </form>
            </div>
        </>
    );
}

export default Signup;