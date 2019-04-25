// Affiche toutes les données concernant une ville

import { h } from 'hyperapp'

const FullDataCity = (props) => {
	return (
		<div>
    	{props.savedCities.filter(city => city.id == props.cityId).map(city =>
    	  <div class="fullDataCity">
					<p>{city.name}</p>
					<p>Résumé : {city.summary}</p>
					<p>Température : {city.temperature}°C</p>
					<p>Humidité : {city.humidity}%</p>
					<p>Vitesse du vent : {city.windSpeed} km/h</p>
					<p>Levé : {city.sunriseTime}</p>
					<p>Couché : {city.sunsetTime}</p>
				</div>
    	)}
    	</div>
	)
}

export default FullDataCity
