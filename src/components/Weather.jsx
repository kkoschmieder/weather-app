import '../assets/styles/weather.css'
import iconmap from '../utils/handleIcon'

function Weather(props) {
    return (
        <div className="current-weather">
            <div className="main-weather-info">
                <h2>{props.name}</h2>
                <img src={'./images/weathericons/' + iconmap.get(props.data?.iconCode) + '.svg'} alt='' />
                <h2>{props.data?.currentTemperature} °</h2>
            </div>
            <div className="detailed-weather-info">
                <div className="feels">
                    <h5>{props.data?.apparentTemperature} °</h5>
                    <h5>{props.data?.windSpeed} km/h</h5>
                </div>
                <div className="precip">
                    <h5>{props.data?.precipProbability}%</h5>
                    <h5>{props.data?.precipSum}mm</h5>
                </div>
            </div>
        </div>
    )
}

export default Weather;