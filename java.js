console.log("Hello World");

// creating a weather App

var searchForm = document.querySelector("#search-form");

var apiKey = "d9e9a9f5f5a5b7a2c7c0b8f8b6e9d0b5";

var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&" + "appid= + " + apiKey;

var searchInput = document.querySelector("#search-input");

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}