function getWeather() {
  let root = 'http://api.openweathermap.org/data/2.5/weather?q=Plovdiv&appid=dd499c45f40d45ef9609d1664916eaa0'

  $.ajax({
    url: root,
    method: 'GET'
  }).then(function (data) {
    $('p').text(data.weather[0].main);
  })
}

getWeather();
