import { h } from 'hyperapp'

const CityResults = (props) => {
  return (
    <div>
    {props.cities.map( city =>
      <p>{city.properties.city}</p>
    )}
    </div>
  )
}

export default CityResults
