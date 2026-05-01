import carros from '../carros/carro1.webp'
import carros1 from '../carros/carro2.webp'
import carros2 from '../carros/carro3.webp'
import carros4 from '../carros/carro5.webp'
import Carro from './Carro'
import { useEffect, useRef } from "react"
import Glider from "glider-js"
import "glider-js/glider.min.css"
function Card(){
     const gliderRef = useRef(null)

  useEffect(() => {
    new Glider(gliderRef.current, {
      slidesToShow: 3,
      slidesToScroll: 1,
      draggable: true,
      dots: "#dots",
      arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
      },
    })
  }, [])

    return(
        <>
        <div className="cardp">
            <div className="glider-contain">
      
      <div className="glider" ref={gliderRef}>
        <div><Carro 
            img={carros}
            texto='jeep commander'
            valor='R$ 210.000 '
            ano='2025'
            marca='servi shopping'
            />
            </div>
        <div>
            <Carro 
            img={carros1}
            texto='volkswagen virtus'
            valor='R$ 112.990 '
            ano='2015'
            marca='master automoveis'
            />
        </div>
        <div>
            <Carro 
            img={carros2}
            texto='toyota corolla'
            valor='R$ 112.990'
            ano='2018'
            marca='n1 multimarcas'
            />
            </div>
        <div>
            <Carro 
            img={carros4}
            texto='porsche macan'
            valor='R$ 427.990 '
            ano='2022'
            marca='fest car'
            />
        </div>
        <div>
             <Carro 
            img={carros4}
            texto='mitsubhi pajero sport'
            valor='R$ 368.990'
            ano='2025'
            marca='servi shopping'
            />
        </div>
      </div>

      <button className="glider-prev buu1" id='buu1'>«</button>
      <button className="glider-next buu1" id='buu2'>»</button>

      <div id="dots"></div>
    </div>
        </div>
        </>
    )
}
export default Card