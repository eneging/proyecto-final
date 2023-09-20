
import Cards1 from "../CardsbyType/Cards-5days/Cards1"
import Cards2 from "../CardsbyType/Cards-wheaderinf/card-wind-status/Cards2"
import Cards3 from "../CardsbyType/Cards-wheaderinf/card-visibility/Cards3"
import CardsP from "../CardsbyType/Cards-wheaderinf/card-porciento/CardsP"

import "./Cuerpo.css"
import Cards4 from "../CardsbyType/Cards-wheaderinf/card-air-pressure/Cards4"




function Cuerpo({humedad, viento, presion, fell , 
                img1, min1, max1 ,
                img2, min2, max2 ,fecha2,
                img3, min3, max3,fecha3,
                img4, min4 , max4,fecha4,
                img5, min5 , max5, fecha5}) {


  return (
    <div className="cuerpo">
      <div className="primera-nav"><button>C</button><button>F</button></div>
      <div className="card1-container">
        <Cards1 dia={"tomorrow"} tempMin={min1}  tempMax={max1} imgCard1 ={img1}/>
        <Cards1 dia={fecha2} tempMin={min2}  tempMax={max2} imgCard1={img2}/>
        <Cards1 dia={fecha3} tempMin={min3}  tempMax={max3} imgCard1={img3} />
        <Cards1 dia={fecha4} tempMin={min4}  tempMax={max4} imgCard1={img4}/>
        <Cards1 dia={fecha5} tempMin={min5}  tempMax={max5} imgCard1={img5}/>
         
    </div>
      <div className="card2-container">
        <h2>Today’s Hightlights</h2>
        <div className="ctn-c2">
          <CardsP wind={viento} />  <Cards2 hum={humedad} />
        </div>
        
        <div className="ctn-c3">
          <Cards3 felLike = {fell} /> <Cards4 presure={presion}/>
        </div>
      </div>
    </div>
  )
}

export default Cuerpo