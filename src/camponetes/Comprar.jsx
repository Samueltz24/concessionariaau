import '../App.css'
import seta from '../foto/seta.png'
function Comprar(){
    return(
        <>
            <section id='branco'>
                <div id='vendas'>
                        <div className='ven1'>
                            <div className='redon '>
                                <button className='butao verde'>comprar</button>
                            </div>
                            <div className='redon'>
                                <button className='butao'>vender</button>
                            </div>
                        </div>       
                        <div>
                          <h2 className="h2ta">O carro que você quer, mais perto do que imagina</h2>
                        </div>
                    <div className='ven'>
                        <div className='junto'>
                            <p className='p'>ver carro</p>
                        </div>
                        <div className='junto'>
                            <img src={seta} alt="" />
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Comprar