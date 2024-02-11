let celcius = document.querySelector("#cel");
let farenheit = document.querySelector("#far");
let form = document.querySelector("#textBox");
let description = document.querySelector("#description");
let image = document.querySelector("#image");
let key = "4214162e5eab401eb5322634240702";
function getData(){
    let something = 0;
fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${form.value}`)
    .then(response => {
        if(!response.ok) {
            celcius.innerHTML = "City Not Found";
            farenheit.innerHTML = "City Not Found";
        }
        else {
            return response.json();
        }
    })
    .then(data => {
        console.log(data);
        celcius.innerHTML = "Celcius: " + data.current.temp_c;
        farenheit.innerHTML = "Farenheit: " + data.current.temp_f;
        description.innerHTML = "Description " + data.current.condition.text;
        image.src = data.current.condition.icon;
    });
}
