import wallPaper from "../images/wallpaperc7.jpg";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={wallPaper} className="wallpaper " alt="" width="100%" />
                <div className="text text-white">
                    <h1>We Provide </h1>
                    <h1 className="medical"> Medical </h1>
                    <h1> Services That You Can Trust</h1>
                </div>
                <div className="text-center mb-3">
                    {/* <button className="apnt1">Get Appointment</button> */}
                    {/* <button className="lrn">Learn more</button> */}
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Search.."/><FontAwesomeIcon icon={faMagnifyingGlass} style={{position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", color: "white"}}/>
                </div>
            </div>
        </>
    );
}

export default Header;