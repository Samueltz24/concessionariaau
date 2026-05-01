function Carro({img,texto,valor,ano,marca}){
    return(
        <>
            <div className="cardfi">
                <div>
                    <img className="img" src={img}/>
                </div>
                <div className="cor1">
                <div className="ma">
                    <p className="cor">{texto}</p>
                </div>
                <div className="ma">
                    <p className="cor">{valor}</p>
                </div>
                <div className="ma">
                    <p className="cor">{ano}</p>
                </div>
                <div className="ma">
                    <h3 className="azul">{marca}</h3>
                </div>
                </div>
            </div>
        </>
    )
}

export default Carro 