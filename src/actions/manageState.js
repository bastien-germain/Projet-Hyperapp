// Toutes les fonctions modifiant le state
// Attention, on ne peut passer qu'un seul paramètre !!!

export const manageState = {
  addSearchToState: (cities) => (state) => ({
    ...state,
    searchCities: cities
  }),
  createCity: (data) => (state) => ({
    ...state,
    savedCities: [...state.savedCities, {
      id: Date.now(),
      name: data.name,
      sunriseTime: manageState.unixToHours(data.daily.data[0].sunriseTime),
      sunsetTime: manageState.unixToHours(data.daily.data[0].sunsetTime)
    }]
  }),
  unixToHours: (unixTime) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date = new Date(unixTime*1000)
    // Hours part from the timestamp
    const hours = date.getHours()
    // Minutes part from the timestamp
    const minutes = "0" + date.getMinutes()

    return hours + ':' + minutes.substr(-2)
  }
}
