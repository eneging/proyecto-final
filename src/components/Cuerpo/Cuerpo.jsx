

import Cards2 from "../CardsbyType/Cards-wheaderinf/card-wind-status/Cards2"
import Cards3 from "../CardsbyType/Cards-wheaderinf/card-visibility/Cards3"
import CardsP from "../CardsbyType/Cards-wheaderinf/card-porciento/CardsP"

import "./Cuerpo.css"
import Cards4 from "../CardsbyType/Cards-wheaderinf/card-air-pressure/Cards4"
import { useState } from "react"
import './Cards1.css'





function Cuerpo({ humedad, viento, presion, fell,
 
  misDatosCard1  }) {

    const [mostrarC, setMostrar] = useState(true)
    const [mostrarf, setMostrarf] = useState(false)

  return (
    <div className="cuerpo">
    
      <div className="primera-nav">         
      
     
               <button  onClick={() => (setMostrar(true), setMostrarf(false)) } >°C</button><button onClick={() => ( setMostrarf(true) , setMostrar(false))}>°F</button></div>



      <div className="card1-container">
     
    <div  className="container-card-1">


    {misDatosCard1?.filter((e) => e.dt_txt.includes('12:00:00')).map((e,i) => {

return(

<div   className="cartas" id={`class-${i}`} key={i}>
    <h3>{e.dt_txt.substr(0, 10)}</h3>
    <img   src={`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}></img>
    <div className="Temperatura"> {mostrarC ? <h3>{Math.trunc(e.main.temp_max - 273.15)}<h4>°C</h4></h3>: null}
    {mostrarf ? <h3>{Math.trunc((e.main.temp_max - 273.15 )* 9/5 + 32)}<h4>°F</h4></h3>: null}
    {mostrarC ? <h3>{Math.trunc(e.main.temp_min - 273.15)}<h4>°C</h4></h3>:null}  {mostrarf ? <h3>{Math.trunc((e.main.temp_min - 273.15 )* 9/5 + 32)}<h4>°F</h4></h3>: null}   </div>
    </div>
    )
})}


  </div> 
  </div>
   

      
      <div className="card2-container">
        <h2>Today’s Hightlights</h2>
        <div className="ctn-c2">
          <CardsP wind={viento} />  <Cards2 hum={humedad} />
        </div>

        <div className="ctn-c3">
          <Cards3 felLike={fell} mostrartemperaturaC ={mostrarC} mostrartemperaturaf ={mostrarf} /> <Cards4 presure={presion} />
        </div>
      </div>
    </div>
  )
}

export default Cuerpo