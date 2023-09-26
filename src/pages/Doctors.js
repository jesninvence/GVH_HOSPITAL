import pdtric from "../images/pediatric1.jpg";
import pdtric1 from "../images/pediatirc.avif";
import doctor1 from "../images/doctor12.webp";
import doctor2 from "../images/doctor9.avif";
import { Link } from "react-router-dom";
import doctorf1 from "../images/doctorf1.avif";
import doctorf2 from "../images/doctorf2.webp";
import doctorf3 from "../images/doctorf3.webp";
import doctorf4 from "../images/doctorf4.jpg";
import doctorm1 from "../images/doctorm1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect , useState } from "react";

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
                            <select name="" id="" width="100%">
                                <option value="">All</option>
                                <option value="">Anesthesiology</option>
                                <option value="">Family and Community ...</option>
                                <option value="">Internal Medicine</option>
                                <option value=""> -Cardiology</option>
                                <option value=""> -Dermatology</option>
                                <option value=""> -Endocrinology</option>
                                <option value=""> -Gastroenterology</option>
                                <option value=""> -Hematology</option>
                                <option value=""> -Infectious Diseases</option>
                                <option value=""> -Nephrology</option>
                                <option value=""> -Neurology</option>
                                <option value=""> -Oncology</option>
                                <option value=""> -Pulmonary and Critical...</option>
                                <option value=""> -Rehabilitation Medicine</option>
                                <option value=""> -Rheumatology</option>
                                <option value="">Obstetrics & Gynecology</option>
                                <option value="">Ophthalmology</option>
                                <option value="">Orthopedics</option>
                                <option value="">Pathology</option>
                                <option value="">Pediatrics</option>
                                <option value="">Radiology</option>
                                <option value="">Surgery</option>
                                <option value=""> -Breast Surgery</option>
                                <option value=""> -Cardiovascular Surgery</option>
                                <option value=""> -Colorectal Surgery</option>
                                <option value=""> -Dentistry</option>
                                <option value=""> -General Surgery</option>
                                <option value=""> -Hepatobiliary Surgery</option>
                                <option value=""> -Minimally Invasive Surgery</option>
                                <option value=""> -Neurosurgery</option>
                                <option value=""> -Otorhinolaryngology ...</option>
                                <option value=""> -Pediatric Surgery</option>
                                <option value=""> -Plastic & Reconstructive ...</option>
                                <option value=""> -Surgical-Oncology</option>
                                <option value=""> -Thoracic Surgery</option>
                                <option value=""> -Transplant & Vascular ...</option>
                                <option value=""> -Urology</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className="doctors">
                    {/* <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={pdtric} alt="" width="50%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Emalyn B. Gengup</h5>
                            <p>MD - Pediatrics, Lactation Consultant, Pediatrics - Adolescent, Pediatrics - Ambulatory</p>
                            <p>7 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <Link to="/profile1">
                                <button className="book">VIEW PROFILE</button>
                            </Link>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={pdtric1} alt="" width="50%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Sandra N. Shessh</h5>
                            <p>Family & Community Medicine</p>
                            <p>6 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctor1} alt="" width="50%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Anthony F. Owshi</h5>
                            <p>Cardiovascular Surgery</p>
                            <p>5 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctor2} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Frank P. Ohdamn</h5>
                            <p>Anesthesia</p>
                            <p>9 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctorf1} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Shane S. Farsan</h5>
                            <p>Internal Medicine</p>
                            <p>3 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctorf2} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Jane P. Colan</h5>
                            <p>Obstetrics & Gynecology</p>
                            <p>3 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctorf3} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Sarah C. Ersali</h5>
                            <p>Orthopaedics</p>
                            <p>4 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctorf4} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Tarim K. Lushan</h5>
                            <p>Radiology</p>
                            <p>9 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctorm1} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Mike T. Soran</h5>
                            <p>Surgery</p>
                            <p>10 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div> */}
                    {
                        doctors.map(doctor => {
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
            </div>
        </>
     );
}
 
export default Doctors;