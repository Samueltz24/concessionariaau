import '../App.css'
import foto from '../foto/coracao.png'
import foto1 from '../foto/lupa.png'
import foto2 from '../foto/menu.png'
import foto3 from '../foto/mais.png'
import foto4 from '../foto/sacola.png'
function Nav (){
    return(
        <header>
            <nav>
            <div id='nav'>
                <div className="separa1">
                    <h2 className='h210'>shopping do automovel</h2>
                </div>
                <div className="separa">
                    <img src={foto} alt="nada" />
                </div>
                <div className="separa">
                    <img src={foto1} alt="" />
                </div>
                    <div className="separa">
                        <img src={foto2} alt="" />
                    </div>
                </div>
            </nav>
            <div id='heard'>
                <div className='distancia margi'>
                    <h1>
                        lugar de comprar carro
                    </h1>
                </div>
                <div className='distancia'>
                    <p id='unico'>
                        carros novos, seminovos e usados
                    </p>
                </div>
                <div className='distancia redondo'>
                    <div className='quadrado1'>
                        <input className='buton butonaz1' type="text" name="" id="busca" placeholder='buscar por marca ou modelo'/>
                    </div>
                    <div className='quadrado'>
                        <input className='buton butonaz' type="button" value="buscar ofertas"/>
                    </div>
                </div>
                <div id='entrar'>
                     <div className='redondo1'>
                    <div className='bo'>
                        <img src={foto4} alt="" />
                    </div>
                    <div className='letra'>
                        <p className='color'>quero compar</p>
                    </div>
                </div>
                <div className='redondo1'>
                    <div className='bo'>
                        <img src={foto3} alt="" />
                    </div>
                    <div className='letra'>
                        <p className='color'>quero verder</p>
                    </div>
                </div>
                </div>
            </div>
        </header>
    )
}
export default Nav