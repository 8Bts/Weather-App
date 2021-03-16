import Weather from './weather';

Weather.getData('Jerusalem').then((data) => console.log(data));