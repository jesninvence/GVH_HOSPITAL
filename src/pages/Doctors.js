<<<<<<< HEAD
import { Link , useSearchParams} from "react-router-dom";
import axios from "axios";
import { useEffect , useState } from "react";

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
    const [lookSpecialty,setLookSpecialty] = useState("");
    const [specialties,setSpecialties] = useState([]);
    const [params] = useSearchParams();
    
=======
import pdtric from "../images/pediatric1.jpg";
import pdtric1 from "../images/pediatirc.avif";
import doctor1 from "../images/doctor12.webp";
import doctor2 from "../images/doctor9.avif";
import axios from "axios";
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";

const Doctors = () => {
    const [doctors,setDoctors] = useState([]);
>>>>>>> master

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
<<<<<<< HEAD
        })

        axios.get("http://localhost/GVH_PHP/get_specialties.php")
        .then(response => {
            if (typeof response.data == "object") {
                setSpecialties(response.data);
            }
        });

        setLookSpecialty(params.get("specialty"));
=======
            
        })
>>>>>>> master
    },[]);

    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4">
                        <div className="fndDoctors">
                            <label htmlFor="">Search</label>
                            <br/>
                            <input type="text" placeholder="Doctor's Name" width="100%"/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="category">
                            <label htmlFor="">Specialties:</label>
                            <br/>
                            <select name="" id="" width="100%" onChange={event => setLookSpecialty(event.target.value)}>
                                {
                                    specialties.map(specialty => {
                                        let result =  <option value={specialty.id}>
                                                        {specialty.name}
                                                    </option>                                     
                                        return (
                                            result
                                        );
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="doctors">
                    {
                        doctors.map(doctor => {
                            if (doctor.specialty_id != lookSpecialty && lookSpecialty) return (<></>);
                            return (
                                <div className="row g-0 position-relative">
                                    <div className="col-md-4 mb-md-0">
                                        <img src={doctor.profile_image} alt="" width="50%"/>
                                    </div>
                                    <div className="col-md-7 p-4 ps-md-0">
                                        <h5 className="mt-0">Dr. {`${doctor.firstname} ${doctor.lastname}`}</h5>
                                        <p>{doctor['specialty_name']}</p>
                                        <p>{doctor.experience} yrs experience</p>
                                        <p>Site: GVH Medical Hospital</p>
                                        <button className="book">VIEW PROFILE</button>
                                        <br />
                                        <Link to={"/book?doctor_id=" + doctor.doctor_id}>
                                            <button className="cntct">BOOK</button>
                                        </Link>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li className="pag-item"><a className="page-link" href="">1</a></li>
                                <Link to="/doctors2" style={{textDecoration: "none"}}>
                                    <li className="pag-item"><a className="page-link" href="">2</a></li>
                                </Link>
                                <li className="pag-item"><a className="page-link" href="">3</a></li>
                                <li className="page-item">
                                    <Link to="/doctors2" style={{textDecoration: "none"}}>
                                        <a className="page-link" href="" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
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