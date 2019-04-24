// Page principale (ajout et suppression des villes)

import { h } from 'hyperapp'
import CityResults from '../components/CityResults'
import CitiesSavedHome from '../components/CitiesSavedHome'

const Home = (state, actions) => {
  return (
    <div>
      <div>
        <input oninput={e => {actions.updateInput(e.target.value); actions.getCities(e.target.value).then(cities => actions.addSearchToState(cities))}} value={state.input}/>
      </div>
      <CityResults cities={state.searchCities} getWeatherData={actions.getWeatherData} createCity={actions.createCity}></CityResults>
      <CitiesSavedHome savedCities={state.savedCities} changeDisplayedCity={actions.changeDisplayedCity}></CitiesSavedHome>
    </div>
  )
}

export default Home
