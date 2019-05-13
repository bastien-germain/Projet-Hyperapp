// Liste des villes sauvegardées (menu) pour la météo détaillée

import { h } from 'hyperapp'

const CitiesSavedMenu = (props) => {
	return (
		<div class='menu'>
    	{props.savedCities.map( savedCity =>
    	  <div class={['menuCity', savedCity.selected && "selectedCity"].join(" ")} onclick={() => {props.changeDisplayedCity(savedCity.id);  props.selectCity(savedCity.id)}}>
	    	  <img class='iconSavedCities' src={savedCity.iconPath}/>
	    	  {savedCity.name}
	    	  <p>{savedCity.temperature}°C</p>
    	  </div>
    	)}
    </div>
	)
}

export default CitiesSavedMenu
