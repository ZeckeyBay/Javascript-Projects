const url = "https://api.openweathermap.org/data/2.5/";
const key = "bc26f501bad96b7db6ab07f32120e229";

const setQuery = (e)=>{
    if(e.keyCode == "13")
    getResult(searchBar.value)
}

const getResult = (cityName)=>{
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&`;
    console.log(query)
    fetch(query)
    .then(weather =>{
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result)=>{
    let city = document.querySelector(".city")
    city.innerText  = `${result.name}, ${result.sys.country}`

    let temp = document.querySelector(".temp")
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let locationIcon = document.querySelector(".weather-icon");
    const {icon} = result.weather[0];
    locationIcon.innerHTML = `<img src="icons/${icon}.png">`

    let desc = document.querySelector(".desc")
    desc.innerText = result.weather[0].description

    let minmax = document.querySelector(".minmax")
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress",setQuery)