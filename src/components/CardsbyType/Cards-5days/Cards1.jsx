

import "./Cards1.css"



function Cards1({dia, tempMin, tempMax ,imgCard1}) {

  
    return ( <>
    
   

      
    <div  className="container-card-1">

    <h3>{dia}</h3>
    <img src={`https://openweathermap.org/img/wn/${imgCard1}@2x.png`}></img>
    <div className="Temperatura"> <h3>{tempMin}°C</h3>
    <h3>{tempMax}°C</h3> </div>

  </div> </>)
}

export default Cards1