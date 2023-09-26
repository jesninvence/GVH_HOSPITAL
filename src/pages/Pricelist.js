const Pricelist = () => {
    return ( 
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">Pricelist</h1>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="pcbtn">
                            <br /><br />
                            <button className="active">BONE DENSITOMETRY</button>
                            <br />
                            <button>CARDIAC REHABILITATION</button>
                            <br />
                            <button>CARDIOLOGY</button>
                            <br />
                            <button>CATHETERIZATION LABORATORY</button>
                            <br />
                            <button>CENTER FOR SLEEP DISORDERS</button>
                            <br />
                            <button>COMPUTED TOMOGRAPHY SCAN (CT SCAN)</button>
                            <br />
                            <button>ENDOSCOPY</button>
                            <br />
                            <button>EXECUTIVE HEALTH UNIT</button>
                            <br />
                            <button>EYE INSTITUTE</button>
                            <br />
                            <button>FOOD & NUTRITION SERVICES (DIETARY)</button>
                            <br />
                            <button>GENERAL RADIOLOGY</button>
                            <br />
                            <button>HEMATOLOGY-ONCOLOGY</button>
                            <br />
                            <button>LABORATORY</button>
                            <br />
                            <button>MAGNETIC RESONANCE IMAGING (MRI)</button>
                            <br />
                            <button>MAMMOGRAPHY</button>
                            <br />
                            <button>NEUROPHYSIOLOGY</button>
                            <br />
                            <button>NUCLEAR MEDICINE SERVICES</button>
                            <br />
                            <button>OUTPATIENT</button>
                            <br />
                            <button>PULMONOLOGY</button>
                            <br />
                            <button>RADIATION ONCOLOGY</button>
                            <br />
                            <button>REHABILITATION MEDICINE</button>
                            <br />
                            <button>RENAL SERVICES</button>
                            <br />
                            <button>TRANSVAGINAL SONOGRAPHY (TVS)</button>
                            <br />
                            <button>ULTRASOUND</button>
                            <br />
                        </div>
                    </div>
                    <div className="col-6">
                        <br /><br />
                        <div className="card" style={{boxShadow: "0px 0px 15px rgb(186, 186, 186)"}}>
                            <div className="card-header text-center bg-info text-white">
                                <h3>GVH MEDICAL HOSPITAL</h3>
                                <h5>BONE MINERAL DENSITOMETRY UPDATED PRICES</h5>
                            </div>
                            <div className="card-body">
                                <table className="table" style={{border: "1px solid gray"}}>
                                    <thead>
                                        <tr>
                                            <th scope="col" className="bg-primary text-white">PROCEDURE</th>
                                            <th scope="col" className="bg-primary text-white">FEE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>CENTRAL BMD</th>
                                            <td>₱3,899.00</td>
                                        </tr>
                                        <tr>
                                            <th>CENTRAL BMD WITH FOREARM</th>
                                            <td>₱4,453.00</td>
                                        </tr>
                                        <tr>
                                            <th>TOTAL BODY BMD</th>
                                            <td>₱5,014.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p>EFFECTIVE DATE: DECEMBER 1, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </>
     );
}
 
export default Pricelist;