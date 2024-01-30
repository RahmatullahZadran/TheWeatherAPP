console.log("Hello World");

// creating a weather App

var searchForm = document.querySelector("#search-form");

var apiKey = "766bf34a17420469977c1a427d2a44ae";

var searchInput = document.querySelector("#search-input");

// var queryURL = "https://pro.openweathermap.org/data/2.5/forecast?q=$" + searchInput.value + "&" + "appid=$" + apiKey;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ searchInput + "&" + "appid="+ apiKey;

var searchInput = document.querySelector("#search-input");


$("#search-button").on("click", function (event) {
    event.preventDefault();
    console.log(searchInput.value);

   //if emoty dont do anything
    if (searchInput.value === "" || searchInput.value === null ) {
        return;
    }


    //unauthorized 


// var queryURL = "https://pro.openweathermap.org/data/2.5/forecast?q= " + searchInput.value + "&" + "units=imperial&appid=" + apiKey;
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ searchInput.value + "&" + "appid="+ apiKey;


    $("#history").append("<button class='btn btn-secondary history-button'>" + searchInput.value + "</button> ");
    searchInput.value = "";

    var buttonCount = $(".history-button").length;


    // Limit the number of buttons to 6
    if (buttonCount >= 8) {
        // Remove the oldest button
        $(".history-button:first").remove();
    }

    // if a button is pressed search for that city
    $(".history-button").on("click", function () {

        var city = $(this).text();
        queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&" + "appid=" + apiKey;

        fetch(queryURL) 
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {

            //empty div
            $("#today").empty();
            //today date dd/mm/yyyy
            var today = dayjs().format('DD MM, YYYY');
            var iconCode = data.weather[0].icon;
            var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
            $("#today").append("<h1>" + data.name + " " + today + "<img src='" + iconUrl + "'>"  + "</h1>");
            $("#today").append("<p>Temp:" + data.main.temp + "</p>");
            $("#today").append("<p>Wind:" + data.wind.speed + "</p>");
            $("#today").append("<p>Humidity:" + data.main.humidity + "</p>");

        })
    })

    fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {

    if (data.cod === "404") {
    //empty div
    $("#today").empty();
    $("#today").append("<h1>" + "please enter a valid city" + "</h1>");
            return;
        }
    //empty div
    $("#today").empty();
    
    //today date dd/mm/yyyy
    var today = dayjs().format('DD MM, YYYY');
    var iconCode = data.weather[0].icon;
    var iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png";
    
    $("#today").append("<h1>" + data.name + " " + today + "<img src='" + iconUrl + "'>"  + "</h1>");
    
    $("#today").append("<p>Temp:" + data.main.temp + "</p>");

    $("#today").append("<p>Wind:" + data.wind.speed + "</p>");

    $("#today").append("<p>Humidity:" + data.main.humidity + "</p>");

    console.log(data);

    $("#forecast").empty();
    $("#forecast").append("<h1>" + "5 Day Forecast" + "</h1>");
 

//unauthorized


//     var queryURLDay1 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&units=imperial&appid=" + apiKey;
//     fetch(queryURLDay1)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//     console.log(data);
// })

      
    
            
    for (var i = 1; i <= 5; i++) {
        var cardHtml = "<div class='card'>" +
                            "<div class='card-body'>" +
                                "<h5 class='card-title'>" + "Date" + data.dt + "<img src='" + iconUrl + "'>" + "</h5>" +
                                "<p class='card-text'>" + "Temp" + data.main.temp +    "</p>" +
                                "<p class='card-text'>" + "Wind" + data.wind.speed +"</p>" +
                                "<p class='card-text'>" + "Humidity" +   data.main.humidity +"</p>" +
                            "</div>" +
                        "</div>";

        $("#forecast").append(cardHtml);
        $(".card").css("width", "18%");
        $(".card").css("margin", "2px");
        $(".card").css("background-color", "darkgray");


    console.log(queryURL);



}
});
});


$(".history-button").on("click", function () {

    var city = $(this).text();
    queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&" + "appid=" + apiKey;
})





// $("#search-button").on("click", function (event) {
//     event.preventDefault();
//     console.log(searchInput.value);

//    //if emoty dont do anything
//     if (searchInput.value === "" || searchInput.value === null ) {
//         return;
//     }
//     for (var i = 1; i <= 5; i++) {
//         var cardHtml = "<div class='card'>" +
//                             "<div class='card-body'>" +
//                                 "<h5 class='card-title'>" + "Date" + "</h5>" +
//                                 "<p class='card-text'>" + "Temp" + "</p>" +
//                                 "<p class='card-text'>" + "Wind" + "</p>" +
//                                 "<p class='card-text'>" + "Humidity" + "</p>" +
//                             "</div>" +
//                         "</div>";
    
//         $("#forecast").append(cardHtml);    
//         $(".card").css("width", "18%");
//         $(".card").css("margin", "2px");
//         $(".card").css("background-color", "darkgray");
        
    

// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ searchInput.value + "&" + "appid="+ apiKey;

// $("#forecast").empty();
// $("#forecast").append("<h1>" + "5 Day Forecast" + "</h1>");

// var queryURLDay1 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + data.coord.lat + "&lon=" + data.coord.lon + "&units=imperial&appid=" + apiKey;
// fetch(queryURLDay1)
// .then(function (response) {
//   return response.json();
// })
// .then(function (data) {
// console.log(data);
// })

// console.log(queryURL);
// };
// });






// console.log(queryURL);
// //forcast
// $('#today').append("<h1>Today's Forecast</h1>");

// //temp  
// $("#today").append("<p>Temp:</p>");

// //wind 
// $("#today").append("<p>Wind:</p>");

// //humidity
// $("#today").append("<p>Humidity:</p>");

