import axios from "axios";

function geoCode(name) {

    const API_URL = `https://api.geoapify.com/v1/geocode/search?city=${name}&apiKey=b000cba979544e9889a729408b702e77`

    return (
        axios.get(API_URL).then(data => {
            const {lat, lon, city} = data?.data.features[0].properties
            console.log({lat, lon, city})
            return {lat, lon, city}
        })
    )
}

export default geoCode;