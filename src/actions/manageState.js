// Toutes les fonctions modifiant le state

export const manageState = {
  addSearchToState: (cities) => (state) => ({
    ...state,
    searchCities: cities
  }),
  createCity: (name, data) => (state) => ({
    ...state,
    savedCities: [...state.savedCities, {id: Date.now(), name: name}]
  })
}
