
const API_KEY = "01a2a503f9bc4a689d788865c9188ada";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat,lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ API_KEY}&units=metric`;
    fetch(url).then((response) => response.json()).then((data) => {
        const city = document.querySelector("#weathers span:first-child");
        const weather = document.querySelector("#weathers span:last-child");
       city.innerText = data.name;
       weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });

}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);