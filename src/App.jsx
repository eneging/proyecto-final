
import Modal from './components/modal/Modal'
import './App.css'
import Cuerpo from './components/Cuerpo/Cuerpo'
import React, { useEffect, useState } from 'react'


function App() {

  const [data, setData] = useState([])
  const [latitude, setLatitude] = React.useState('')
  const [longitude, setLongitude] = React.useState('')
  const [citys, setCitys] = React.useState({})
  const [CiudadInput, setCiudadInput] = useState('ica')


  const city = `${CiudadInput}`
  const API = "6f812ee6ec66dcb7e2cc4147aad465c1"


  const addData = (misData) => { setCiudadInput(misData); };
  const addGPS = () => { setCiudadInput(citys); };



  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API}`);
        const datos = await res.json();
        setData(datos); // Actualiza el estado con los datos
        localStorage.setItem('Datitos', JSON.stringify(datos)); // Guarda los datos en localStorage
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    getData();
  }, [CiudadInput]);



  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

    })

    let MIAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6f812ee6ec66dcb7e2cc4147aad465c1`

    axios.get(MIAPI)
      .then((response) => {
        setCitys(response?.data.name)
      })

  }, [citys])


  const celcius = 273.15;

  return (
    <>  
    
    
     {data.city && data.list && data.list[0] ? (
        <>
          <aside>

            <Modal onSubmit={addData} 
                   onSubmit2={addGPS}
                   country={data.city}
                   temperatura={Math.trunc(data.list[0].main.temp - celcius)}
                   clima={data.list[0].weather[0].main}
                   img={data.list[0].weather[0].icon}/>
                   
          </aside>

          <main>
            <Cuerpo humedad={data.list[0].main.humidity}
                    viento={data.list[0].wind.speed}
                    presion={data.list[0].main.pressure}
                    fell={Math.trunc(data.list[0].main.feels_like - celcius)}
                    misDatosCard1={data.list}
          ></Cuerpo> 
          </main>  </> ) : ( <p>Cargando datos...</p>)}
    </>
  )
}

export default App
