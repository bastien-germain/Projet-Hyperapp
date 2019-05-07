// Affichage du résultat de la recherche d'une ville

import { h } from 'hyperapp'

const CityResults = (props) => {
  return (
    <div>
    {props.cities.map( city =>
      <p onclick={() => props.getWeatherData(city.geometry.coordinates)
        .then(data => props.createCity({name: city.properties.name, ...data}))}>
        {city.properties.name} - {city.properties.postcode}
      </p>
    )}
    </div>
  )
}

export default CityResults
