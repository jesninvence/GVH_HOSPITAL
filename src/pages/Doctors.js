import pdtric from "../images/pediatric1.jpg";
import pdtric1 from "../images/pediatirc.avif";
import doctor1 from "../images/doctor12.webp";
import doctor2 from "../images/doctor9.avif";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctors = () => {
    return ( 
        <>
            <div className="container">
                <div className="fndDoctors">
                    <label htmlFor="">Search</label>
                    <br/>
                    <input type="text" placeholder="Doctor's Name"/>
                </div>
                <div className="category">
                    <label htmlFor="">Specialties</label>
                    <br/>
                    <select name="" id="">
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
                            <Link to="/profile1">
                                <button className="book">VIEW PROFILE</button>
                            </Link>
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
            </div>
            {/* <div className="container">
            </div>
            <div className="container">
            </div>
            <div className="container">
            </div> */}
        </>
     );
}
 
export default Doctors;