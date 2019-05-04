// Affiche toutes les données concernant une ville

import { h } from 'hyperapp'
import Graph from './Graph';

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
					<p>Lever : {city.sunriseTime}</p>
					<p>Coucher : {city.sunsetTime}</p>
				</div>
      )}
      <Graph/>
    	</div>

	)
}

export default FullDataCity
