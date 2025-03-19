const apiKey = "YOUR_API_KEY";
const city = "New York";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById("weather").innerHTML = 
            `City: ${data.name}, Temp: ${data.main.temp}°C, ${data.weather[0].description}`;
    } catch (error) {
        console.error("Error fetching weather data", error);
    }
}

getWeather();
