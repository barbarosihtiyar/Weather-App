let input = document.getElementById('weatherinput')
const submit = document.getElementById('submit')
let cityInput = 'Istanbul'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '865ffa770bmsh9b45eb9aa783eb3p1bdde6jsn992cbcb89312',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
}

submit.addEventListener('click', e => {
  cityInput = input.value
  e.preventDefault()

  fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityInput}`,
    options
  )
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
})

console.log(input.value)





// const village = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '865ffa770bmsh9b45eb9aa783eb3p1bdde6jsn992cbcb89312',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// fetch('https://weatherapi-com.p.rapidapi.com/search.json?q=Istanbul', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));