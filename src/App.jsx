import Container from "./components/Container";
import './assets/styles/app.css'
import Search from "./components/Search";
import Daily from "./components/Daily";
import Weather from "./components/Weather";
import getWeather from "./utils/getweather";
import { useState } from "react";
import geoCode from "./utils/geocoding";

function App() {
  const [data, setData] = useState('');
  const [cityName, setCityName] = useState('');


  function handleChange(event) {
    setCityName(event.target.value);
  }

  function handleSubmit() {
    geoCode(cityName).then(coords => {
      try {
        getWeather(coords.lat, coords.lon, Intl.DateTimeFormat().resolvedOptions().timeZone, coords.city).then(data => {
          setData(data);
          console.log(data)
        })
      } catch (error) {
        console.log(error)
      }
    })
  }

  
  return (
    <div className="app">
      <div className='data-details'>
        <Search value={cityName} onChange={handleChange} onClick={handleSubmit} />
      </div>
      <div className='weather-details'>
        <Container>
          <Weather data={data.currentWeather} name={data.city}/>
        </Container>
        <Container className='weather-forecast'>
          {
            data.weatherForecast?.map((data, key) => {
              return (
              <Daily data={data} key={key}/>
            )
          })
          }
        </Container>
      </div>
      <div className="ui"></div>
    </div>
  )
}

export default App;
