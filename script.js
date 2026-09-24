function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    document.getElementById("weather").innerHTML = `
        <h2>${city}</h2>
        <div class="weather-info">
            <p>🌡️ Temperature: 28°C</p>
            <p>💧 Humidity: 65%</p>
            <p>💨 Wind Speed: 12 km/h</p>
            <p>☀️ Condition: Clear Sky</p>
        </div>
    `;
}
