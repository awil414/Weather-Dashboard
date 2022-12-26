// let currentDate = moment.unix(cityInfo.date).format("MM/DD/YY");
// let currentCity = "";
// let lastCity = "";

// // API Key
// let apiKey = "8cdec653bf4d6c9ed8b17db127872228";


// // Handler for errors upon fetch
// var formFetchHandler = (response) => {
//     if (!response.ok) {
//         throw Error(response.statusText);
//     }
//     return response;
// }

// // getCurrentWeather function to get and display the current weather
// var getCurrentWeather = (event) => {
//     // Get searched city name and trim out extra white space
//     var city = $("#user-input").value.trim();
//     currentCity = $("#user-input").value.trim();

//     // Fetch from weather API
//     let apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + "8cdec653bf4d6c9ed8b17db127872228";
   
//     fetch(apiUrl)
//         .then(formFetchHandler)
//         .then((response) => {
//             if (response.ok) {
//                 // Here we are getting the .then data and using it to display weather
//                 return response.json();

//             } else {
//                 // If user has no input this is what they'll see
//                 currentCity = " ",
//                     alert("Please enter a city");
//             };
//         })

//         .then((response) => {
//             // Save city to local storage
//             saveCity(city);

//             // Create icon for the current weather condition using Open Weather Maps
//             let currentIcon= "http://api.openweathermap.org/img/w/" + response.weather[0].icon + ".png";
//             })
//             // If catch error on server end response
//             .catch(function (error) {
//                 alert("Unable to connect to Weather");
//             });
        
//             let currentWeatherHTML = `
//                 <h3${response.name} ${currentDate}<img src="${currentIcon}"></h3>
//                 <ul class="list-unstyled">
//                     <li> Temperature: ${response.main.temp}&#8457 </li>
//                     <li> Humidity: ${response.main.humidity}% </li>
//                     <li> Wind Speed: ${response.wind.speed} mph </li>
//                     <li id="uvIndex">UV Index:</li>
//                 </ul> `;

//             // Append the results to the DOM
//             $("#current-weather").html(currentWeatherHTML);
                    

//             // Get UV index - longitude and latitude from Open Weather Maps API
//             let lat = response.coord.lat;
//             let lon = response.coord.lon;
//             let uviUrl = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;

     
//     // Fetch the UV information and create color coding for the UV index
//     fetch(uviUrl)
//         .then(formFetchHandler)
//         .then(response => {
//             if (response.ok) {
//                 // Here we are getting the .then data and using it to display UVI Index
//                 return response.json();
//             });
//         }
//         .then(function(uviResponse) {
//             console.log(uviResponse.value);

//             let uvIndex = uviResponse.value;
//             $("#uvIndex").html("UV Index: <span id="uvData"> ${uvIndex}</span>);
//             if (uvIndex>=0 && uvIndex<3) {
//                 $("#uvData").attr("class", "uv-favorable");

//             } else if (uvIndex>=3 && uvIndex<8) {
//                 $("#uvData").attr("class", "uv-moderate");

//             } else if (uvIndex>=8) {
//                 $("#uvData").attr("class", "uv-severe");
//             }
            
//         });
        
//     })
// };


// // Function to get the five day forecast and display to html
// var getForecast = (event) => {
//     let city = $("userInput").val();

//     // Create URL for forecast search
//     let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=" + apiKey;
//     // Fetch forecast API
//     fetch(forecastUrl)
//         .then (formFetchHandler)
//         .then ((response) => {
//             if (response.ok) {
//                 // Here we are getting the .then data and using it to display forecast
//                 return response.json();
//             };
//         }


// };


// // Function to save searched city to local storage
// var saveCity = (newCity) => {
//     let cityExists = false;
//     //Checks to see if city already exists in local storage
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage["cities" + i] === newCity) {
//             cityExists = true;
//             break;
//         }
//     }
//     // Save new city to local storage
//     if (cityExists === false) {
//         localStorage.setItem("cities" + localStorage.length, newCity);
//     }
// };


// //  Get list of searched cities
// var getCities = () => {

// }

// /* Adding Event Listener to search button
// document.getElementById("#searchBtn").addEventListener("click", function);
// document.getElementById("#searchBtn").addEventListener("click", function); */

// $("#searchBtn").on("click", (event) => {
// event.preventDefault();
// currentCity = $("#userInput").val();
// getCurrentWeather(event);
// });

// listSearchedCities();

// getCurrentWeather();

