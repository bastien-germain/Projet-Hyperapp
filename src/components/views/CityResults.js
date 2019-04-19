import { h } from 'hyperapp'

const CityResults = (props) => {
  return (
    <div>
    {props.cities.map( city =>
      <p className='cityResult' onclick={() => props.getWeatherData(city.geometry.coordinates).then(data => props.createCity(city.properties.name, data))}>{city.properties.city}</p>
    )}
    </div>
  )
}

export default CityResults
