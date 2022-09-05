let currentDate = moment.unix(cityInfo.date).format("dddd, MMM Do");

// Create city search variables
var cityInputEl = $("search-input");
var submitEl = $("#searchBtn");
var userFormEl = $("user-form");
let apiKey = "8cdec653bf4d6c9ed8b17db127872228";
let searchHistoryList = [];


var formSubmitHandler = function (event) {
    // Prevents sending to server -- stays on this page
    event.preventDefault();
    // Trim takes out extra white space
    var cityname = cityInputEl.value.trim();
    // Calls getCityWeather function
    if (cityName) {
        // Trim takes out extra white space
        cityInputEl.value.trim = cityName;

        getCityWeather(cityName);
        cityInputValue.value = " ";
    } else {
        // If user has no input this is what they'll see
        cityInputValue.value = " ",
            alert("Please enter a city");
    }
};


//$("#searchBtn").on("click", (getCityWeather) => {
//let cityName = cityInputEl.value.trim();


// var getCityWeather = function (cityName) 


let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}";
//let iconUrl = `<img src="http://api.openweathermap.org/img/w/${iconCode}.png" alt="${futureResponse.daily[i].weather[0].main}" />`;

// Function to call current weather
function currentWeather(city) {
    // Fetch the weather
    fetch(apiUrl)
        .then(response => {
            if (response.ok) {
                // Here we are getting the .then data and using it to display weather
                return response.json().then(function (data) {
                });
            } else {
                alert("Error: " + response.statusText);
            }
        })
        .catch(function (error) {
            alert("Unable to connect to Weather");
        });
    
        .then(function (weatherData) {
            $("#weather-display").empty();
            console.log(weatherResponse);
            var currentIcon = (weatherResponse.weather[0].icon);
            var iconUrl = ("http://api.openweathermap.org/img/w/${iconCode}.png");

            // View current weather conditions for that city
            // Display city name, date, and icon representing weather condition, temp,
            // Humidity, and wind speed
            var currentWeather = $(`
            <h3 id="currentWeather">
                ${weatherResponse.name} ${currentDate} <img src="${iconURL}" alt="${weatherResponse.weather[0].description}; /></h3>
            <p> Temperature: ${weatherResponse.main.temp} °F </p>
            <p> Wind Speed: ${weatherResponse.wind.speed} MPH </p>
            <p> Humidity: ${weatherResponse.main.humidity} \% </p>
        `);

            $(#weather-display).append(currentWeather);
        });

            //UV index
            let lat = weatherResponse.coord.lat;
            let lon = weatherResponse.coord.lon;
            let uviURL = "https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}";


    fetch(uviUrl)
        .then(response => {
            if (response.ok) {
                // Here we are getting the .then data and using it to display UVI Index
                return response.json().then(function (data) {
                });
            }
        .then(function(uviResponse) {
            console.log(uviResponse.value);

            let uvIndex = uviResponse.value;
            let uvIndexPara = $
        }
        )
        });
};



