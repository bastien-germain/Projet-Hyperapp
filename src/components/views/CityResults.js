import { h } from 'hyperapp'

const CityResults = (props) => {
  return (
    <div>
    {props.cities.map( city =>
      <p onclick={() => props.getWeatherData(city.geometry.coordinates)}>{city.properties.city}</p>
    )}
    </div>
  )
}

export default CityResults
