// Affiche toutes les données concernant une ville

import { h } from 'hyperapp'
import HourlyRainChart from './HourlyRainChart'
import RainChart from './RainChart'

const FullDataCity = (props) => {
	return (
		<div>
    	{props.savedCities.filter(city => city.id == props.cityId).map(city =>
				<div class="fullPage">
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
                  <div class="update">
									  <p>Dernière mise à jour : {city.time}</p>
                  </div>
	              </div>
	            </div>
	          </div>
						<div class="details">
		          <div class="leftData">
		            <div class="humidity">
		              <img class="smallicon" src="../../img/humidity.png"/>
                  <div class="currentData">
                    <div class="currentDataTitle">
							        <p>Humidité</p>
                    </div>
                    <div class="currentDataValue"> 
                      <p>{city.humidity}%</p>
                    </div>  
                  </div>
		            </div>
		            <div class="windspeed">
		              <img class="smallicon" src="../../img/windspeed.png"/>
                  <div class="currentData">
                    <div class="currentDataTitle">
							        <p>Vitesse du vent</p>
                    </div>
                    <div class="currentDataValue">
                      <p>{city.windSpeed} km/h</p>
                    </div>
                  </div>
		            </div>
		            <div class="dawn">
		              <img class="smallicon" src="../../img/dawn.png"/>
                  <div class="currentData">
                    <div class="currentDataTitle">
							        <p>Lever</p>
                    </div>
                    <div class="currentDataValue">
                      <p>{city.sunriseTime}</p>
                    </div>  
                  </div>
		            </div>
		            <div class="dusk">
		              <img class="smallicon" src="../../img/dusk.png"/>
							    <div class="currentData">
                    <div class="currentDataTitle">
                      <p>Coucher</p>
                    </div>
                    <div class="currentDataValue">
                      <p>{city.sunsetTime}</p>
                    </div>  
                  </div>
		            </div>
		          </div>
							<div class="rain">
								<RainChart precipProbability={city.precipProbability}></RainChart>
							</div>
						</div>
					</div>
          <div class="chartContainer">
					  <HourlyRainChart hourlyData={city.hourlyPrecipProbability}></HourlyRainChart>
          </div>  
				</div>
      )}
    	</div>

	)
}

export default FullDataCity
