import axios from "axios";
import { useRef , useState , useEffect } from "react";
import { Link } from "react-router-dom";
import LoginImage from "../images/login-image.png";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
    const loggedLink = useRef();
    const [currForm,setCurrForm] = useState(0);
    const forms = [useRef(),useRef()];
    const errorMessage = useRef();

    let emailInput = useRef();
    let passwordInput = useRef();
    let rememberInput = useRef();

    let cru = localStorage.getItem("cru");
    let ru = localStorage.getItem("ru");

    let hEMId = null;

    useEffect(
        () => {
            let sc = localStorage.getItem("sc");
            if (cru) {
                let data = new FormData();
                data.append("cru",cru);
                data.append("sc",sc);
                data.append("function","1");

                axios.post("http://localhost/GVH_PHP/get_user.php",data)
                .then(response => {
                    let result = response.data;
                    if (typeof result == "object" && loggedLink.current) {
                        loggedLink.current.click();
                    } 
                });
            } else if (ru) {
                let data = new FormData();
                data.append("cru",ru);
                data.append("sc",sc);
                data.append("function",1);

                axios.post("http://localhost/GVH_PHP/get_user.php",data)
                .then(response => {
                    let result = response.data;
                    if (typeof result == "object") {
                        emailInput.current.value = result.email;
                        passwordInput.current.value = result.password;
                        rememberInput.current.checked = true;
                    } 
                });
            }
        },[]
    );

    const signin = function(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        axios.post(`http://localhost/GVH_PHP/login.php`,data)
        .then(response => {
            let result = response.data;
            if (result == "" || !result) {
                errorMessage.current.classList.remove("d-none");
                if (hEMId) clearTimeout(hEMId);
                hEMId = setTimeout(() => {
                    errorMessage.current.classList.add("d-none");
                },2000);
                
            } else {
                if (data.get("remember") == "on") localStorage.setItem("ru",result.cru);
                else localStorage.removeItem("ru");

                localStorage.setItem("cru",result.cru);
                localStorage.setItem("sc",result.sc);
                loggedLink.current.click();
            }
        });
    }

    const changeForm = function(formNum) {
        forms[currForm].current.classList.add("d-none");
        setCurrForm(formNum);
    }

    const resetPassword = function(event) {
        event.preventDefault();
        axios.post("http://localhost/GVH_PHP/reset_code.php",(new FormData(event.target)))
        .then(response => console.log(response))
    }

    useEffect(
        function() {
            forms[currForm].current.classList.remove("d-none");
        },[currForm]
    )

    return (
        <>
            <div id="login" className="py-5 mb-5" style={{background:"rgba(0,0,0,0.05)"}}>
                <div className="container" style={{width:"70%"}}>
                    <div className="row">
                        <div className="col-6 p-0">
                            <img src={LoginImage} className="img-fluid"/> 
                        </div>
                        <div ref={forms[0]} className="col-6 bg-white d-none">
                            <form method="GET" onSubmit={signin} style={{marginTop:"9rem",color:"#FBFEFF"}} className="d-flex flex-column align-items-center">
                                <h3 style={{color:"#0E9BD3"}} className="m-0 p-0">USER LOGIN</h3>
                                <p className="text-danger m-0 d-none" ref={errorMessage}>username or password is not valid!</p>
                                <div style={{width:"17rem"}} className="mb-4 mt-3">
                                    <input style={{background:"#B6DFEF",borderRadius:"50px"}} className="py-2 pe-5 ps-4 w-100" type="text" name="email" placeholder="email" required ref={emailInput}/>
                                </div>
                                <div style={{width:"17rem"}} className="mb-3">
                                    <input style={{background:"#B6DFEF",borderRadius:"50px"}} className="py-2 pe-5 ps-4" type="text" name="password" placeholder="password" required ref={passwordInput}/> 
                                </div>
                                <div className="d-flex justify-content-between" style={{fontSize:".8rem",width:"17rem"}}>
                                    <div style={{color:"gray",display:"flex",alignItems:"center",gap:".3rem"}}>
                                        <label style={{position:"relative",display:"inline-block",width:"1rem",height:"1rem",border:"1px solid blue",borderRadius:"50%",cursor:"pointer"}}>
                                            <input className="d-none" type="checkbox" name="remember" ref={rememberInput} />
                                            <span style={{position:"absolute",top:"-20%",justifyContent:"center",alignItems:"center",fontSize:"1.2rem"}}>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                            <div style={{display:"inline-block",width:"6rem",transform:"translateX(20%)"}}>Remember me</div>
                                        </label>
                                    </div>
                                    <a style={{color:"gray",textDecoration:"none"}} href="#" onClick={event =>{event.preventDefault();changeForm(1)}}>Forgot password?</a>
                                </div>
                                <input type="submit" value="LOGIN" className="px-5 py-2 mt-4" style={{background:"linear-gradient(to left,#3C53AC,#B6DFEF)",borderRadius:"50px"}}/>
                            </form>
                        </div>
                        <div ref={forms[1]} className="col-6 bg-white d-none">
                            <form method="GET" onSubmit={resetPassword} style={{marginTop:"9rem",color:"#FBFEFF"}} className="d-flex flex-column align-items-center">
                                <h3 style={{color:"#0E9BD3",fontSize:"2.3rem"}} className="mb-3">RESET YOUR PASSWORD</h3>
                                <p style={{color:"#A5A5A5",textAlign:"center",width:"28.5rem",fontSize:".9rem"}}>
                                    Please provide the email address that you used when you signed up for your account.
                                </p>
                                <div style={{width:"20rem"}} className="mb-4 mt-2">
                                    <input style={{background:"#B6DFEF",borderRadius:"50px"}} className="py-2 pe-5 ps-4 w-100" type="text" name="email" placeholder="email" />
                                </div>  
                                <p style={{color:"#A5A5A5",textAlign:"center",width:"28rem",fontSize:".9rem"}}>
                                    We will send you an email that will allow you to reset your password.
                                </p>
                                <input type="submit" value="RESET PASSWORD" className="px-5 py-2 mt-2" style={{background:"linear-gradient(to left,#3C53AC,#B6DFEF)",borderRadius:"50px"}}/>
                                <Link className="mt-3" to="/login" onClick={() => changeForm(0)}>Login</Link>
                            </form>
                        </div>
                    </div>
                    <Link to="/user" ref={loggedLink}></Link>
                </div>
            </div>
        </>
    );
};

export default Login;