var aside = document.querySelector("aside");
var searchBtn = document.querySelector(".searchBtn");
var temp = document.querySelector(".temp0");
var wind = document.querySelector(".wind0");
var humidity = document.querySelector(".humidity0");
var icon = document.querySelector(".icon0");
var uvIndex = document.querySelector(".uVIndex");
var date1 = document.querySelector(".date1");
var date2 = document.querySelector(".date2");
var date3 = document.querySelector(".date3");
var date4 = document.querySelector(".date4");
var date5 = document.querySelector(".date5");
var temp1 = document.querySelector(".temp1");
var temp2 = document.querySelector(".temp2");
var temp3 = document.querySelector(".temp3");
var temp4 = document.querySelector(".temp4");
var temp5 = document.querySelector(".temp5");
var wind1 = document.querySelector(".wind1");
var wind2 = document.querySelector(".wind2");
var wind3 = document.querySelector(".wind3");
var wind4 = document.querySelector(".wind4");
var wind5 = document.querySelector(".wind5");
var humidity1 = document.querySelector(".humidity1");
var humidity2 = document.querySelector(".humidity2");
var humidity3 = document.querySelector(".humidity3");
var humidity4 = document.querySelector(".humidity4");
var humidity5 = document.querySelector(".humidity5");
var icon1 = document.querySelector(".icon1");
var icon2 = document.querySelector(".icon2");
var icon3 = document.querySelector(".icon3");
var icon4 = document.querySelector(".icon4");
var icon5 = document.querySelector(".icon5");

var getCityInfo = function (city) {
  var city = document.querySelector(".city").value;
  var name = document.querySelector(".name");
  var apiUrl =
    `https://api.openweathermap.org/data/2.5/forecast?q=` +
    city +
    `&appid=def04aeb0bc1cff2cbceffb86658aa7d`;

  // var apiUrl = 'https://api.github.com/users/' + city + '/repos';


  // requesting API object information
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        // main info needed from API
        var nameValue = data.city.name;
        var dateValue = new Date();
        var tempValue = data.list[0].main.temp;
        var windValue = data.list[0].wind.speed;
        var humidityValue = data.list[0].main.humidity;
        var lon = parseFloat(data.city.coord.lon).toFixed(2);
        var lat = parseFloat(data.city.coord.lat).toFixed(2);
        var uvIndexApi =
          "https://samples.openweathermap.org/v3/uvi/" +
          lat +
          "," +
          lon +
          "/" +
          dateValue.getFullYear() +
          "-" +
          (dateValue.getMonth() + 1) +
          "-" +
          dateValue.getDate() +
          "Z.json?appid=def04aeb0bc1cff2cbceffb86658aa7d";

        uvIndex.innerHTML = uvIndexApi;

       // temperature conversion from kelvin to fahrenheit
        var tempConverted = Math.trunc(((tempValue - 273.15) * 9) / 5 + 32);

        name.textContent =
          nameValue +
          " " +
          (dateValue.getMonth() + 1) +
          "/" +
          dateValue.getDate() +
          "/" +
          dateValue.getFullYear();
        temp.textContent = "Temp: " + tempConverted + "°";
        wind.innerHTML = "Wind: " + windValue + " m/s";
        humidity.innerHTML = "Humidity: " + humidityValue + "%";

        //* card 1 info
        var tempValue1 = data.list[1].main.temp;
        var windValue1 = data.list[1].wind.speed;
        var humidityValue1 = data.list[1].main.humidity;
        var iconValue1 = data.list[1].weather[0].icon;
        var tempConverted1 = Math.trunc(((tempValue1 - 273.15) * 9) / 5 + 32);

        date1.innerHTML =
          dateValue.getMonth() +
          1 +
          "/" +
          (dateValue.getDate() + 1) +
          "/" +
          dateValue.getFullYear();
        temp1.textContent = "Temp: " + tempConverted1 + "°";
        wind1.innerHTML = "Wind: " + windValue1 + " m/s";
        humidity1.innerHTML = "Humidity: " + humidityValue1 + "%";

        icon1.src =
          "http://openweathermap.org/img/wn/" + iconValue1 + "@2x.png";

        //* card 2 info
        var tempValue2 = data.list[2].main.temp;
        var windValue2 = data.list[2].wind.speed;
        var humidityValue2 = data.list[2].main.humidity;
        var iconValue2 = data.list[2].weather[0].icon;
        var tempConverted2 = Math.trunc(((tempValue2 - 273.15) * 9) / 5 + 32);

        date2.innerHTML =
          dateValue.getMonth() +
          1 +
          "/" +
          (dateValue.getDate() + 2) +
          "/" +
          dateValue.getFullYear();
        temp2.textContent = "Temp: " + tempConverted2 + "°";
        wind2.innerHTML = "Wind: " + windValue2 + " m/s";
        humidity2.innerHTML = "Humidity: " + humidityValue2 + "%";

        icon2.src =
          "http://openweathermap.org/img/wn/" + iconValue2 + "@2x.png";

        //* card 3 info
        var tempValue3 = data.list[3].main.temp;
        var windValue3 = data.list[3].wind.speed;
        var humidityValue3 = data.list[3].main.humidity;
        var iconValue3 = data.list[3].weather[0].icon;
        var tempConverted3 = Math.trunc(((tempValue3 - 273.15) * 9) / 5 + 32);

        date3.innerHTML =
          dateValue.getMonth() +
          1 +
          "/" +
          (dateValue.getDate() + 3) +
          "/" +
          dateValue.getFullYear();
        temp3.textContent = "Temp: " + tempConverted3 + "°";
        wind3.innerHTML = "Wind: " + windValue3 + " m/s";
        humidity3.innerHTML = "Humidity: " + humidityValue3 + "%";

        icon3.src =
          "http://openweathermap.org/img/wn/" + iconValue3 + "@2x.png";

        //* card 4 info
        var tempValue4 = data.list[4].main.temp;
        var windValue4 = data.list[4].wind.speed;
        var humidityValue4 = data.list[4].main.humidity;
        var iconValue4 = data.list[4].weather[0].icon;
        var tempConverted4 = Math.trunc(((tempValue4 - 273.15) * 9) / 5 + 32);

        date4.innerHTML =
          dateValue.getMonth() +
          1 +
          "/" +
          (dateValue.getDate() + 4) +
          "/" +
          dateValue.getFullYear();
        temp4.textContent = "Temp: " + tempConverted4 + "°";
        wind4.innerHTML = "Wind: " + windValue4 + " m/s";
        humidity4.innerHTML = "Humidity: " + humidityValue4 + "%";

        icon4.src =
          "http://openweathermap.org/img/wn/" + iconValue4 + "@2x.png";

        //* card 5 info
        var tempValue5 = data.list[5].main.temp;
        var windValue5 = data.list[5].wind.speed;
        var humidityValue5 = data.list[5].main.humidity;
        var iconValue5 = data.list[5].weather[0].icon;
        var tempConverted5 = Math.trunc(((tempValue5 - 273.15) * 9) / 5 + 32);

        date5.innerHTML =
          dateValue.getMonth() +
          1 +
          "/" +
          (dateValue.getDate() + 5) +
          "/" +
          dateValue.getFullYear();
        temp5.textContent = "Temp: " + tempConverted5 + "°";
        wind5.innerHTML = "Wind: " + windValue5 + " m/s";
        humidity5.innerHTML = "Humidity: " + humidityValue5 + "%";

        icon5.src =
          "http://openweathermap.org/img/wn/" + iconValue5 + "@2x.png";
      });
    } else {
      alert("ERROR: Something went wrong. Try again.");
    }
  });
  
  //* past search function
        pastSearch();
};

//*  EVENT ON CLICK */
var search = function() {
  // searchBtn.addEventListener('click', getCityInfo);

  var city = document.querySelector(".city").value;
  document.querySelector('.searchThis').value = city;
  document.querySelector('.searchThis').addEventListener('click', getCityInfo);
  console.log('clicked');
  console.log(city);
};
search();

//* EVENT ON DOUBLE ENTER KEY */
document.querySelector('.searchBar').addEventListener('keypress', function (e) {
  var searchBar = document.querySelector('.searchBar');
  if (e.key === "Enter") {
    searchBar.addEventListener('keypress', getCityInfo);
  } else {
    searchBar.removeEventListener('keypress', getCityInfo);
  }
});

// create new past search elements
var pastSearch = function () {
  var city = document.querySelector(".searchBar").value;
  var newSearchEl = document.createElement("button");
  newSearchEl.classList = "newBtn city searchThis";
  aside.appendChild(newSearchEl);
  newSearchEl.textContent = city;
  newSearchEl.value = city;
  newSearchEl.setAttribute('onclick', 'search()');

};
console.log(city);
console.log(searchThis);
