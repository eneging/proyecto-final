import "./Cards1.css"

import nubecita from "./Snow.png"
function Cards1() {
  return (
    <div className="container-card-1">

      <h3> dia</h3>
      <img src={nubecita}></img>
      <div className="Temperatura"> <h3>20C</h3>
      <h3> 10C</h3> </div>

    </div>
  )
}

export default Cards1