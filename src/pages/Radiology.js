import radiowall from "../images/radiology.jpg";

const Radiology = () => {
    return ( 
        <>
            <div className="radiowall">
                <img src={radiowall} alt="" width="100%"/>
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>
                        The Department of Radiology in GVH Medical Hospital is dedicated to providing the best imaging services for its patients and offering their referring physicians a comprehensive radiologic evaluation to provide the best possible picture of their patients.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>To achieve this, the department stays updated with state-of-the art imaging equipment which include:</p>
                    </div>
                    <div className="col-12">
                        <p>· 512-slice CT Scan</p>
                        <p>· 1.5-Tesla MRI Scanners</p>
                        <p>· Digital, Computed and Portable Radiography</p>
                        <p>· Digital Mammography and Tomosynthesis</p>
                        <p>· Positron-Emission Tomography – Computed Tomography Units</p>
                        <p>· Ultrasound</p>
                    </div>
                    <div className="col-12">
                        <p>
                        All results are stored in a unified Radiology Information – Picture Archiving and Communications system which offers cross-disciplinary image and information management to allow correlation between different modalities, in different time periods, accessible throughout the entire hospital.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>To provide comprehensive imaging evaluation, the department has 21 consultants with local and international training. All of our consultant staff are fellows of the Philippine College of Radiology, and are also recognized as fellows in their different subspecialties such as the Computed Tomography and Magnetic Resonance Imaging Society of the Philippines, Ultrasound Society of the Philippines and Philippine Society of Vascular and Interventional Radiology, to name a few, accompanied by the competent and board certified radiologic technologists and nurses in their different units.</p>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </>
     );
}
 
export default Radiology;