const apiKey = "ca57d017854200a18c0fe011fc02a6cc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const icon = document.querySelector(".weather-con")

async function weatherConditions(city){
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await res.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humid p").innerHTML = data.main.humidity  + "%";
    document.querySelector(".wind p").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".sub").innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
        icon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        icon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png";
    }
}



searchBtn.addEventListener("click", ()=>{
    weatherConditions(searchBox.value);
})