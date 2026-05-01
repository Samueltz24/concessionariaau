import um from '../numero/um.png'
import dois from '../numero/dois.png'
import tres from '../numero/tres.png'
import seta from '../foto/seta.png'
import Comprar from './Comprar'
import '../App.css'
import Numero from "./Numero"
function Card2(){
    return(
        <>
            <div className="carr1">
                <Comprar/>
                <Numero img={um} texto1='Encontre seu carro ideal' texto2='Escolha entre vários de opções disponíveis para você'/>
                <Numero img={dois} texto1='Escolha sua forma de pagamento'texto2='Compre à vista ou com um financiamento que caiba no seu bolso'/>
                <Numero img={tres} texto1='Receba seu carro' texto2='Agende um horário e retire seu carro Shopping do Automóvel'/>
            </div>
             <div className='ven te'>
                <div className='junto'>
                    <p className='p'>ver carro</p>
                </div>
                <div className='junto'>
                    <img src={seta} alt="" />
                </div>
            </div>
        </>
    )
}
export default Card2