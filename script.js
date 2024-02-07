const celcius = document.querySelector("#cel");
const farenheit = document.querySelector("#far");
let key = "a35e785463724d3eaa820526240702";
function getData() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Paris`)
    .then(response => response.json())
    .then(data => console.log(data));
}
getData();