import "./Cards3.css"

function Cards3({felLike, mostrartemperaturaC ,mostrartemperaturaf}) 

{
  return (
    <div className="container-card-3">
         <div>
      <h3> Vissibility</h3>
    { mostrartemperaturaC ? <div> <h1>{felLike} <h2>°C</h2></h1></div> : null}
    { mostrartemperaturaf ? <div> <h1>{Math.trunc(felLike * 9/5 + 32)} <h2>°F</h2></h1></div> : null}
      </div>
      

    </div>
  )
}

export default Cards3