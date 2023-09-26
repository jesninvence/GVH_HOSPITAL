import healthunit from "../images/healthunit.jpg";

const HealthUnit = () => {
    return ( 
        <>
            <div className="healthunit">
                <img src={healthunit} alt="" width="100%"/>
            </div>
            <br /><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p>
                        As we age, our bodies experience wear and tear as we continue with our daily activities and lifestyle. It thus becomes essential that we opt for regular health check-ups, to ensure that we are healthy and fit.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>
                        Amidst our busy lifestyles and the rising cost of healthcare, the Executive Health Unit was designed to provide time-efficient and cost-effective health services. The Executive Health Packages are recommended not only for the prevention and early detection of diseases among generally healthy individuals but also to those who are at risk of developing certain diseases and its complications.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>
                        Our Executive Health check-up is comprehensive, as it includes all the necessary tests that should be done in a general health check-up and facilitates consultation with experts who can address the specific health concerns of the client, such as dietary, lifestyle and disease-related issues.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>
                        Clients will be interviewed regarding signs and symptoms, medical history including medications and hereditary illnesses, lifestyle and health goals to tailor fit the tests that will suit the client’s requirements.
                        </p>
                    </div>
                    <div className="col-12">
                        <p>
                        Friendly personnel will be happy to assist you in your health journey with us at the Executive Health Unit of GVH Medical Hospital.
                        </p>
                    </div>
                </div>
            </div>
            <br /><br /><br />
        </>
     );
}
 
export default HealthUnit;