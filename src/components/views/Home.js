import { h } from 'hyperapp'
import CityResults from './CityResults'

export default (state, actions) => {
  return (
    <div>
      <div>
        <input oninput={e => actions.getCities(e.target.value).then(cities => actions.addSearchToState(cities))} />
      </div>
      <CityResults cities={state.searchCities} getWeatherData={actions.getWeatherData}></CityResults>
    </div>
  )
}
