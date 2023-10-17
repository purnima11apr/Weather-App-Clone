const apiKey = "739cac6f604874e04c34ecf3a07fdeeb";
const apiURl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiURl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

    var data = await response.json();

    

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src= "assets/images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        WeatherIcon.src= "assets/images/clear.png";
     } 
     else if(data.weather[0].main == "Rain"){
        WeatherIcon.src= "assets/images/rain.png";
     } 
     else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src= "assets/images/drizzle.png";
     } 
     else if(data.weather[0].main == "Mist"){
        WeatherIcon.src= "assets/images/mist.png";
     } 
     else if(data.weather[0].main == "Snow"){
        WeatherIcon.src= "assets/images/snow.png";
     } 
     else if(data.weather[0].main == "Haze"){
        WeatherIcon.src= "assets/images/haze.png";
     } 

     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display = "none";
    }

    
}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})

