import neurophy from "../images/neurophysiology.jpg";

const Neurophy = () => {
    return ( 
        <>
            <div className="neurophy">
                <img src={neurophy} alt="" width="100%"/>
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>
                        GVH Medical Hospital - Neurophysiology Unit is a diagnostic department under the wing of Medical Ancillary Services - Ambulatory Services Division with two satellites units one for Chong Hua Hospital in Cebu City and in Mandaue City. These two satellites units can serve patients coming from the province and nearby areas in the rest of the Visayas and Mindanao regions. The units are equipped with state of the art equipment capable of performing Neurophysiologic and Evoked Potential Studies (EEG, BAER, VER, EMG-NCV and RNS) that aims to assess brain, nerve, and muscle function and health.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>
                        Our patients can avail of above services rendered by a team composed of a diverse group of medical specialists (Adult Neurologists, Pediatric Neurologists, Rehabilitation Medicine Specialists), nurses, ancillary technicians, and unit clerks that assist customers both as out-patient and in-patient setting.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>
                        The unit operates Monday to Friday, from 8:00 AM to 4:00 PM and follows a per appointment protocol (either via unit visit or via phone call) to allow thorough patient-directed communication, which includes procedural instructions, verification of physician’s request, and avenue for further clarifications.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </>
     );
}
 
export default Neurophy;