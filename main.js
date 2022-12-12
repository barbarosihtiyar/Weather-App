let input = document.getElementById("weatherinput");
const submit = document.getElementById("submit");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '865ffa770bmsh9b45eb9aa783eb3p1bdde6jsn992cbcb89312',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Istanbul', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));



	submit.onclick = () => {
		console.log(input.value);
	  };