import hospital from "../images/hospital.jpg";

const AboutUs = () => {
    return ( 
        <>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-6 g-3">
                        <br /><br />
                        <div className="z-3 position-absolute p-5 rounded-3 box"><span></span></div>
                        <div className="z-3 position-absolute p-3 rounded-3"><span><img src={hospital} alt="" width="100%" /></span></div>
                    </div>
                    <div className="col-6">
                        <h1>About Our Hospital</h1>
                        <br />
                        <p>GVH Medical Hospital is one of the best tertiary hospitals in the country and is the preferred referral hospital for physicians and patients seeking the highest level of quality healthcare in the region.</p>
                        <p>With three centers located in the cities of Makati Cebu and Davao, a total of 1,010 hospital beds, 1,012 board-certified medical and 2,162 allied healthcare staff, renowned training programs, state-of-the-art facilities, and equipment, we are considered as one of the biggest, most advanced, fully integrated, and comprehensive healthcare facilities in the Luzon Visayas and Mindanao.</p>
                        <p>GVH Medical Hospital is recognized as an industry leader and was commended by the Department of Health for rendering excellent services and facilities at par with those of the most respected hospitals in the world.</p>
                        <p>You can trust GVH Medical Hospital to understand YOU and provide you with excellent, compassionate, and personalized care.</p>
                    </div>
                </div>
            </div>
            <br /><br />
        </>
     );
}
 
export default AboutUs;