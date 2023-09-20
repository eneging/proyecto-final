
import { useState } from "react"
import "./Modal.css"
import nubesNav from '../weather-app-master/Cloud-background.png'



function modal({country,temperatura ,clima, img, fecha}) {

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
     
      <img src={`https://openweathermap.org/img/wn/${img}@2x.png`}></img>
      <h1>{temperatura}°C</h1>
      <h3>{clima}</h3>
      <div><h4>
        today .</h4><h4>  {fecha}</h4> </div>
      <h4> <span className="material-symbols-outlined" >
location_on
</span>{country?.name}</h4>
      
      </div>
      </div> 
    </div>


  )
}

export default modal