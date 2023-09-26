import eyeins from "../images/eyeinstitute.jpg";

const EyeInstitute = () => {
    return ( 
        <>
            <div className="eyeins">
                <img src={eyeins} alt="" width="100%"/>
            </div>
            <br /><br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>Since it opened its doors in 2016, the GVH Medical Hospital Mandaue had set its goals to provide the latest in diagnostic and therapeutic services.</p>
                    </div>
                    <div className="col-12">
                        <p>Among others, it recognizes the importance of eye health, for the gift of sight is as precious as life itself.</p>
                    </div>
                    <div className="col-12">
                        <p>The Eye Institute is equipped to provide comprehensive eye care that caters to all subspecialties including: </p>
                    </div>
                    <div className="col-12">
                        <p>- comprehensive ophthalmology </p>
                        <p>- cataract & refractive</p>
                        <p>- retina & vitreous</p>
                        <p>- orbit, lacrimal & oculoplasty</p>
                        <p>- pediatric ophthalmology & strabismus</p>
                        <p>- glaucoma</p>
                        <p>- cornea & external diseases</p>
                        <p>- pediatric optometry & orthoptics</p>
                        <p>- general optometry </p>
                    </div>
                    <div className="col-12">
                        <p>Our team of subspecialty-trained eye doctors are one with GVH Medical Hospital its commitment to heal with passion and care with compassion.</p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
    );
}
 
export default EyeInstitute;