import emerwall from "../images/emergencyacutecare.jpg";

const EmergencyAc = () => {
    return ( 
        <>
            <div className="emerwall">
                <img src={emerwall} alt="" width="100%"/>
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>
                        The Emergency Department at GVH Medical Hospital operates 24 hours a day and provides urgent care to patients with major illnesses, traumatic injury or other health issues that require immediate treatment. The staff includes licensed physicians, nurses, medical technologists and other healthcare professionals who strive to get you the care you need as quickly as possible.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>The Emergency Department staff sees patients in an order determined by the severity of illness. The staff sees the most critical patients first. If your situation is less urgent, you may have to wait to be attended to. Rest assured ALL patients will be given attention.</p>
                    </div>
                    <div className="col-12">
                        <p>The following are the steps to expect when you arrive at the ED:</p>
                    </div>
                    <br /><br /><br />
                    <div className="col-12">
                        <p>
                        · TRIAGE – triage is the process of determining the severity of a patient’s condition. Patients with the most severe emergencies receive immediate treatment. A registered nurse will take your medical history and take your vital signs. The triage nurse will assign you a priority level based on your medical history and current condition according to the Emergency Severity Index Algorithm: Level 1 – Resuscitation (Immediate life-saving intervention), Level 2 – Emergency (High risk situations), Level 3 – Urgent (Low risk), Level 4 – Semi urgent (Low risk) Level 5 – Non urgent (Low risk). Should your symptoms worsen as you wait, notify the emergency personnel right away.
                        </p>
                    </div>
                    <br /><br />
                    <div className="col-12">
                        <p>
                        · REGISTRATION – registration allows the ED staff to gather information for your patient record, takes your vital signs and obtain your consent for treatment. 
                        </p>
                    </div>
                    <br /><br />
                    <div className="col-12">
                        <p>
                        · TREATMENT – all patients coming into the ED receives treatment from a physician. This will include laboratory and diagnostic testing as well as medication administration.
                        </p>
                    </div>
                    <br /><br />
                    <div className="col-12">
                        <p>
                        · REEVALUATION – The ED physician will reevaluate your condition once your test results are available. It may give them additional insight into the type of treatment you need. The ER nurse will continually monitor your condition while at the ED.
                        </p>
                    </div>
                    <br /><br />
                    <div className="col-12">
                        <p>
                        · DISCHARGE - after your care, it will be determined whether you can be safely discharged or you need to be admitted to the hospital for further care. The plan of care will be discussed and explained to you.  
                        </p>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </>
     );
}
 
export default EmergencyAc;