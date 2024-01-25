console.log("Hello World");

// creating a weather App

var searchForm = document.querySelector("#search-form");

var apiKey = "766bf34a17420469977c1a427d2a44ae";

var searchInput = document.querySelector("#search-input");

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ searchInput + "&" + "appid="+ apiKey;

var searchInput = document.querySelector("#search-input");

$("#search-button").on("click", function (event) {
    event.preventDefault();
    console.log(searchInput.value);

   //if emoty dont do anything
    if (searchInput.value === "") {
        return;
    }
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ searchInput.value + "&" + "appid="+ apiKey;
    $("#history").append("<button class='btn btn-secondary history-button'>" + searchInput.value + "</button> ");
    searchInput.value = "";

    var buttonCount = $(".history-button").length;


    // Limit the number of buttons to 6
    if (buttonCount >= 8) {
        // Remove the oldest button
        $(".history-button:first").remove();
    }

    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {


    var iconCode = data.weather[0].icon;
    var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
    
    $("#today").append("<h1>" + data.name + " " + data.dt + "<img src='" + iconUrl + "'>"  + "</h1>");
    
    $("#today").append("<p>Temp:" + data.main.temp + "</p>");

    $("#today").append("<p>Wind:" + data.wind.speed + "</p>");

    $("#today").append("<p>Humidity:" + data.main.humidity + "</p>");


      console.log(data);
    }); 

});


// console.log(queryURL);
// //forcast
// $('#today').append("<h1>Today's Forecast</h1>");

// //temp  
// $("#today").append("<p>Temp:</p>");

// //wind 
// $("#today").append("<p>Wind:</p>");

// //humidity
// $("#today").append("<p>Humidity:</p>");



console.log(queryURL);