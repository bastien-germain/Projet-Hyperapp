// Affichage du résultat de la recherche d'une ville

import { h } from 'hyperapp'

const CityResults = (props) => {
  return (
    <div class="cityResults">
    {props.cities.map( city =>
      <p onclick={() => {props.getWeatherData(city.geometry.coordinates)
        .then(data => props.createCity({ name: city.properties.name, ...data}))
        // let targetDate = Math.round(Date.now() / 1000)
        // console.log(targetDate)
        //for (let index = 0; index < 5; index++) {
          // targetDate -= (63072000 * index)
          // console.log(targetDate)
          props.getPreviousForecast(city.geometry.coordinates, 1)
            .then(data => props.addPreviousForecast(data))
       // }
        }}>
        {city.properties.name} - {city.properties.postcode}
      </p>
    )}
    </div>
  )
}

export default CityResults
