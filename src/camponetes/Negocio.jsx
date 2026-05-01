import '../App.css'
function Negocio({img,texto1,texto2}){
    return(
        <>
           <div className='cardfilho'>
                <div className='cardfilho1'>
                    <img src={img} alt="" />
                </div>
                <div className='cardfilho1'>
                    <h4>{texto1}</h4>
                </div>
                <div className='cardfilho1'>
                    <p className='p1'>
                        {texto2}
                    </p>
                </div>
           </div>
        </>
    )
}

export default Negocio 