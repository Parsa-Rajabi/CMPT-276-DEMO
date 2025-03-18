async function fetchWeather(city) {
    if (!city) throw new Error("City is required");
    // https://openweathermap.org/
    // Create an account or sign-in to get your API key
    // Navigate to the API keys section (top right corner)
    // Copy your API key and replace the INSERT_YOUR_API
    const API_KEY = "INSERT YOUR API KEY HERE"; 
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error("Failed to fetch weather data");

        const data = await response.json();
        return {
            temperature: data.main.temp,
            description: data.weather[0].description
        };
    } catch (error) {
        return { error: error.message };
    }
}
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}