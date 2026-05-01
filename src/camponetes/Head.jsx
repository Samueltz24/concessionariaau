import foto from '../foto/whatsapp.png'
import foto1 from '../foto/discordia.png'
import '../App.css'
function Head(){
    return(
        <>
         <footer>
            <div id='food'>
                <div id='f1'>
                    <h2 className='h23'>site criado por samuel tz</h2>
                </div>
                <div id='f2'>
                    <a href="https://github.com/Samueltz24"><img src={foto1} alt="" /></a>
                </div>
           </div>
            <div id='zap'>
                <div id='zap1'>
                    <img src={foto} alt="" />
                </div>
            </div>
         </footer>
        </>
    )
}

export default Head