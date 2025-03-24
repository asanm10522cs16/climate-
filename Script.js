<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f0f0;
        }
        .weather-container {
            margin: 50px auto;
            padding: 20px;
            background: white;
            width: 300px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
        }
        input {
            padding: 10px;
            width: 80%;
            margin-bottom: 10px;
        }
        button {
            padding: 10px;
            background-color: blue;
            color: white;
            border: none;
            cursor: pointer;
        }
        #weather-info {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="weather-container">
        <h2>Weather App</h2>
        <input type="text" id="city" placeholder="Enter city name">
        <button onclick="getWeather()">Get Weather</button>
        <div id="weather-info"></div>
    </div>

    <script>
        function getWeather() {
            let city = document.getElementById('city').value;
            let apiKey = "YOUR_API_KEY";  // Replace with your OpenWeatherMap API key
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.cod === 200) {
                        document.getElementById('weather-info').innerHTML = `
                            <h3>${data.name}, ${data.sys.country}</h3>
                            <p>Temperature: ${data.main.temp}°C</p>
                            <p>Weather: ${data.weather[0].description}</p>
                            <p>Humidity: ${data.main.humidity}%</p>
                        `;
                    } else {
                        document.getElementById('weather-info').innerHTML = `<p>City not found!</p>`;
                    }
                })
                .catch(error => console.log(error));
        }
    </script>
</body>
</html>
