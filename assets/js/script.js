
var searchBtn = document.querySelector('#searchBtn');
var name = document.querySelector('.name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var humidity = document.querySelector('.humidity');
var icon = document.querySelector('.icon');



var getCityInfo = function(city){
  var city = document.querySelector('input').value;
  
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&appid=def04aeb0bc1cff2cbceffb86658aa7d`;

    fetch(apiUrl)
    .then(function(response) {
      if (response.ok) {
        response.json().then(function(data) {
          var nameValue = data.city.name;
          // var dataValue = data.list[0].
          var tempValue = data.list[0].main.temp;
          var windValue = data.list[0].wind.speed;
          var humidityValue = data.list[0].main.humidity;
          // var iconValue = data.city.list[0].weather[0].icon;

          name.textContent = "City Name: " + nameValue + " "  ;
          temp.textContent = "Temp: " + tempValue;
          wind.innerHTML = "Wind: " + windValue + "mph";
          humidity.innerHTML = "Humidity: " + humidityValue + "%";
          // icon.innerHTML = iconValue;
          console.log(nameValue);
          console.log(tempValue);
          console.log(windValue);

        })
      } else {
        alert('error');
      }
    });
  };

$('.searchBtn').click(function() {
  console.log('click');
  
  getCityInfo();
});
