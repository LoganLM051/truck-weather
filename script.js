// a const with a url, the url is the postman from day 2 with my cities weather.//
const url = " https://api.open-meteo.com/v1/forecast?latitude=31.14352&longitude=-93.261&timezone=auto&current=temperature_2m,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit";
// a const for the button, that gets clicked to run getWeather button event listener//
const button = document.getElementById("check-btn");
// a const to get the weather after clicking the button// 
const localWeather = document.getElementById("weather");
//an async function that fetches the url and runs it in a console log//
async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    localWeather.textContent = "";
//a const for the current weather,fahr is the const. short for fahrenheit.//
    const fahr = document.createElement("p");
    fahr.className = "fs-4";
    fahr.textContent = "Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;
    localWeather.appendChild(fahr);

    const wind = document.createElement("p");
    wind.className = "fs-4";
    wind.textContent = "Wind Speed: " + data.current.wind_speed_10m + " " + data.current_units.wind_speed_10m;
    localWeather.appendChild(wind);

    const time = document.createElement("p");
    time.className = "fs-4";
    time.textContent = "Time: " + new Date(data.current.time).toLocaleString() + " " 
    localWeather.appendChild(time);
}
// button event listener that gets the weather from the url//
button.addEventListener("click", getWeather);