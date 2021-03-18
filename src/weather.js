const weather = (() => {
  const API_KEY = '2aa51e99292e07e88fc8df562ef76c2a';

  const getData = (city) => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`,
    { mode: 'cors' })
    .then((response) => response.json());

  return { getData };
})();

export default weather;