// Affichage sur la home page des villes sauvegardées dans le state

import { h } from 'hyperapp'
import { Link } from "@hyperapp/router";

const CitiesSavedHome = (props) => {
	return (
		<div>
    	{props.savedCities.map( savedCity =>
    	  <div class="savedCity">
					<Link to='/cities' onclick={() => props.changeDisplayedCity(savedCity.id)}>{savedCity.name}</Link>
				</div>
    	)}
    	</div>
	)
}

export default CitiesSavedHome
