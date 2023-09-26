import pharmacy from "../images/pharmacy.jpg";

const Pharmacy = () => {
    return ( 
        <>
        <div className="pharmacy">
            <img src={pharmacy} alt="" width="100%"/>
        </div>
        <br /><br /><br />
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>
                    The provision of dispensary services to all patients of GVH Medical Hospital is primarily undertaken by the hospital’s pharmacy, supported by its satellite units in the Emergency Department, Hematology-Oncology Unit and Operating Room, through the Supply Chain Office and the Pharmacy and Therapeutics Committee. The GVH Medical Hospital Pharmacy is manned by registered pharmacists and clinical pharmacists, pharmacy assistants and clerks, under the supervision of the chief pharmacist, assistant chief pharmacist and senior pharmacy leaders. 24-hour pharmacy services are provided everyday including on holidays for both in-patients and out-patients, that include medication preparation and compounding, medication dispensing, drug counselling and patient education, unit-dose drug delivery system (for in-patients) and inventory management that extends to floor stocks and E-carts. Medications and medication products in the hospital’s formulary ensure the availability of drugs listed in the Philippine National Drug Formulary (PNDF) as well as essential non-PNDF medications. To maintain the high quality of service so that safe and effective pharmaceutical products and procedures are provided to patients, the pharmacy staff regularly undergo continuing professional development activities, as well as provide relevant learning activities in collaboration with the medical, nursing and ancillary staff.
                    </p>
                </div>
            </div>
        </div>
        <br /><br /><br />
        </>
     );
}
 
export default Pharmacy;