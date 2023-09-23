
import { useState } from "react"
import "./Modal.css"
import nubesNav from '../weather-app-master/Cloud-background.png'


function modal({ country, temperatura, clima, img, onSubmit, onSubmit2 }) { // eslint-disable-next-line react-hooks/rules-of-hooks
  
  const [mostrar, setMostrar] = useState(false)
  const [inputDato, setInputDato] = useState('');

  const ciudades = ["london", "barcelona", "long beach"]

  const handleChange = (e) => {

    setInputDato(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputDato);
  }


  const handleSubmit2 = (e) => {
    e.preventDefault();
    onSubmit2(inputDato);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)


      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'

    })


  }

  const handleCiudad1 = () => {

    setInputDato(ciudades[0]);
  }

  const handleCiudad2 = () => {

    setInputDato(ciudades[1]);
  }

  const handleCiudad3 = () => {

    setInputDato(ciudades[2]);
  }



  return (


    <div className="container-modals">
      {mostrar ? <div className="modal">
        <button onClick={() => setMostrar(false)} ><span className="material-symbols-outlined">
          close
        </span></button>
        <div>

          <form onSubmit={handleSubmit}> <div>
            <input type="text" value={inputDato} onChange={handleChange} placeholder="busca">
            </input> <button className="Btn-Search">Search</button>
          </div>
            <div className="container-btn-3">

              <button onClick={handleCiudad1}> London <span className="material-symbols-outlined">
                arrow_forward_ios
              </span></button>
              <button onClick={handleCiudad2}>Barcelona <span className="material-symbols-outlined">
                arrow_forward_ios
              </span></button>
              <button onClick={handleCiudad3}>Long Beach <span className="material-symbols-outlined">
                arrow_forward_ios
              </span></button>

            </div>
          </form></div>
      </div> : null}

      <div className="nav"><img src={nubesNav}></img>


        <div className="elements-nav"><div><button id="btn-search-nav" onClick={() => (setMostrar(true))} >search for places</button>


          <form onSubmit={handleSubmit2}>
            <button className="btn-gps"><span className="material-symbols-outlined">
              my_location
            </span></button>
          </form>

        </div>

          <img className="nube" src={`https://openweathermap.org/img/wn/${img}@2x.png`}></img>

          <div className="nav-Temperatura-titulo"><h1>{temperatura}<h2>°C</h2></h1></div>
          <h3 className="clima-titulo">{clima}</h3>
          <div><h4>
            Today .</h4><h4> {new Date().toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" })}</h4> </div>
          <h4> <span id="location" className="material-symbols-outlined" >
            location_on
          </span>{country?.name}</h4>


        </div>
      </div>
    </div>


  )
}

export default modal