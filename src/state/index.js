import { location } from '@hyperapp/router'

export default {
  location: location.state,
  input: '',
  searchCities: [],
  savedCities: [
    {
      id: 1,
      name: 'Paris',
      latitude: 48.8589,
      longitude: 2.3469,
      temperature: 20,
      iconPath: '../../img/clear-day.png',
      summary: 'Breezy and mostly cloudy throughout the day.',
      humidity: 30,
      windSpeed: 1.00,
      sunriseTime: '8:00',
      sunsetTime: '20:00'
    },
    {
      id: 2,
      name: 'Lille',
      latitude: 50.5412,
      longitude: 3.2446,
      temperature: 16,
      iconPath: '../../img/clear-day.png',
      summary: 'du blabla',
      humidity: 56,
      windSpeed: 42.00,
      sunriseTime: '7:00',
      sunsetTime: '21:42'
    }
  ],
  displayedCity: {
    id: 1
  }
}
