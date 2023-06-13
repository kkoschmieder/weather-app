import '../assets/styles/weather.css'
import iconmap from '../utils/handleIcon'

function Weather(props) {
    return (
        <div className="current-weather">
            <h2>{props.name}</h2>
            <img src={'./images/weathericons/' + iconmap.get(props.data?.iconCode) + '.svg'} alt='' />
            <h2>{props.data?.currentTemperature} °</h2>
            <h3>{props.data?.apparentTemperature} °</h3>
            <h3>{props.data?.windSpeed} km/h</h3>
        </div>
    )
}

export default Weather;