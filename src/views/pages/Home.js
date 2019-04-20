// Page principale (ajout et suppression des villes)

import { h } from 'hyperapp'
import CityResults from '../components/CityResults'
import CitiesSaved from '../components/CitiesSaved'

const Home = (state, actions) => {
  return (
    <div>
      <div>
        <input oninput={e => actions.getCities(e.target.value).then(cities => actions.addSearchToState(cities))} />
      </div>
      <CityResults cities={state.searchCities} getWeatherData={actions.getWeatherData} createCity={actions.createCity}></CityResults>
      <CitiesSaved savedCities={state.savedCities}></CitiesSaved>
    </div>
  )
}

export default Home
