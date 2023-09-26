import wellness from "../images/wellness.jpg";

const WellnessCenter = () => {
    return ( 
        <>
            <div className="wellness">
                <img src={wellness} alt="" />
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>Witness Your Wellness</p>
                    </div>
                    <div className="col-12">
                        <p>
                        Our Wellness Center offers the best programs to help you achieve what your body needs. Train with the use of our cardiovascular, strength/resistance and weight equipments by LifeFitness. Consult with our team of physicians, physiotherapists, wellness specialists and registered dietitians for a personalized program to reach your fitness goals. In addition, end every session with the use of our shower rooms, sauna and steam room.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br /><br /><br />
        </>
     );
}
 
export default WellnessCenter;