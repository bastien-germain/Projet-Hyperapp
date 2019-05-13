import { location } from '@hyperapp/router'
import { manageState } from './manageState.js'
import { searchAPI } from './searchAPI.js'
import { weatherAPI } from './weatherAPI.js'

const actions = {
  location: location.actions, // Pour le router
  addSearchToState: manageState.addSearchToState,
  createCity: manageState.createCity,
  changeDisplayedCity: manageState.changeDisplayedCity,
  updateInput: manageState.updateInput,
  deleteCity: manageState.deleteCity,
  selectCity: manageState.selectCity,
  getCities: searchAPI.getCities,
  getWeatherData: weatherAPI.getWeatherData,
  getPreviousForecast: weatherAPI.getPreviousForecast,
  addPreviousForecast: manageState.addPreviousForecast
}

export default actions
