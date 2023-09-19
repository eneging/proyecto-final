
import { useState } from "react"
import "./Modal.css"
import nubesNav from '../weather-app-master/Cloud-background.png'
import Nube from "../weather-app-master/HeavyRain.png"
function modal() {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mostrar, setMostrar] = useState(false) 
   


  return ( 
 
     <div className="container-modals">
     {mostrar ? <div className="modal">
              <button onClick={() => setMostrar(false)} >X</button>
        <div> <div><input type="text" placeholder="busca">
          </input> <button>search</button></div> </div>
      </div> :null}

   <div className="nav"><img src={nubesNav}></img>

      
      <div className="elements-nav"><div><button onClick={() => (setMostrar(true))} >search for places</button> 
     <button><span className="material-symbols-outlined">
my_location
</span></button></div>
     
      <img src={Nube}></img>
      <h1>15C</h1>
      <h3>shower</h3>
      <div><h4>
        today .</h4><h4>  fri 5 jun</h4> </div>
      <h4>country</h4>
      
      </div>
      </div> 
    </div>


  )
}

export default modal