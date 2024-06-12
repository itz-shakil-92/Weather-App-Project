const API_KEY = "YOUR_API_KEY";
const weatherId = document.querySelector("#weather");

async function getWeather() {
    console.log('hello');
    let city = 'indore';
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();
    // weatherId.innerText = data.main.temp_min;
    weatherId.innerText = data?.main?.temp_min;
}
getWeather();

