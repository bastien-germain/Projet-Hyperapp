// Page principale (ajout et suppression des villes)

import { h } from 'hyperapp'
import CityResults from '../components/CityResults'
import CitiesSavedHome from '../components/CitiesSavedHome'

const Home = (state, actions) => {
  return (
    <div>
      <div class="title">
        <img class="logo" src="../../img/meteorite.png"/>
        <h1>Météo Right</h1>
      </div>
      <input oninput={e => {actions.updateInput(e.target.value); actions.getCities(e.target.value).then(cities => actions.addSearchToState(cities))}} value={state.input}/>
      <CityResults cities={state.searchCities} getWeatherData={actions.getWeatherData} createCity={actions.createCity} getPreviousForecast={actions.getPreviousForecast} addPreviousForecast={actions.addPreviousForecast}></CityResults>
      <CitiesSavedHome savedCities={state.savedCities} getPreviousForecast={actions.getPreviousForecast} changeDisplayedCity={actions.changeDisplayedCity} deleteCity={actions.deleteCity} selectCity={actions.selectCity}></CitiesSavedHome>
    </div>
  )
}

export default Home
