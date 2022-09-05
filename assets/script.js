let today = moment().format("dddd, MMM Do");
$("#currentDay").text(today);

// Create city search variables
var cityInputEl = $("search-input");
var submitEl = $("#searchBtn");
var userFormEl = $("user-form");
let apiKey = "8cdec653bf4d6c9ed8b17db127872228"


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


    $("#searchBtn").on("click", (getCityWeather) => {
        let cityName = cityInputEl.value.trim();
        
    // var getCityWeather = function (cityName) 
    let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8cdec653bf4d6c9ed8b17db127872228";
    let icon = "http://api.openweathermap.org/img/wn/${cityData.weather[0].icon}";
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
    
        .catch (function (error) {
            alert("Unable to connect to Weather");
        });
    };
    


    function weatherCall(weatherData) {
        var currentIcon = (weatherData[0].id);
        var currentCity = (weatherData.name);
        var currentTemp = (weatherData.main.temp);
        var currentWind = (weatherData.wind.speed);
        var currentHumidity = (data.main.humidity);
        console.log(weatherData);
        $(".icon").app(currentIcon);
        $(".temp").app("The weather in " + currentCity + " " + " is " + currentTemp + "&#8457;");
        $(".wind").app("Wind speed " + currentWind);
        $(".humidity").app("Humidity " + currentHumidity);
    });
            


