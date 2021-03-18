const dom = (() => {
  const wDefaultCont = document.getElementById('wDefaultCont');
  const wDataCont = document.getElementById('wDataCont');

  const renderData = (data) => {
    if (wDataCont) wDefaultCont.remove();
    wDataCont.classList.remove('d-none');

    document.getElementById('w-city').innerText = data.name;
    document.getElementById('w-desc').innerText = data.weather[0].description;
    document.getElementById('w-temp').innerText = `${data.main.temp}°C`;
    document.getElementById('w-wind').innerText = `${data.wind.speed}m/s`;
    document.getElementById('w-humid').innerText = `${data.main.humidity}%`;
  };

  return { renderData };
})();

export default dom;