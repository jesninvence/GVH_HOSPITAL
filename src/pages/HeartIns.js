import heartins from "../images/heartins.jpg";

const HeartIns = () => {
    return ( 
        <>
            <div className="heartins">
                <img src={heartins} alt="" width="100%"/>
            </div>
            <br /><br /><br /><br/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>GVH Medical Hospital Heart Institute proudly celebrates its 20th Year of Existence on February 14, 2023</p>
                    </div>
                    <div className="col-12">
                        <p>
                        In 2003, the GVH Medical Hospital Heart Institute was established. The Adult Cardiology Training program was launched 
                        and became the first Subspecialty Fellowship training program offered at GVH Medical Hospital. This 3 year program is 
                        duly accredited by the Philippine Heart Association - Specialty Board of Adult Cardiology. Our latest 5-year accred
                        itation status was earned in May 2020. Over the years, we have been able to produce 
                        27 graduates who are all Board Certified. Currently busy with their respective careers catering to various patients 
                        all over the Visayas. Some of of them went on to further training in the fields of Invasive Cardiology, Peripheral 
                        Vascular Medicine, Echocardiography, Cardiac CT/MR and Cardiac Rehabilitation and soon Heart Failure Specialty. All 
                        are proudly adhering to the CHH battlecry : Healing with passion, Caring with Compassion.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>
                        Over the last 4 years, we have added 2 new Subspecialties. These are the Research Fellowship Training in 
                        Echocardiography and Peripheral Vascular Medicine. Each program requires an additional year of training.
                         We have had 2 graduates in Echocardiography and one in Peripheral Vascular Medicine. All 3 have also been 
                         duly certified by their National Subspecialty societies.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>
                        With much optimism and commitment, we continue to strive for excellence. We continue to upgrade our Non 
                        Invasive services, especially in the field of multimodality imaging studies (Cardiac MR, Cardiac CT, CAC, 
                        Nuclear Studies and other Stress Imaging modalities. Likewise, we embark on Structural Heart Interventions. 
                        These interventions (TAVR, EVAR, Invasive Peripheral Arterial Disease interventions, Complex PCI procedures, 
                        ICD implantation, Radiofrequency Catheter ablation and lately Cardiac Resynchronization Therapy ) are 
                        slowly changing the landscape of Cardiovascular practice in this part of the country. On the Preventive 
                        Cardiology aspect, we now promote Virtual Cardiac Rehabilitation to help our patients recover from various 
                        cardiac events. We certainly look forward to more interventions and innovations in Cardiology. We strengthen
                         our committment to help our patients’ cardiac care.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
     );
}
 
export default HeartIns;