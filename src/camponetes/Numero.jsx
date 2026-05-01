function Numero({img,texto1,texto2}){
    return(
        <>
            <div className="carr">
                <div className="numero">
                    <img src={img} alt="" />
                </div>
                <div className="letra1">
                    <div>
                        <h4>{texto1}</h4>
                    </div>
                    <div>
                        <p className="p1">{texto2}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Numero