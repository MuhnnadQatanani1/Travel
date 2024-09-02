
// Here, you'll import your API calls and other functionality
import './styles/style.scss';

// Example function that sends a request to the server
const getWeather = async () => {
    const response = await fetch('http://localhost:8081/getWeather', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    console.log(data);
};

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners, call functions, etc.
    document.getElementById('getWeatherBtn').addEventListener('click', getWeather);
});

