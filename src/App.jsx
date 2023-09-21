
import Modal from './components/modal/Modal'
import './App.css'
import Cuerpo from './components/Cuerpo/Cuerpo'
import React, { useEffect, useState } from 'react'



function App() {




  const [data, setData] = useState([])

  const [latitude,setLatitude] = React.useState('')
  const [longitude,setLongitude] = React.useState('')
  const [citys, setCitys] = React.useState({})
  const [CiudadInput, setCiudadInput] = useState('ica')

  
  
  const city = `${CiudadInput}`
  const API = "6f812ee6ec66dcb7e2cc4147aad465c1"


  const addData = (misData) => {
    
    
   setCiudadInput(misData);

  }


 const addGPS = () => {

setCiudadInput(citys);

 }  



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



React.useEffect(()=>{
 navigator.geolocation.getCurrentPosition((position)=> {
setLatitude(position.coords.latitude);
setLongitude(position.coords.longitude);

 })

 let MIAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=6f812ee6ec66dcb7e2cc4147aad465c1`

 axios.get(MIAPI)
.then((response) => {
  setCitys(response?.data.name)
})

}, [])




const celcius = 273.15;
 



  return (
    <>


   
  
  {data.city && data.list && data.list[0] ? (
     <><aside> <Modal  onSubmit={addData} onSubmit2={addGPS}   country={data.city} 
     
          temperatura={Math.trunc(data.list[0].main.temp-celcius)}
          clima ={data.list[0].weather[0].main} 
           img={data.list[0].weather[0].icon}
          /></aside>

       <main><Cuerpo 
                     
                    humedad ={data.list[0].main.humidity} 
                    viento ={data.list[0].wind.speed}
                    presion ={data.list[0].main.pressure}
                    fell ={Math.trunc(data.list[0].main.feels_like-273.15)}


                    
                    // props de la primera card-1
                    
                     img1 ={data.list[6].weather[0].icon} 
                    max1Centigrados={Math.trunc(data.list[6].main.temp_min-celcius)}
                    min1Centigrados={Math.trunc(data.list[6].main.temp_max-celcius)}
                    max1Faren={Math.trunc((data.list[6].main.temp_min-celcius) * 9/5 + 32)}
                    min1Faren={Math.trunc((data.list[6].main.temp_max-celcius) * 9/5 + 32 )}

                    
                    // props de la primera card-2
                     fecha2 ={(data.list[16].dt_txt).substr(0, 10 )} 
                     img2 ={data.list[16].weather[0].icon} 
                     max2Centigrados={Math.trunc(data.list[16].main.temp_min-273.15)}
                     min2Centigrados={Math.trunc(data.list[16].main.temp_max-273.15)}
                     max2Faren={Math.trunc((data.list[16].main.temp_min-celcius) * 9/5 + 32)}
                    min2Faren={Math.trunc((data.list[16].main.temp_max-celcius) * 9/5 + 32 )}
                    
                    
                    // props de la primera card-3
                     fecha3 ={(data.list[21].dt_txt).substr(0, 10 )} 
                     img3 ={data.list[21].weather[0].icon}
                     max3Centigrados={Math.trunc(data.list[21].main.temp_min-273.15)}
                     min3Centigrados={Math.trunc(data.list[21].main.temp_max-273.15)}
                     max3Faren={Math.trunc((data.list[21].main.temp_min-celcius) * 9/5 + 32)}
                    min3Faren={Math.trunc((data.list[21].main.temp_max-celcius) * 9/5 + 32 )}
                    
                    
                    
                    // props de la primera card-4
                      fecha4 ={(data.list[30].dt_txt).substr(0, 10 )} 
                      img4 ={data.list[30].weather[0].icon} 
                      max4Centigrados={Math.trunc(data.list[30].main.temp_min-273.15)}
                      min4Centigrados={Math.trunc(data.list[30].main.temp_max-273.15)}
                      max4Faren={Math.trunc((data.list[30].main.temp_min-celcius) * 9/5 + 32)}
                    min4Faren={Math.trunc((data.list[30].main.temp_max-celcius) * 9/5 + 32 )}


                       // props de la primera card-5
                       fecha5 ={(data.list[38].dt_txt).substr(0, 10 )} 
                     img5 ={data.list[38].weather[0].icon}
                     max5Centigrados={Math.trunc(data.list[38].main.temp_min-273.15)}
                     min5Centigrados={Math.trunc(data.list[38].main.temp_max-273.15)} 
                     max5Faren={Math.trunc((data.list[38].main.temp_min-celcius) * 9/5 + 32)}
                    min5Faren={Math.trunc((data.list[38].main.temp_max-celcius) * 9/5 + 32 )} 
                    
                    ></Cuerpo> </main>

</>

  ) : (
    <p>Cargando datos...</p>
  )}

                                
      
    </>
  )
}

export default App
