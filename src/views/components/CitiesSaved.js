// Affichage des villes sauvegardées dans le state

import { h } from 'hyperapp'

const CitiesSaved = (props) => {
	return (
		<div>
    	{props.savedCities.map( savedCity =>
    	  <div class="savedCity">
					<span>{savedCity.name}</span>
					<span> Levé : {savedCity.sunriseTime}</span>
					<span> Couché : {savedCity.sunsetTime}</span>
				</div>
    	)}
    	</div>
	)
}

export default CitiesSaved
