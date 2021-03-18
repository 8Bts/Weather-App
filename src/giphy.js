const giphy = (() => {
  const API_KEY = 'uu33wB4trsxskBDt6ylEu0Zkhlq3RBxX';

  const getData = (gifName) => fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${gifName}`,
    { mode: 'cors' })
    .then((response) => response.json());

  return { getData };
})();

export default giphy;