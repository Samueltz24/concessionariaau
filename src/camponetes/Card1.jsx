import ne from '../negocio/negocio.png' 
import vo from '../negocio/volante.png'
import se from '../negocio/seguro.png'
import co from '../negocio/colher.png'
import card from '../negocio/1440x180.webp'
import Negocio from "./Negocio"
import '../App.css'
function Card1(){
    return(
        <>
        <section id='sinza'>
            <h2 className='h21'>Mais de 53.000 clientes já escolheram o Shopping do Automóvel</h2>
            <div className="cardpri">
            <Negocio img={ne} texto1='Despachantes' texto2='No Shopping do Automóvel há sempre um despachante especializado, pronto para ajudar você a resolver as questões burocráticas que uma transação de veículo envolve.'/>
            
            <Negocio img={vo} texto1='Nosso Espaço' texto2='Aqui você encontra um espaço amplo para testar seu próximo carro. Visite uma de nossas unidades, conheça nossas lojas, faça um test-drive e saia de carro novo.'/>

            <Negocio img={se} texto1='Seguradoras' texto2='As principais seguradoras do país estão aqui. Solicite um orçamento, descubra as condições e escolha o melhor seguro para o seu carro novo com total comodidade.'/>

            <Negocio img={co} texto1='Espaço Gastronômico' texto2='Quer fazer um lanche, ou mesmo uma refeição, enquanto procura seu carro novo? Pode passar no Shopping do Automóvel de Pernambuco em qualquer das duas unidades.'/>
         </div>
        <div className='ma'>
            <img className='img' src={card} alt="" />
        </div>
        </section>
        </>
    )
}

export default Card1