import { location } from '@hyperapp/router'
import { manageState } from './manageState.js'
import { searchAPI } from './searchAPI.js'
import { weatherAPI } from './weatherAPI.js'

const actions = {
  location: location.actions, // Pour le router
  addSearchToState: manageState.addSearchToState,
  createCity: manageState.createCity,
  getCities: searchAPI.getCities,
  getWeatherData: weatherAPI.getWeatherData
}

export default actions
