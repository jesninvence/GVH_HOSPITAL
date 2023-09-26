const Loader = () => {
    return (
        <>
            <div style={{position:"fixed",top:0,width:"100%",height:"100%",background:"rgba(0,0,0,0.8)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999}}>
                <span className="loader"></span>
            </div>
        </>
    )
}

export default Loader;