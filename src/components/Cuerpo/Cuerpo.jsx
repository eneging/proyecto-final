
import Cards1 from "../CardsbyType/Cards-5days/Cards1"
import Cards2 from "../CardsbyType/Cards-wheaderinf/card-wind-status/Cards2"
import Cards3 from "../CardsbyType/Cards-wheaderinf/card-visibility/Cards3"
import CardsP from "../CardsbyType/Cards-wheaderinf/card-porciento/CardsP"

import "./Cuerpo.css"
import Cards4 from "../CardsbyType/Cards-wheaderinf/card-air-pressure/Cards4"








function Cuerpo({ humedad, viento, presion, fell,
  img1, min1Centigrados, max1Centigrados,
  img2, min2Centigrados, max2Centigrados, fecha2,
  img3, min3Centigrados, max3Centigrados, fecha3,
  img4, min4Centigrados, max4Centigrados, fecha4,
  img5, min5Centigrados, max5Centigrados, fecha5 }) {



    
   



 
  return (
    <div className="cuerpo">
    

<heck></heck>
      <div className="primera-nav"><button  >°C</button><button >°F</button></div>



      <div className="card1-container">
        <Cards1 dia={"tomorrow"} tempMin={min1Centigrados}  tempMax={max1Centigrados} imgCard1={img1} />
        <Cards1 dia={fecha2} tempMin={min2Centigrados} tempMax={max2Centigrados} imgCard1={img2} />
        <Cards1 dia={fecha3} tempMin={min3Centigrados} tempMax={max3Centigrados} imgCard1={img3} />
        <Cards1 dia={fecha4} tempMin={min4Centigrados} tempMax={max4Centigrados} imgCard1={img4} />
        <Cards1 dia={fecha5} tempMin={min5Centigrados} tempMax={max5Centigrados} imgCard1={img5} />

      </div>
      <div className="card2-container">
        <h2>Today’s Hightlights</h2>
        <div className="ctn-c2">
          <CardsP wind={viento} />  <Cards2 hum={humedad} />
        </div>

        <div className="ctn-c3">
          <Cards3 felLike={fell} /> <Cards4 presure={presion} />
        </div>
      </div>
    </div>
  )
}

export default Cuerpo