import { h } from "hyperapp";
import { Link } from "@hyperapp/router";
import CitiesSavedMenu from '../components/CitiesSavedMenu'
import FullDataCity from '../components/FullDataCity'

const Cities = (state, actions) =>  (
  <div>
    <Link to='/'>Home</Link>
    <h1>Météo détaillée</h1>
    <CitiesSavedMenu savedCities={state.savedCities} changeDisplayedCity={actions.changeDisplayedCity}></CitiesSavedMenu>
    <FullDataCity savedCities={state.savedCities} cityId={state.displayedCity.id}></FullDataCity>
  </div>
)
export default Cities
