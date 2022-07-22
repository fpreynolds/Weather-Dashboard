const APIkey = "5534efd142e59530844493d4317c9dae";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIkey;

search.addEventListener("click", run)

function run() {
    let citySearch = document.getElementById("citySearch").value;
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}
