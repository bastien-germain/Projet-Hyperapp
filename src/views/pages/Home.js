// Page principale (ajout et suppression des villes)

import { h } from 'hyperapp'
import CityResults from '../components/CityResults'
import CitiesSavedHome from '../components/CitiesSavedHome'

const Home = (state, actions) => {
  return (
    <div>
      <h1>Météo Right</h1>
      <input oninput={e => {actions.updateInput(e.target.value); actions.getCities(e.target.value).then(cities => actions.addSearchToState(cities))}} value={state.input}/>
      <CityResults cities={state.searchCities} getWeatherData={actions.getWeatherData} createCity={actions.createCity}></CityResults>
      <CitiesSavedHome savedCities={state.savedCities} changeDisplayedCity={actions.changeDisplayedCity} deleteCity={actions.deleteCity} selectCity={actions.selectCity}></CitiesSavedHome>
    </div>
  )
}

export default Home
