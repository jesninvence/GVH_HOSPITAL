import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const loggedLink = useRef();

    const signin = function(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        
        axios.post(`http://localhost/GVH_PHP/login.php`,data)
        .then(response => {
            let account = response.data;
            console.log(account);
            if (account == "") console.log("NO ACCOUNT FOUND!");
            else {
                loggedLink.current.click();
            }
        });
    } 

    return (
        <>
            <form method="GET" onSubmit={signin}>
                <input type="text" name="email" placeholder="email" />
                <input type="text" name="password" placeholder="password"/>
                <input type="submit" />
           </form>
           <Link to="/" ref={loggedLink}></Link>
        </>
    );
};

export default Login;