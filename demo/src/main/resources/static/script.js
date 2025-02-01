function fetchWeather() {
    const city = document.getElementById('cityInput').value;
    const apiUrl = `/weather?city=${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const resultDiv = document.getElementById('weatherResult');
            if (data && data.main && data.weather && data.weather.length > 0) {
                const temperature = data.main.temp;
                const description = data.weather[0].description;

                resultDiv.innerHTML = `
                    <p><strong>City:</strong> ${data.name}</p>
                    <p><strong>Temperature:</strong> ${temperature}°C</p>
                    <p><strong>Description:</strong> ${description}</p>
                `;
            } else {
                resultDiv.innerHTML = '<p>Failed to fetch weather data.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            document.getElementById('weatherResult').innerHTML = '<p>An error occurred while fetching weather data.</p>';
        });
}