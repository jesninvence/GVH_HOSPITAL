import wallPaper from "../images/wallpaperc7.jpg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useEffect , useState , useRef } from "react";
import axios from "axios";

const Header = () => {
    const [specialties,setSpecialties] = useState([]);
    const searchbar = useRef();
    const search_result = useRef();

    useEffect(() => {
        axios.get("http://localhost/GVH_PHP/get_specialties.php")
        .then(response => {
            if (typeof response.data == "object") setSpecialties(response.data);
        });
        window.addEventListener("click",function(event) {
            if (event.target != searchbar.current && event.target != search_result.current && search_result.current) search_result.current.classList.add("d-none");
            else if (search_result.current) search_result.current.classList.remove("d-none");
        })
    },[]);
    return (
        <>
            <div className="header">
                <img src={wallPaper} className="wallpaper " alt="" width="100%" />
                <div className="content">
                    <div className="text text-white">
                        <h1>We Provide </h1>
                        <h1 className="medical"> Medical </h1>
                        <h1> Services That You Can Trust</h1>
                    </div>
                    <div className="text-center">
                        <button className="apnt1">Get Appointment</button>
                        <button className="lrn">Learn more</button>
                    </div>
                    <div className="searchBar" style={{borderRadius:"10px"}}>
                        <input type="text" placeholder="Search.." ref={searchbar}/><FontAwesomeIcon icon={faMagnifyingGlass} style={{position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", color: "white"}}/>
                        <div className="search-result d-none" ref={search_result}>
                            {
                                specialties.map(specialty => {
                                    return (
                                        <Link to={`/doctor?specialty=${specialty.id}`}>{specialty.name}</Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;