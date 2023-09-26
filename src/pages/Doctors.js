import pdtric from "../images/pediatric1.jpg";
import pdtric1 from "../images/pediatirc.avif";
import doctor1 from "../images/doctor12.webp";
import doctor2 from "../images/doctor9.avif";
import axios from "axios";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost/GVH_PHP/get_doctors.php")
        .then(response => {
            if (typeof response.data == "object") {
                let results = response.data;
                results.forEach(result => {
                    const data = new FormData();
                    data.append("id",result.specialty_id);
                    axios.post("http://localhost/GVH_PHP/get_specialties.php",data)
                    .then(response => { 
                        if (typeof response.data == "object") {
                            result["specialty_name"] = response.data.name;
                            setDoctors(results);
                        }
                    })
                });
            }
            
        })
    },[]);

    return ( 
        <>
            <div className="container">
                <div>
                    <label htmlFor="">Doctors</label>
                    <input type="text" />
                </div>
                <div>
                    <select name="" id="">
                        <option value="">Surgery</option>
                        <option value="">Pediatrics</option>
                        <option value="">Surgery</option>
                        <option value="">Pediatrics</option>
                        <option value="">Surgery</option>
                        <option value="">Pediatrics</option>
                    </select>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="doctors">
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={pdtric} alt="" width="50%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <p>MD - Pediatrics, Lactation Consultant, Pediatrics - Adolescent, Pediatrics - Ambulatory</p>
                            <p>7 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                        <div className="col-md-3" style={{backgroundColor: "#1E90FF"}}>
                            <h5 className="mt-0 text-center text-white">Dr. Emalyn B. Gengup</h5>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={pdtric1} alt="" width="50%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <p>MD - Pediatrics, Lactation Consultant, Pediatrics - Adolescent, Pediatrics - Ambulatory</p>
                            <p>6 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                        <div className="col-md-3" style={{backgroundColor: "#1E90FF"}}>
                            <h5 className="mt-0 text-center text-white">Dr. Sandra N. Shessh</h5>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctor1} alt="" width="50%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <p>Cardiovascular Surgery</p>
                            <p>5 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                        <div className="col-md-3" style={{backgroundColor: "#1E90FF"}}>
                            <h5 className="mt-0 text-center text-white">Dr. Anthony F. Owshi</h5>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctor2} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <p>Cardiovascular Surgery</p>
                            <p>9 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                        <div className="col-md-3" style={{backgroundColor: "#1E90FF"}}>
                            <h5 className="mt-0 text-center text-white">Dr. Frank P. Ohdamn</h5>
                        </div>
                    </div>
                </div>
                {
                    doctors.map(doctor => {
                        return (
                            <div className="row g-0 position-relative">
                                <div className="col-md-4 mb-md-0">
                                    <img src={doctor.profile_image} alt="" width="50%"/>
                                </div>
                                <div className="col-md-7 p-4 ps-md-0">
                                    {console.log(doctor,doctor['specialty_name'])}
                                    <p>{doctor['specialty_name']}</p>
                                    <p>{doctor.experience} yrs experience</p>
                                    <p>Site: GVH Medical Hospital</p>
                                    <button className="book">VIEW PROFILE</button>
                                    <br />
                                    <Link to={"/book?doctor_id=" + doctor.doctor_id}>
                                        <button className="cntct">BOOK</button>
                                    </Link>
                                </div>
                                <div className="col-md-3" style={{backgroundColor: "#1E90FF"}}>
                                    <h5 className="mt-0 text-center text-white">Dr. {`${doctor.firstname} ${doctor.lastname}`}</h5>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
     );
}
 
export default Doctors;