import renalwall from "../images/renalwall.jpg";

const RenalUnit = () => {
    return ( 
        <>
         <div className="renalwall">
            <img src={renalwall} alt="" width="100%"/>
         </div>
         <br /><br /><br />
         <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>The GVH Medical Hospital Renal Unit is a dialysis unit that offers 2 treatment options for patients with end stage renal disease. It provides hemodialysis and peritoneal dialysis to patients with chronic kidney disease requiring RRT.</p>
                </div>
                <div className="col-12">
                    <p>Our units have a combined 78 hemodialysis machines, All these machines are capable of SLED. Four of these are capable of HDF. Reusable dialyzers as well as single use dialyzers are available.</p>
                </div>
                <div className="col-12">
                    <p>A typical hemodialysis session is a 4 hour treatment scheduled 2-3 times a week. There are 3 shifts per day - the first shift is from 7AM - 11AM, the second shift is from 12NN - 4PM, and the third shift is from 5PM - 9PM. Patient receive personal care by a highly trained team consisting of nephrologists, nephrology fellows, nurses, dialysis technicians and nursing assistants. Two nephrology fellows evaluate the patients, assess their needs and address emergent situations that may arise during the patients’ treatments.</p>
                </div>
                <div className="col-12">
                    <p>Aside from hemodialysis, the unit in Makati provides peritoneal dialysis treatments. For patients who are interested in APD, they will be trained by nephrology fellows and nurses. The training is done in a designated peritoneal dialysis room. A cycler for PD can also be arrange through a provider, should the patient desire to be on APD. </p>
                </div>
                <div className="col-12">
                    <p>Dietary instruction is a must for patients with CKD. In our unit, a dietician visits the patients on a regular basis to educate them on the proper renal diet. In addition to these visits, the unit also conducts lay fora that focus on nutrition education that will help dialysis patients achieve a maximum lifestyle.</p>
                </div>
            </div>
         </div>
         <br /><br /><br /><br />
        </>
     );
}
 
export default RenalUnit;