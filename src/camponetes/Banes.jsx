import '../App.css'
import bane1 from '../banes/Banner-1.webp'
import bane2 from '../banes/Banner-2.webp'
import bane3 from '../banes/Banner-3.webp'
function Banes(){
    return(
        <>
        <section>
            <div id='bane'>
               <div className='banes'>
                <img className='imagem' src={bane1} alt="" />
               </div>
               <div className='banes'>
                <img className='imagem' src={bane2} alt="" />
               </div>
               <div className='banes'>
                <img className='imagem' src={bane3} alt="" />
               </div>
            </div>
        </section>
        </>
    )
}
export default Banes 