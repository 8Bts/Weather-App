import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all';

import Weather from './weather';
import Dom from './dom';
import Giphy from './giphy';
import './styles/style.css';


const form = document.getElementById('searchForm');
const cityInput = document.getElementById('cityName');
cityInput.focus();

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  const data = await Weather.getData(city);

  if (data.cod === 200) {
    Dom.renderData(data);
    try {
      const gif = await Giphy.getData(data.weather[0].description);
      Dom.setWeatherBackground(gif.data.images.original.url);
      console.log(gif.data.images.original.url);
    } catch (err) {
      Dom.setWeatherBackground('https://media.giphy.com/media/ZxLr4sFdcSRVhajXli/giphy.gif');
    }
  } else Dom.renderSearchFail();
});
