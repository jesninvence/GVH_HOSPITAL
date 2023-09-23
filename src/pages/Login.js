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

    const signin = function(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        axios.post(`http://localhost/GVH_PHP/login.php`,data)
        .then(response => {
            let result = response.data;
            console.log(result);
            if (result == "Provide Email!") {
                
            }
            if (result == "" || !result) console.log("NO ACCOUNT FOUND!");
            else {
              /*   loggedLink.current.click(); */
            }
        });
    }

    const changeForm = function(event) {
        event.preventDefault();
        forms[currForm].current.classList.add("d-none");
        setCurrForm(1);
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
                                <h3 style={{color:"#0E9BD3"}}>USER LOGIN</h3>
                                <div style={{width:"17rem"}} className="mb-4 mt-3">
                                    <input style={{background:"#B6DFEF",borderRadius:"50px"}} className="py-2 pe-5 ps-4 w-100" type="text" name="email" placeholder="email" />
                                </div>
                                <div style={{width:"17rem"}} className="mb-3">
                                    <input style={{background:"#B6DFEF",borderRadius:"50px"}} className="py-2 pe-5 ps-4" type="text" name="password" placeholder="password"/> 
                                </div>
                                <div className="d-flex justify-content-between" style={{fontSize:".8rem",width:"17rem"}}>
                                    <div style={{color:"gray",display:"flex",alignItems:"center",gap:".3rem"}}>
                                        <label style={{position:"relative",display:"inline-block",width:"1rem",height:"1rem",border:"1px solid blue",borderRadius:"50%",cursor:"pointer"}}>
                                            <input className="d-none" type="checkbox" />
                                            <span style={{position:"absolute",top:"-20%",justifyContent:"center",alignItems:"center",fontSize:"1.2rem"}}>
                                                <FontAwesomeIcon icon={faCheck} />
                                            </span>
                                        </label>
                                        Remember me
                                    </div>
                                    <a style={{color:"gray",textDecoration:"none"}} href="#" onClick={changeForm}>Forgot password?</a>
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
                            </form>
                        </div>
                    </div>
                    <Link to="/" ref={loggedLink}></Link>
                </div>
            </div>
        </>
    );
};

export default Login;