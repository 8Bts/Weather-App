const weather = (() => {
  const API_KEY = 'myapikey';

  const getData = (city) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
    { mode: 'cors' })
    .then((response) => response.json());

  return { getData };
})();

export default weather;
