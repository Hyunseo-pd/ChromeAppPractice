const API_KEY = "ce5cf5eb3996c04b41b4deeb151c7d4d";
let WEATHER_ICON = {
  Sun: "icons/Sun.png",
  Clouds: "icons/Clouds.png",
  Rain: "icons/Rain.png",
  Snow: "icons/Snow.png",
};

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`You live in ${lat}, ${lng}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather > span:last-child");
      const weather = document.querySelector("#weather span:first-of-type");
      const weatherIcon = document.querySelector("#weather img");
      city.innerText = data.name;
      weatherIcon.src = WEATHER_ICON[`${data.weather[0].main}`];
      weather.innerText = `${data.main.temp.toFixed(1)}°C`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
