import { h } from 'hyperapp'

const CitiesSaved = (props) => {
	return (
		<div>
    	{props.savedCities.map( savedCity =>
    	  <div class="savedCity">{savedCity.name}</div>
    	)}
    	</div>
	)
}

export default CitiesSaved
