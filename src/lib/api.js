export function getWeather() {
      fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=London&APPID=82f64da34251b0e58e057d344f3307a1'
      ).then(data => data.json())
      .then( result => result)
      .catch(error => console.error(error));
  }