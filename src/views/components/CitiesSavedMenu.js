// Liste des villes sauvegardées (menu) pour la météo détaillée

import { h } from 'hyperapp'

const CitiesSavedMenu = (props) => {
	return (
		<div class="menu">
    	{props.savedCities.map( savedCity =>
    	  <div class="menuCity" onclick={() => props.changeDisplayedCity(savedCity.id)}>
    	  <img class="iconSavedCities" src="../../img/clear-day.png"/>
    	  {savedCity.name}
    	  <p>{savedCity.temperature}°C</p>
    	  </div>
    	)}
    	</div>
	)
}

export default CitiesSavedMenu
