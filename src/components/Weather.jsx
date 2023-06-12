import '../assets/styles/weather.css'
import iconmap from '../utils/handleIcon'

function Weather(props) {
    return (
        <div className="weather">
            <h2>{props.name}</h2>
            <img src={'./images/weathericons/' + iconmap.get(props.data?.iconCode) + '.svg'} alt='' />
            <p>{props.data?.currentTemperature} °C</p>
            <p>{props.data?.apparentTemperature} °C</p>
            <p>{props.data?.windSpeed} km/h</p>
        </div>
    )
}

export default Weather;