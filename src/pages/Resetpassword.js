import axios from "axios";
import { useSearchParams , useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Resetpassword = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        let data = new FormData();
        data.append("email",params.get("email"));
        axios.post("http://localhost/GVH_PHP/email_exist.php",data)
        .then(response => {
            if (response.data == "Email Exist!") {}
            else navigate("/");
        });
    },[]);

    function resetPassword(event) {
        event.preventDefault();
        
        let data = new FormData(event.target);
        data.append("token",params.get("token"));


        axios.post("http://localhost/GVH_PHP/reset_password.php",data)
        .then(response => {
            if (response.data == "PASSWORD RESET!") navigate("/");
        });

    }

    return (
        <>
           <div id="reset-password" >
                <div>
                    <div>
                        <h1 style={{color:"#0E9BD3",marginBottom:"3rem"}}>RESET PASSWORD</h1>
                        <form onSubmit={resetPassword}>
                            <div>
                                <input type="text" className="w-100" placeholder="email" name="email" value={params.get("email")}/>
                            </div>
                            <div>
                                <input type="text" className="w-100" placeholder="password" name="password"/>
                            </div>
                            <div>
                                <input type="text" className="w-100" placeholder="confirm password" name="confirm-password"/>
                            </div>
                            <div className="text-center mt-4">
                                <input type="submit" value="RESET PASSWORD" style={{background:"#0E9BD3",color:"white",padding:".7rem 2rem",borderRadius:"50px"}}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resetpassword;