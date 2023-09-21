import pdtric from "../images/pediatric1.jpg";
import pdtric1 from "../images/pediatirc.avif";
import doctor1 from "../images/doctor12.webp";
import doctor2 from "../images/doctor9.avif";

const Doctors = () => {
    return ( 
        <>
            <div className="container">
                <div className="row g-0 position-relative">
                    <div className="col-md-4 mb-md-0 p-md-4">
                        <img src={pdtric} alt="" width="50%"/>
                    </div>
                    <div className="col-md-8 p-4 ps-md-0">
                        <h5 className="mt-0">Name: Emalyn B. Gengup, M.D.</h5>
                        <p>Specialties: Pediatrics</p>
                        <p>Gastroenterology</p>
                        <button className="book">BOOK</button>
                        <br /><br />
                        <button className="cntct">CONTACT</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-0 position-relative">
                    <div className="col-md-4 mb-md-0 p-md-4">
                        <img src={pdtric1} alt="" width="50%"/>
                    </div>
                    <div className="col-md-8 p-4 ps-md-0">
                        <h5 className="mt-0">Name: Sandra N. Shessh, M.D.</h5>
                        <p>Specialties: Pediatrics</p>
                        <p>Gastroenterology</p>
                        <button className="book">BOOK</button>
                        <br /><br />
                        <button className="cntct">CONTACT</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-0 position-relative">
                    <div className="col-md-4 mb-md-0 p-md-4">
                        <img src={doctor1} alt="" width="50%"/>
                    </div>
                    <div className="col-md-8 p-4 ps-md-0">
                        <h5 className="mt-0">Name: Dr. Anthony F. Owshi</h5>
                        <p>Specialties: Surgery</p>
                        <br />
                        <button className="book">BOOK</button>
                        <br /><br />
                        <button className="cntct">CONTACT</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row g-0 position-relative">
                    <div className="col-md-4 mb-md-0 p-md-4">
                        <img src={doctor2} alt="" width="50%"/>
                    </div>
                    <div className="col-md-8 p-4 ps-md-0">
                        <h5 className="mt-0">Name: Dr. Frank P. Ohdamn</h5>
                        <p>Specialties: Surgery</p>
                        <br />
                        <button className="book">BOOK</button>
                        <br /><br />
                        <button className="cntct">CONTACT</button>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex position-relative">
                            <img src={pdtric} alt="" className="flex-shrink-0 me-3" width="10%"/>
                            <div>
                                <h5 className="mt-0">Emalyn B. Gengup, M.D.</h5>
                                <p>Pediatrics</p>
                                <p>Gastroenterology</p>
                                <button>BOOK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
     );
}
 
export default Doctors;