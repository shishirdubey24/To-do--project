import  { useState, useEffect } from "react";

// You should replace this with your own OpenWeatherMap API Key

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("London"); // Default location
  const [error, setError] = useState(null);
  const [inputLocation, setInputLocation] = useState(location);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
        );
        const data = await response.json();

        if (response.ok) {
          setWeather(data);
          setError(null); // Clear any previous errors
        } else {
          setError(data.message);
        }
      } catch (error) {
        console.log(error);
        setError("Error fetching weather data.");
      }
    };

    fetchWeather();
  }, [location]); // Fetch weather when location changes

  const handleLocationChange = (e) => {
    setInputLocation(e.target.value); // Update the input field
  };

  const handleSearch = () => {
    setLocation(inputLocation); // Set location from input
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="weather-card">
      <div className="weather-input">
        <input
          type="text"
          placeholder="Enter location"
          value={inputLocation}
          onChange={handleLocationChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {weather ? (
        <div className="weather-info">
          <h3>Weather in {weather.name}</h3>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
};

export default WeatherCard;
