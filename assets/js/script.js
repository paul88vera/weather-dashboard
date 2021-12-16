
var getCityInfo = function(cityName){  
  var apiUrl = "api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=def04aeb0bc1cff2cbceffb86658aa7d";

  fetch(apiUrl).then(function(response) {
    if (response.ok) {
      response.json().then(function(data){
        displayWeather(data);
        
        if (response.headers.get('Link')) {
          displayWarning(cityName);
        }
        
      })
    } else {
      alert("There was an issue with your request");
    }
  });
};