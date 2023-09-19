
import Cards1 from "../CardsbyType/Cards-5days/Cards1"
import Cards2 from "../CardsbyType/Cards-wheaderinf/card-wind-status/Cards2"
import Cards3 from "../CardsbyType/Cards-wheaderinf/card-visibility/Cards3"
import CardsP from "../CardsbyType/Cards-wheaderinf/card-porciento/CardsP"

import "./Cuerpo.css"
import Cards4 from "../CardsbyType/Cards-wheaderinf/card-air-pressure/Cards4"

function Cuerpo() {
  return (
    <div className="cuerpo">
        <div className="primera-nav"><button>C</button><button>F</button></div>
        <div className="card1-container">
     <Cards1/><Cards1/><Cards1/><Cards1/><Cards1/>
     </div>

     <div className="card2-container">
     <h2>Today Highltd</h2>
    <div className="ctn-c2">
   
    <CardsP></CardsP>   <Cards2></Cards2> 
    
     </div>
     <div className="ctn-c3">
     <Cards3></Cards3> <Cards4></Cards4>

     </div>
     </div>
    </div>
  )
}

export default Cuerpo