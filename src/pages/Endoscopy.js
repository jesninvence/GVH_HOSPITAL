import endoscopy from "../images/endoscopy.jpg";

const Endoscopy = () => {
    return ( 
        <>
            <div className="endoscopy">
                <img src={endoscopy} alt="" />
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>The GVH Medical Hospital Endoscopy unit with its state-of the art facilities and competent staff offers a full range of diagnostic and therapeutic endoscopic procedures that cater to the needs our patients. These special investigations of the digestive system include upper GI endoscopy, duodenoscopy, flexible sigmoidoscopy, and colonoscopy. We also offer specialized procedures such as endoscopic retrograde cholangiopancreatography (ERCP), polypectomy, endoscopic dilation which depends on specific indications.</p>
                    </div>
                    <div className="col-12">
                        <p>Upper GI endoscopy or gastroscopy is indicated for difficulty in swallowing, dyspepsia, heartburn, abdominal pain, regurgitation, or hematemesis. While flexible sigmoidoscopy and colonoscopy is indicated for changes in bowel pattern, abdominal pain, unexplained anemia, or the presence of bloody or tarry stool among other symptoms. Furthermore, colonoscopy is advised for average-risk individuals without symptoms as part of screening for colon cancer. It is best to check with your gastroenterologist for a complete evaluation prior to the procedure.</p>
                    </div>
                    <div className="col-12">
                        <p>Our unit has 2 towers with 4 gastroscopes, 3 colonoscopes and 1 duodenoscope. We follow international protocols for the disinfection and sterilization of our equipment to ensure the safety of our patients.</p>
                    </div>
                    <div className="col-12">
                        <p>A standard endoscopy starts with patient care and instruction at least a day prior to the scheduled procedure where he is advised with specific diet and bowel preparation. Upon arrival at the unit, the patient is assisted by highly trained nurses who will conduct routine interview and prepare the patient at the assigned room. The anesthesia team are then called to tend to patients for moderate sedation. The gastroenterologist then uses a flexible endoscope with a built-in camera at its tip to evaluate the upper or lower GI tract. The average duration of the endoscopy is 10 minutes for gastroscopy and 15-20 minutes for colonoscopy which also depends if additional procedures are necessary such as rubber band ligation, polypectomy, etc. After the procedure, the patients are brought to post-anesthesia care where they are closely monitored until they awaken. Special instructions are then given to the patient and caregiver about the results of the procedure, medication and follow up prior to patient discharge.</p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
     );
}
 
export default Endoscopy;