var API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;

export async function getWeatherByCityName(cityName: string) : Promise<any> {
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
        .then((response) => response.json());
}