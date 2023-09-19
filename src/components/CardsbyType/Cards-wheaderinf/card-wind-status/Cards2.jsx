import './Cards2.css'
import Progres from '../../hooks/progres'
function Cards2() {

  const numero = 40;
  return (
    <div className="container-card-2">

      <h3> Humidity</h3>
      <h1>{numero}%</h1>
    {/*  <h3> 10C</h3>*/} 
<Progres porciento={numero}> </Progres>
    </div>
  )
}

export default Cards2