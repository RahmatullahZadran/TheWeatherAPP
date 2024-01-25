console.log("Hello World");

// creating a weather App

var searchForm = document.querySelector("#search-form");

var apiKey = "766bf34a17420469977c1a427d2a44ae";

var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q="+ searchInput + "&" + "appid= + "+ apiKey;

var searchInput = document.querySelector("#search-input");

$("#search-button").on("click", function (event) {
    event.preventDefault();
    console.log(searchInput.value);

   //if emoty dont do anything
    if (searchInput.value === "") {
        return;
    }

    $("#history").append("<button class='btn btn-secondary history-button'>" + searchInput.value + "</button> ");
    searchInput.value = "";

    var buttonCount = $(".history-button").length;


    // Limit the number of buttons to 6
    if (buttonCount >= 6) {
        // Remove the oldest button
        $(".history-button:first").remove();
    }

})

console.log(queryUrl);
//forcast
$('#today').append("<h1>Today's Forecast</h1>");

//temp  
$("#today").append("<p>Temp:</p>");

//wind 
$("#today").append("<p>Wind:</p>");

//humidity
$("#today").append("<p>Humidity:</p>");



