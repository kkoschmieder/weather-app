import '../assets/styles/daily.css'
import iconmap from '../utils/handleIcon'

function Daily(props) {
    return (
        <div className="daily">
            <img src={'./images/weathericons/' + iconmap.get(props.data?.iconCode) +'.svg'} alt=''></img>
            <p>{props.data?.maxTemp} °C</p>
            <p>{props.data?.precip} mm</p>
            <p>{props.data?.windSpeed} km/h</p>
        </div>
    )
}

export default Daily;