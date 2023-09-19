import "./Modal.css"
import nubesNav from '../weather-app-master/Cloud-background.png'
import Nube from "../weather-app-master/HeavyRain.png"
function modal() {
  return (
    <div className="container-modals">
      <div className="modal">
              <button>X</button>
        <div> <div><input type="text" placeholder="busca">
          </input> <button>search</button></div> </div>
      </div>

      <div className="nav"><img src={nubesNav}></img>

      
      <div className="elements-nav"><div><button >search for places</button> 
     <i>navegar</i></div>
     
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