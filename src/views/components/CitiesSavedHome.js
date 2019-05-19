// Affichage sur la home page des villes sauvegardées dans le state

import { h } from 'hyperapp'
import { Link } from "@hyperapp/router";

const CitiesSavedHome = (props) => {
	return (
		<div class="savedCitiesWrapper">
    	{props.savedCities.map( savedCity =>
    	  <div class="savedCity">
						<Link to='/cities' onclick={() => {props.changeDisplayedCity(savedCity.id); props.selectCity(savedCity.id)}}>{savedCity.name}</Link>
						<img class="iconHomePage" src={savedCity.iconPath}/>
						{savedCity.temperature}°C
						<button onclick={() => props.deleteCity(savedCity.id)}>Delete</button>
				</div>
    	)}
    </div>
	)
}

export default CitiesSavedHome
