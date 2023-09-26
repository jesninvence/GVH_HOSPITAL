import labwall from "../images/labwall.jpg";

const Laboratory = () => {
    return ( 
        <>
         <div className="labwall">
            <img src={labwall} alt="" width="100%"/>
         </div>
         <br /><br /><br />
         <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>
                    The Clinical Laboratory is manned by expert professionals responsible for ensuring the highest diagnostic quality and
                     efficacy that aid in the diagnosis and management of our patients. Coupled with timely and responsive real time results
                      delivered through the GVH Medical Hospital portal, our patients benefit from fast and reliable diagnostic reports. While
                       equipped with the most technologically advanced and state of the art facility, the genuine and warm accommodation of
                        our staff make the real difference in personalized and compassionate care that is the GVH Medical Hospital brand.
                    </p>
                </div>
            </div>
         </div>
         <br /><br /><br /><br />
        </>
     );
}
 
export default Laboratory;