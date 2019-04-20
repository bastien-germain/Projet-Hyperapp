// Fonctions relatives à l'API de recherche des villes

export const searchAPI = {
  getCities: (value) => (state) => {
    return new Promise((resolve, reject) => {

      const settings = {
        mode: 'cors',
        method: 'GET'
      }

      const urlAdresse = 'https://api-adresse.data.gouv.fr/search/?q='
      const urlParameters = '&limit=5&type=municipality'

      fetch(urlAdresse + value + urlParameters, settings).then(function(response) {
        if(response.ok) {
          response.json().then(json => {
              console.log(json.features)
              resolve(json.features)
          })
        } else {
          console.log('Mauvaise réponse du réseau');
        }
      })
      .catch(function(error) {
        console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
      });
    })
  }
}
