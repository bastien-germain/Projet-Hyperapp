// Affichage sur la home page des villes sauvegardées dans le state

import { h } from 'hyperapp'

const CitiesSavedHome = (props) => {
	return (
		<div>
    	{props.savedCities.map( savedCity =>
    	  <div class="savedCity">
					<span>{savedCity.name}</span>
				</div>
    	)}
    	</div>
	)
}

export default CitiesSavedHome
