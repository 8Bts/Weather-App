import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

import Weather from './weather';
import './styles/style.css';


const form = document.getElementById('searchForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = document.getElementById('cityName').value;
  Weather.getData(city).then((data) => {
    if (data.cod === 200) {
      document.getElementById('w-city').innerText = city;
      document.getElementById('w-desc').innerText = data.weather[0].description;
      document.getElementById('w-temp').innerText = data.main.temp;
      document.getElementById('w-wind').innerText = data.wind.speed;
      document.getElementById('w-humid').innerText = data.main.humidity;
    } else console.log('City not found!');
  }).catch((err) => console.log(err));
});
