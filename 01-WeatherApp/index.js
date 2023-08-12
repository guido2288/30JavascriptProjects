// selectors
const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const citySearch = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const displayWeather = document.querySelector(".weather");
const displayError = document.querySelector(".error");

const apiKey = "0631fc592f4aeaee8923c9cba6f2e568";


searchBtn.addEventListener("click", ()=> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${citySearch.value}&appid=${apiKey}`;
    checkWeather(apiUrl);
});

async function checkWeather(apiUrl){
    const response = await fetch(apiUrl);

    if(response.status == 404){
        displayError.style.display = "block";
        displayWeather.style.display = "none";
        return
    };


    let data = await response.json();

    city.innerHTML = data.name;
    temp.innerHTML = `${Math.round(data.main.temp)} °c`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed} km/h`;


    switch (data.weather[0].main) {
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;    
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;  
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Drizzle":
            weatherIcon.src = "images/drizzle.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
    };

    displayWeather.style.display = "block";
    displayError.style.display = "none";

};




// checkWeather()