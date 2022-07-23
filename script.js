const APIkey = "5534efd142e59530844493d4317c9dae";
var date = moment().format('MM-DD-YYY');
var citySearch = document.getElementById("citySearch");
var cityToday = document.getElementById("currentCity");
var tempToday = document.getElementById("temptoday");
var windToday = document.getElementById("windtoday");
var humidityToday = document.getElementById("humiditytoday");
var uvToday = document.getElementById("uvToday");

search.addEventListener("click", function() {
    localStorage.setItem("citySearch", citySearch.value);
    var cityName = localStorage.getItem("citySearch");
    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=" + APIkey;
    
    fetch(queryURL)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
        cityToday.innerHTML = response.data.name;
        tempToday.innerHTML = "Temp " + response.data.main.temp;
        windToday.innerHTML = "Wind Speed (mph) " + response.data.main.wind.speed;
        humidityToday.innerHTML = "Humidity (%) " + response.data.main.humidity;

    })
    
