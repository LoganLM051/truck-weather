// a const with a url, the url is the postman from day 2 with my cities weather.//
const url = "https://api.open-meteo.com/v1/forecast?latitude=31.14352&longitude=-93.261&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit";
// a const for the button, that gets clicked to run getWeather button event listener//
const button = document.getElementById("check-btn");
// a const to get the weather after clicking the button// 
const localWeather = document.getElementById("weather");
//an async function that fetches the url and runs it in a console log//
async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
// button event listener that gets the weather from the url//
button.addEventListener("click", getWeather);