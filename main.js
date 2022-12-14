let input = document.getElementById('weatherinput')
const submit = document.getElementById('submit')
let cityInput = '';

let mainCity = document.getElementById("mainCity");
let mainCityClock = document.getElementById("mainCityClock");
let mainDesc = document.getElementById("mainDesc");
let mainIcon = document.getElementById("mainIcon");
let mainWind = document.getElementById("mainWind");
let mainHumidity = document.getElementById("mainHumidity");
let mainTemp = document.getElementById("mainTemp");
let mainCountry = document.getElementById("maincountry");

let cityfirst = document.getElementById("cityfirst");
let citysecond = document.getElementById("citysecond");
let citythird = document.getElementById("citythird");
let cityfourth = document.getElementById("cityfourth");
let cityfiveth = document.getElementById("cityfiveth");
let citysixth = document.getElementById("citysixth");
let cityseventh = document.getElementById("cityseventh");


const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '865ffa770bmsh9b45eb9aa783eb3p1bdde6jsn992cbcb89312',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}

submit.addEventListener('click', (e) => {
  cityInput = input.value
  e.preventDefault()

  fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityInput}`,
    options
  )
    .then(response => response.json())
    .then(data => {
      console.log(data)
      mainCity.innerText=`${data.location.name}`
      mainCityClock.innerText=`${data.location.localtime}`
      mainDesc.innerText=`${data.current.condition.text}`
      // mainIcon.innerText=`${data.current.condition.icon}`
      mainWind.innerText=`${data.current.wind_mph} km/h`
      mainHumidity.innerText=`${data.current.humidity}%`
      mainTemp.innerText=`${data.current.temp_c}°`
      mainCountry.innerText=`${data.location.country}`
      if(data.current.condition.text.includes("Sunny") || 
      data.current.condition.text.includes("Clear") ){
        mainIcon.classList.remove("fa-cloud-rain");
        mainIcon.classList.remove("fa-clouds-sun");
        mainIcon.classList.remove("fa-snowflakes");
        mainIcon.classList.add("fa-sun");
      }else if(data.current.condition.text.includes("Rain") || 
      data.current.condition.text.includes("Showerss")  )
      {
        mainIcon.classList.remove("fa-sun");
        mainIcon.classList.remove("fa-clouds-sun");
        mainIcon.classList.remove("fa-snowflakes");
        mainIcon.classList.add("fa-cloud-rain");
      }else if(data.current.condition.text.includes("Fog") || 
      data.current.condition.text.includes("Thunderstorm") ||
      data.current.condition.text.includes("Storm") ||
      data.current.condition.text.includes("Overcast") ||
      data.current.condition.text.includes("Cloudy") ||
      data.current.condition.text.includes("cloudy") ||
      data.current.condition.text.includes("Mist") ||
      data.current.condition.text.includes("Haze")
        ){
          mainIcon.classList.remove("fa-cloud-rain");
          mainIcon.classList.remove("fa-sun");
          mainIcon.classList.remove("fa-snowflakes");  
          mainIcon.classList.add("fa-cloud");
      }else if(data.current.condition.text.includes("Icy") ||
      data.current.condition.text.includes("Snow") ||
      data.current.condition.text.includes("Showers") ||
      data.current.condition.text.includes("Chance") ||
      data.current.condition.text.includes("Sleet") ||
      data.current.condition.text.includes("Freezing") 
      ){
        mainIcon.classList.remove("fa-cloud-rain");
        mainIcon.classList.remove("fa-sun");
        mainIcon.classList.remove("fa-clouds-sun");
        mainIcon.classList.add("fa-snowflake");
      }
    })
    .catch(err => console.error(err))

})








 

