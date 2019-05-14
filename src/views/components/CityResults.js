// Affichage du résultat de la recherche d'une ville

import { h } from 'hyperapp'

const CityResults = (props) => {
  return (
    <div class="cityResults">
    {props.cities.map( city =>
      <p onclick={() => {props.getWeatherData(city.geometry.coordinates)
        .then(data => props.createCity({ name: city.properties.name, ...data}))
        let targetDate = Math.round(Date.now() / 1000)
        // console.log(targetDate)
        for (let i = 0; i < 6; i++) {
          targetDate -= (63072000 * i)
          props.getPreviousForecast({coordinates: city.geometry.coordinates, time: targetDate})
            .then(data => props.addPreviousForecast(data))
        }
        }}>
        {city.properties.name} - {city.properties.postcode}
      </p>
    )}
    </div>
  )
}

export default CityResults
