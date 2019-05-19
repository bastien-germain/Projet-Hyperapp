import { h } from "hyperapp";
import { Link } from "@hyperapp/router";
import CitiesSavedMenu from '../components/CitiesSavedMenu'
import FullDataCity from '../components/FullDataCity'

const Cities = (state, actions) =>  (
  <div>
    <div class="titleCities">
      <img class="logoCities" src="../../img/meteorite.png"/>
      <Link class='homeButton' to='/'>Home</Link>
    </div>
    <div class="title2">
      <h1>Météo détaillée</h1>
    </div>
    <CitiesSavedMenu savedCities={state.savedCities} changeDisplayedCity={actions.changeDisplayedCity} selectCity={actions.selectCity}></CitiesSavedMenu>
    <FullDataCity savedCities={state.savedCities} cityId={state.displayedCity.id}></FullDataCity>
  </div>
)
export default Cities
