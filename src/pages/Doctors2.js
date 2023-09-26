import {Link} from "react-router-dom";
import doctorf5 from "../images/doctorf5.avif";
import doctorf6 from "../images/doctorf6.jpg";
import doctorf7 from "../images/doctorf7.jpg";
import doctorm2 from "../images/doctorm2.jpg";
import doctorm3 from "../images/doctorm3.jpg";
import doctorm4 from "../images/doctorm4.jpg";
import doctorf9 from "../images/doctorf9.avif";
import doctorf10 from "../images/doctorf10.avif";
import doctorf11 from "../images/doctorf11.avif";

const Doctors2 = () => {
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
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctorf5} alt="" width="50%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Raya B. Trits</h5>
                            <p>Anesthesia</p>
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
                            <img src={doctorf6} alt="" width="50%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Paulin J. Shonam</h5>
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
                            <img src={doctorf7} alt="" width="50%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Erica T. Scao</h5>
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
                            <img src={doctorm2} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Ronald R. Spaes</h5>
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
                            <img src={doctorm3} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Geral P. Daoc</h5>
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
                            <img src={doctorm4} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Mike H. Gomez</h5>
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
                            <img src={doctorf9} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Lani Y. Velez</h5>
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
                            <img src={doctorf10} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Farah I. Lopez</h5>
                            <p>Pathology</p>
                            <p>9 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                    <div className="row g-0 position-relative">
                        <div className="col-md-4 mb-md-0">
                            <img src={doctorf11} alt="" width="55%"/>
                        </div>
                        <div className="col-md-7 p-4 ps-md-0">
                            <h5 className="mt-0">Dr. Mika N. Gonzales</h5>
                            <p>Ophthalmology</p>
                            <p>10 yrs experience</p>
                            <p>Site: GVH Medical Hospital</p>
                            <button className="book">VIEW PROFILE</button>
                            <br />
                            <button className="cntct">BOOK</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link to="/doctor" style={{textDecoration: "none"}}>
                                        <a className="page-link" href="" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </Link>
                                </li>
                                <Link to="/doctor" style={{textDecoration: "none"}}>
                                    <li className="pag-item"><a className="page-link" href="">1</a></li>
                                </Link>
                                <li className="pag-item"><a className="page-link" href="">2</a></li>
                                <li className="pag-item"><a className="page-link" href="">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Doctors2;