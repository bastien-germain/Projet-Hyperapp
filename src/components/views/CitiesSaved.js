import { h } from 'hyperapp'

const CitiesSaved = (props) => {
	return (
		<div>
    	{props.savedCities.map( savedCity =>
    	  <div class="savedCity">
    	  	<img src='...'/>
    	  	<span class="cityName">{savedCity.name}</span>
    	  	<span class="cityTemperature">{savedCity.temperature}°C</span>
    	  </div>
    	)}
    	</div>
	)
}

export default CitiesSaved
