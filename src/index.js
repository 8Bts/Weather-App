import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

import Weather from './weather';
import Dom from './dom';
import './styles/style.css';


const form = document.getElementById('searchForm');
const cityInput = document.getElementById('cityName');
cityInput.focus();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityInput.value;
  Weather.getData(city).then((data) => {
    if (data.cod === 200) {
      Dom.renderData(data);
    } else Dom.renderSearchFail();
  }).catch();
});
