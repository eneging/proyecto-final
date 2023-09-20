import './Cards2.css'
import Progres from '../../hooks/progres'
function Cards2({hum}) {

  
  return (
    <div className="container-card-2">

      <h3> Humidity</h3>
      <h1>{hum}%</h1>
  
<Progres porciento={hum}> </Progres>
    </div>
  )
}

export default Cards2