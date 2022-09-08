let currentDate = moment().format("MM/DD/YY");
let currentCity = "";
let lastCity = "";

// API Key
let apiKey = "8cdec653bf4d6c9ed8b17db127872228";

$("#searchBtn").on("click", (event) => {
    event.preventDefault();
    currentCity = $("#userInput").val();
    getCurrentWeather(currentCity);
    getForecast(currentCity);
   // saveCity(currentCity);
    });

var getCurrentWeather = (currentCity) => {

    let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + currentCity + "&units=imperial" + "&APPID=" + apiKey;

    fetch(apiUrl)
    .then((response) => {
        if (response.ok) {
            // Here we are getting the .then data and using it to display weather
            return response.json();
        }
    })
    .then((data) => {
        console.log(data)
        let currentIcon= "http://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        //Display to DOM
        let currentWeatherHTML = `
                <h3>${data.name} ${currentDate}<img src="${currentIcon}"></h3>
                <ul class="list-unstyled">
                    <li> Temperature: ${data.main.temp}&#8457 </li>
                    <li> Humidity: ${data.main.humidity}% </li>
                    <li> Wind Speed: ${data.wind.speed} mph </li>
                    <li id="uvIndex">UV Index:</li>
                </ul> `;
                $("#current-weather").html(currentWeatherHTML);

                getUvi(data.coord.lat, data.coord.lon)
    })

}

var getUvi = (lat, lon) => {
    let uviUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;

    fetch(uviUrl)
    .then((response) => {
        if (response.ok) {
            // Here we are getting the .then data and using it to display weather
            return response.json();
        }
    })
    .then((data) => {
        console.log(data)
        let uvIndex = data.value;
        $("#uvIndex").html(`UV Index: <span id="uvData"> ${uvIndex}</span>`);
        if (uvIndex>=0 && uvIndex<3) {
            $("#uvData").attr("class", "uv-favorable");

        } else if (uvIndex>=3 && uvIndex<8) {
            $("#uvData").attr("class", "uv-moderate");

        } else if (uvIndex>=8) {
            $("#uvData").attr("class", "uv-severe");
        }
       
    })
        
}

var getForecast = (currentCity) => {
    
    // Create URL for forecast search
    let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + currentCity + "&units=imperial" + "&appid=" + apiKey + "&cnt=5";

    // Fetch forecast API
    fetch(forecastUrl)
    .then((response) => {
        if (response.ok) {
            // Here we GET the data
            return response.json();
        }  
    })
    .then((data) => {
        console.log(data)
       // let forecastIcon= "http://api.openweathermap.org/img/w/" + data.weather[0].icon + i + ".png";
        // Here we DISPLAY the data

        for (var i=1; i<6; i++) {
            let forecastDate = (currentDate + i)
        let forecastHTML = `
        
            <h5>${forecastDate}</h5> 
                <ul class="list-unstyled">
                    <li> Temperature: ${data.main.temp}&#8457 </li>
                    <li> Humidity: ${data.main.humidity}% </li>
                    <li> Wind Speed: ${data.wind.speed} mph </li>
                    <li id="uvIndex">UV Index:</li>
                </ul> `;
                $("#future-weather").html(forecastHTML);
        
        
        }
    })
    
}// <img src="${forecastIcon}">