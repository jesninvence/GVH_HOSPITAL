import sleepdis from "../images/sleepdisorder.jpg";

const SleepDisorder = () => {
    return ( 
        <>
            <div className="sleepdis">
                <img src={sleepdis} alt="" />
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>
                        The GVH Medical Hospital Center for Sleep Disorder, established in 2003, is the first and the longest running sleep laboratory outside of Manila. It has undergone many transformations, including an upgrade of the rooms to luxury hotel standards. Sleep has become more conducive and comfortable for patients during the study. It currently has two polysomnogram beds with world class standard digital video sleep recorders and CPAP/BPAP systems. One bed is equipped to be able to carry out a complete EEG montage if needed. The Center is equipped to diagnose and treat all types of sleep ailment and is staffed only by PSSM Board Certified Physicians and fully trained sleep technicians.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
    );
}
 
export default SleepDisorder;