import cancerc from "../images/cancerc.jpg";

const CancerCenter = () => {
    return ( 
        <>
            <div className="cancercenter">
                <img src={cancerc} alt="" width="100%"/>
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>
                        The Cancer Center caters to the diagnosis and treatment of malignancies 
                        and hematologic disorders. The facility is equipped with the best team 
                        of doctors, nurses, pharmacists and other healthcare professionals who 
                        are well-trained and proficiently skilled to work with cancer patients.
                         Chemotherapeutic medications are expertly handled and aseptically compounded 
                         by experienced pharmacists in a controlled environment utilizing the 
                         biosafety cabinet. The Cancer Center offers a wide range of services, 
                         including cancer screening and prevention, diagnostic testing, and 
                         chemotherapy. Support services such as nutrition counseling, psychological 
                         support, and pain management are also offered to help patients cope with 
                         the physical, mental and emotional challenges of cancer treatment. 
                         Nurses are trained in basic chemotherapy course by the Philippine Oncology 
                         Nurses’ Association (PONA) and have an in-house training for continuing 
                         education for the latest trends in cancer treatment. The team is also 
                         involved in research studies and clinical trials that aim to develop new 
                         cancer therapies and is the only institution to offer a fellowship training 
                         program in medical oncology.
                        </p>
                        <p>In the challenging battle against the big C, we will be with you every step of the way.</p>
                        <p>The following services are available in our center:</p>
                        <p>     · Chemotherapy</p>
                        <p>         o Intravenous</p>
                        <p>         o Subcutaneous</p>
                        <p>         o Intrathecal</p>
                        <p>         o Intravesical</p>
                        <p>         o Oral</p>
                        <p>     · Immunotherapy</p>
                        <p>     · Blood Transfusion</p>
                        <p>         o PRBC, Platelet, Whole Blood</p>
                        <p>     · Diagnostic Bone Marrow Aspiration and/or Biopsy</p>
                        <p>     · Lumbar Tap</p>
                        <p>     · Therapeutic Phlebotomy</p>
                        <p>     · Pulse Therapy</p>
                        <p>     · Hydration of Fluids</p>
                        <p>     · Survivorship</p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
     );
}
 
export default CancerCenter;