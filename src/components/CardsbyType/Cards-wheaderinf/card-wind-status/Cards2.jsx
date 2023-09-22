import './Cards2.css'
import Progres from './Progres'
function Cards2({hum}) {

  
  return (
    <div className="container-card-2">
  <div className='clase-title-porc'>
      <h3> Humidity</h3>
      <h1>{hum}<h2>%</h2></h1></div>
        
<Progres porciento={hum}> </Progres>
    </div>
  )
}

export default Cards2