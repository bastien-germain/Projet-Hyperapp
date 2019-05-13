// Affiche toutes les données concernant une ville

import { h } from 'hyperapp'
import Graph from './Graph'
import RainChart from './RainChart'

const FullDataCity = (props) => {
	return (
		<div>
    	{props.savedCities.filter(city => city.id == props.cityId).map(city =>
    	  <div class="fullDataCity">
          <div class="header">
            <div class="picture">
              <img class="icon" src={city.iconPath}/>
            </div>
            <div class="info">
              <div class="city">
                <div class="name">
                  {city.name}
                </div>
                <div class="temperature">
                  {city.temperature}°C
                </div>
              </div>
              <div class="resume">
                <p>{city.summary}</p>
								<p>Dernière mise à jour : {city.time}</p>
              </div>
            </div>
          </div>
					<div class="details">
	          <div>
	            <div class="humidity">
	              <img class="smallicon" src="../../img/humidity.png"/>
						    <p>Humidité : {city.humidity}%</p>
	            </div>
	            <div class="windspeed">
	              <img class="smallicon" src="../../img/windspeed.png"/>
						    <p>Vitesse du vent : {city.windSpeed} km/h</p>
	            </div>
	            <div class="dawn">
	              <img class="smallicon" src="../../img/dawn.png"/>
						    <p>Lever : {city.sunriseTime}</p>
	            </div>
	            <div class="dusk">
	              <img class="smallicon" src="../../img/dusk.png"/>
						    <p>Coucher : {city.sunsetTime}</p>
	            </div>
	          </div>
						<div class="rain">
							<RainChart precipProbability={city.precipProbability}></RainChart>
						</div>
					</div>
				</div>
      )}
			<Graph></Graph>
    	</div>

	)
}

export default FullDataCity
