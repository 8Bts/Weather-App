const dom = (() => {
  const wDefaultCont = document.getElementById('wDefaultCont');
  const wDataCont = document.getElementById('wDataCont');
  const searchFlash = document.getElementById('searchFlash');

  const renderData = (data) => {
    wDefaultCont.classList.replace('d-flex', 'd-none');
    wDataCont.classList.remove('d-none');

    document.getElementById('w-city').innerText = data.name;
    document.getElementById('w-desc').innerText = data.weather[0].description;
    document.getElementById('w-temp').innerText = `${data.main.temp}°C`;
    document.getElementById('w-wind').innerText = `${data.wind.speed}m/s`;
    document.getElementById('w-humid').innerText = `${data.main.humidity}%`;
  };

  const renderSearchFail = () => {
    wDefaultCont.classList.replace('d-none', 'd-flex');
    wDataCont.classList.add('d-none');
    searchFlash.innerText = 'City not found :\\';
  };

  return { renderData, renderSearchFail };
})();

export default dom;