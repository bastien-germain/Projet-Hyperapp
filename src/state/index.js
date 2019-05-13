import { location } from '@hyperapp/router'

export default {
  location: location.state,
  input: '',
  searchCities: [],
  savedCities: [ {
    id: Date.now(),
    selected: false,
    time: '',
    name: 'Test',
    latitude: '',
    longitude: '',
    temperature: '',
    iconPath: '',
    summary: '',
    precipProbability: 1, // Pour le passer en pourcentage
    humidity: 0,
    windSpeed: 0,
    sunriseTime: 0,
    sunsetTime: 0
  }],
  displayedCity: {
    id: 1
  }
}
