import '../assets/styles/daily.css'
import iconmap from '../utils/handleIcon'

function Daily(props) {

    const Day_Formatter = new Intl.DateTimeFormat('en-US', {weekday: 'long'})

    return (
        <div className="daily">
            <h2>{Day_Formatter.format(props.data?.timestamp).slice(0, 3)}</h2>
            <img src={'./images/weathericons/' + iconmap.get(props.data?.iconCode) +'.svg'} alt=''></img>
            <h2>{props.data?.maxTemp} °</h2>
        </div>
    )
}

export default Daily;