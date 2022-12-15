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
        mainIcon.classList.remove("fa-cloud");
        mainIcon.classList.remove("fa-snowflake");
        mainIcon.classList.add("fa-sun");
      }else if(data.current.condition.text.includes("Rain") || 
      data.current.condition.text.includes("Showerss")  )
      {
        mainIcon.classList.remove("fa-sun");
        mainIcon.classList.remove("fa-cloud");
        mainIcon.classList.remove("fa-snowflake");
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
      data.current.condition.text.includes("snow") ||
      data.current.condition.text.includes("Showers") ||
      data.current.condition.text.includes("Chance") ||
      data.current.condition.text.includes("Sleet") ||
      data.current.condition.text.includes("Freezing") 
      ){
        mainIcon.classList.remove("fa-cloud-rain");
        mainIcon.classList.remove("fa-sun");
        mainIcon.classList.remove("fa-cloud");
        mainIcon.classList.add("fa-snowflake");
      }
    })
    .catch(err => console.error(err))

})


let cityfirst = document.getElementById("cityfirst");
let firstCityClock = document.getElementById("firstCityClock");
let firstDesc = document.getElementById("firstDesc");
let firstImageIcon = document.getElementById("firstImageIcon");
let firstWind = document.getElementById("firstWind");
let firstHumidity = document.getElementById("firstHumidity");
let firstTemp = document.getElementById("firstTemp");
let firstCountry = document.getElementById("firstCountry");


fetch(
  `https://weatherapi-com.p.rapidapi.com/current.json?q=Ankara`,
  options
)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    cityfirst.innerText=`${data.location.name}`
    firstCityClock.innerText=`${data.location.localtime}`
    firstDesc.innerText=`${data.current.condition.text}`
    // mainIcon.innerText=`${data.current.condition.icon}`
    firstWind.innerText=`${data.current.wind_mph} km/h`
    firstHumidity.innerText=`${data.current.humidity}%`
    firstTemp.innerText=`${data.current.temp_c}°`
    firstCountry.innerText=`${data.location.country}`
    if(data.current.condition.text.includes("Sunny") || 
    data.current.condition.text.includes("Clear") ){
      firstImageIcon.classList.remove("fa-cloud-rain");
      firstImageIcon.classList.remove("fa-cloud");
      firstImageIcon.classList.remove("fa-snowflake");
      firstImageIcon.classList.add("fa-sun");
    }else if(data.current.condition.text.includes("Rain") || 
    data.current.condition.text.includes("Showerss")  )
    {
      firstImageIcon.classList.remove("fa-sun");
      firstImageIcon.classList.remove("fa-cloud");
      firstImageIcon.classList.remove("fa-snowflake");
      firstImageIcon.classList.add("fa-cloud-rain");
    }else if(data.current.condition.text.includes("Fog") || 
    data.current.condition.text.includes("Thunderstorm") ||
    data.current.condition.text.includes("Storm") ||
    data.current.condition.text.includes("Overcast") ||
    data.current.condition.text.includes("Cloudy") ||
    data.current.condition.text.includes("cloudy") ||
    data.current.condition.text.includes("Mist") ||
    data.current.condition.text.includes("Haze")
      ){
        firstImageIcon.classList.remove("fa-cloud-rain");
        firstImageIcon.classList.remove("fa-sun");
        firstImageIcon.classList.remove("fa-snowflakes");  
        firstImageIcon.classList.add("fa-cloud");
    }else if(data.current.condition.text.includes("Icy") ||
    data.current.condition.text.includes("Snow") ||
    data.current.condition.text.includes("snow") ||
    data.current.condition.text.includes("Showers") ||
    data.current.condition.text.includes("Chance") ||
    data.current.condition.text.includes("Sleet") ||
    data.current.condition.text.includes("Freezing") 
    ){
      firstImageIcon.classList.remove("fa-cloud-rain");
      firstImageIcon.classList.remove("fa-sun");
      firstImageIcon.classList.remove("fa-cloud");
      firstImageIcon.classList.add("fa-snowflake");
    }
  })
  .catch(err => console.error(err))


  let citysecond = document.getElementById("citysecond");
  let secondCityClock = document.getElementById("secondCityClock");
  let secondDesc = document.getElementById("secondDesc");
  let secondImageIcon = document.getElementById("secondImageIcon");
  let secondWind = document.getElementById("secondWind");
  let secondHumidity = document.getElementById("secondHumidity");
  let secondTemp = document.getElementById("secondTemp");
  let secondCountry = document.getElementById("secondCountry");
  

  fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=Paris`,
    options
  )
    .then(response => response.json())
    .then(data => {
      console.log(data)
      citysecond.innerText=`${data.location.name}`
      secondCityClock.innerText=`${data.location.localtime}`
      secondDesc.innerText=`${data.current.condition.text}`
      // mainIcon.innerText=`${data.current.condition.icon}`
      secondWind.innerText=`${data.current.wind_mph} km/h`
      secondHumidity.innerText=`${data.current.humidity}%`
      secondTemp.innerText=`${data.current.temp_c}°`
      secondCountry.innerText=`${data.location.country}`
      if(data.current.condition.text.includes("Sunny") || 
      data.current.condition.text.includes("Clear") ){
        secondImageIcon.classList.remove("fa-cloud-rain");
        secondImageIcon.classList.remove("fa-cloud");
        secondImageIcon.classList.remove("fa-snowflake");
        secondImageIcon.classList.add("fa-sun");
      }else if(data.current.condition.text.includes("Rain") || 
      data.current.condition.text.includes("Showerss")  )
      {
        secondImageIcon.classList.remove("fa-sun");
        secondImageIcon.classList.remove("fa-cloud");
        secondImageIcon.classList.remove("fa-snowflake");
        secondImageIcon.classList.add("fa-cloud-rain");
      }else if(data.current.condition.text.includes("Fog") || 
      data.current.condition.text.includes("Thunderstorm") ||
      data.current.condition.text.includes("Storm") ||
      data.current.condition.text.includes("Overcast") ||
      data.current.condition.text.includes("Cloudy") ||
      data.current.condition.text.includes("cloudy") ||
      data.current.condition.text.includes("Mist") ||
      data.current.condition.text.includes("Haze")
        ){
          secondImageIcon.classList.remove("fa-cloud-rain");
          secondImageIcon.classList.remove("fa-sun");
          secondImageIcon.classList.remove("fa-snowflake");  
          secondImageIcon.classList.add("fa-cloud");
      }else if(data.current.condition.text.includes("Icy") ||
      data.current.condition.text.includes("Snow") ||
      data.current.condition.text.includes("snow") ||
      data.current.condition.text.includes("Showers") ||
      data.current.condition.text.includes("Chance") ||
      data.current.condition.text.includes("Sleet") ||
      data.current.condition.text.includes("Freezing") 
      ){
        secondImageIcon.classList.remove("fa-cloud-rain");
        secondImageIcon.classList.remove("fa-sun");
        secondImageIcon.classList.remove("fa-cloud");
        secondImageIcon.classList.add("fa-snowflake");
      }
    })
    .catch(err => console.error(err))
  


    let citythird = document.getElementById("citythird");
    let thirdCityClock = document.getElementById("thirdCityClock");
    let thirdDesc = document.getElementById("thirdDesc");
    let thirdImageIcon = document.getElementById("thirdImageIcon");
    let thirdWind = document.getElementById("thirdWind");
    let thirdHumidity = document.getElementById("thirdHumidity");
    let thirdTemp = document.getElementById("thirdTemp");
    let thirdCountry = document.getElementById("thirdCountry");
    
  
    fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=Berlin`,
      options
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        citythird.innerText=`${data.location.name}`
        thirdCityClock.innerText=`${data.location.localtime}`
        thirdDesc.innerText=`${data.current.condition.text}`
        // mainIcon.innerText=`${data.current.condition.icon}`
        thirdWind.innerText=`${data.current.wind_mph} km/h`
        thirdHumidity.innerText=`${data.current.humidity}%`
        thirdTemp.innerText=`${data.current.temp_c}°`
        thirdCountry.innerText=`${data.location.country}`
        if(data.current.condition.text.includes("Sunny") || 
        data.current.condition.text.includes("Clear") || 
        data.current.condition.text.includes("Sun") ){
          thirdImageIcon.classList.remove("fa-cloud-rain");
          thirdImageIcon.classList.remove("fa-cloud");
          thirdImageIcon.classList.remove("fa-snowflake");
          thirdImageIcon.classList.add("fa-sun");
        }else if(data.current.condition.text.includes("Rain") || 
        data.current.condition.text.includes("Showerss")  )
        {
          thirdImageIcon.classList.remove("fa-sun");
          thirdImageIcon.classList.remove("fa-cloud");
          thirdImageIcon.classList.remove("fa-snowflake");
          thirdImageIcon.classList.add("fa-cloud-rain");
        }else if(data.current.condition.text.includes("Fog") || 
        data.current.condition.text.includes("Thunderstorm") ||
        data.current.condition.text.includes("Storm") ||
        data.current.condition.text.includes("Overcast") ||
        data.current.condition.text.includes("Cloudy") ||
        data.current.condition.text.includes("cloudy") ||
        data.current.condition.text.includes("Mist") ||
        data.current.condition.text.includes("Haze")
          ){
            thirdImageIcon.classList.remove("fa-cloud-rain");
            thirdImageIcon.classList.remove("fa-sun");
            thirdImageIcon.classList.remove("fa-snowflake");  
            thirdImageIcon.classList.add("fa-cloud");
        }else if(data.current.condition.text.includes("Icy") ||
        data.current.condition.text.includes("Snow") ||
        data.current.condition.text.includes("snow") ||
        data.current.condition.text.includes("Showers") ||
        data.current.condition.text.includes("Chance") ||
        data.current.condition.text.includes("Sleet") ||
        data.current.condition.text.includes("Freezing") 
        ){
          thirdImageIcon.classList.remove("fa-cloud-rain");
          thirdImageIcon.classList.remove("fa-sun");
          thirdImageIcon.classList.remove("fa-cloud");
          thirdImageIcon.classList.add("fa-snowflake");
        }
      })
      .catch(err => console.error(err))
  



      let cityfourth = document.getElementById("cityfourth");
      let fourthCityClock = document.getElementById("fourthCityClock");
      let fourthDesc = document.getElementById("fourthDesc");
      let fourthImageIcon = document.getElementById("fourthImageIcon");
      let fourthWind = document.getElementById("fourthWind");
      let fourthHumidity = document.getElementById("fourthHumidity");
      let fourthTemp = document.getElementById("fourthTemp");
      let fourthCountry = document.getElementById("fourthCountry");
      
    
      fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=Moscow`,
        options
      )
        .then(response => response.json())
        .then(data => {
          console.log(data)
          cityfourth.innerText=`${data.location.name}`
          fourthCityClock.innerText=`${data.location.localtime}`
          fourthDesc.innerText=`${data.current.condition.text}`
          // mainIcon.innerText=`${data.current.condition.icon}`
          fourthWind.innerText=`${data.current.wind_mph} km/h`
          fourthHumidity.innerText=`${data.current.humidity}%`
          fourthTemp.innerText=`${data.current.temp_c}°`
          fourthCountry.innerText=`${data.location.country}`
          if(data.current.condition.text.includes("Sunny") || 
          data.current.condition.text.includes("Clear") || 
          data.current.condition.text.includes("Sun") ){
            fourthImageIcon.classList.remove("fa-cloud-rain");
            fourthImageIcon.classList.remove("fa-cloud");
            fourthImageIcon.classList.remove("fa-snowflake");
            fourthImageIcon.classList.add("fa-sun");
          }else if(data.current.condition.text.includes("Rain") || 
          data.current.condition.text.includes("Showerss")  )
          {
            fourthImageIcon.classList.remove("fa-sun");
            fourthImageIcon.classList.remove("fa-cloud");
            fourthImageIcon.classList.remove("fa-snowflake");
            fourthImageIcon.classList.add("fa-cloud-rain");
          }else if(data.current.condition.text.includes("Fog") || 
          data.current.condition.text.includes("Thunderstorm") ||
          data.current.condition.text.includes("Storm") ||
          data.current.condition.text.includes("Overcast") ||
          data.current.condition.text.includes("Cloudy") ||
          data.current.condition.text.includes("cloudy") ||
          data.current.condition.text.includes("Mist") ||
          data.current.condition.text.includes("Haze")
            ){
              fourthImageIcon.classList.remove("fa-cloud-rain");
              fourthImageIcon.classList.remove("fa-sun");
              fourthImageIcon.classList.remove("fa-snowflake");  
              fourthImageIcon.classList.add("fa-cloud");
          }else if(data.current.condition.text.includes("Icy") ||
          data.current.condition.text.includes("Snow") ||
          data.current.condition.text.includes("snow") ||
          data.current.condition.text.includes("Showers") ||
          data.current.condition.text.includes("Chance") ||
          data.current.condition.text.includes("Sleet") ||
          data.current.condition.text.includes("Freezing") 
          ){
            fourthImageIcon.classList.remove("fa-cloud-rain");
            fourthImageIcon.classList.remove("fa-sun");
            fourthImageIcon.classList.remove("fa-cloud");
            fourthImageIcon.classList.add("fa-snowflake");
          }
        })
        .catch(err => console.error(err))
  