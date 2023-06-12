import axios from "axios";

function getWeather(lat, lon, timezone, city) {
    const url = 'https://api.open-meteo.com/v1/forecast?hourly=temperature_2m,apparent_temperature,windspeed_10m&daily=weathercode,temperature_2m_max,apparent_temperature_max,precipitation_sum,windspeed_10m_max&current_weather=true&timeformat=unixtime';
    
    return axios.get(url,
    {
        params: {
            latitude: lat,
            longitude: lon,
            timezone,
        }
    }
    ).then(({data}) => {
        return {
            currentWeather: parseCurrentWeather(data),
            weatherForecast: parseWeatherForecast(data),
            city: city,
        }
    })
}

function parseCurrentWeather({current_weather, hourly}) {

    const { temperature, weathercode, windspeed } = current_weather;
    const { apparent_temperature: [apparentTemperature] } = hourly;

    return {
        currentTemperature: Math.floor(temperature),
        apparentTemperature: Math.floor(apparentTemperature),
        windSpeed: Math.floor(windspeed),
        iconCode: weathercode,
    }
}

function parseWeatherForecast({daily}) {

    return daily.time.map((time, index) => {
        return {
            timestamp: time * 1000,
            iconCode: daily.weathercode[index],
            maxTemp: Math.floor(daily.temperature_2m_max[index]),
            maxApparentTemp: Math.floor(daily.apparent_temperature_max[index]),
            windSpeed: Math.floor(daily.windspeed_10m_max[index]),
            precip: Math.floor(daily.precipitation_sum[index] * 100) / 100,
        }
    })
}

export default getWeather;