// Fonctions relatives à l'API de météo

export const weatherAPI = {
  getWeatherData: (coordinates) => {
    return new Promise((resolve, reject) => {

      const longitude = coordinates[0]
      const latitude = coordinates[1]

      const proxy = 'https://thingproxy.freeboard.io/fetch/'
      const url = 'https://api.darksky.net/forecast/4be7a39d36c8c138d23fd8c2bd29bd0a/'
      const urlParam = '?units=ca'

      const settings = {
        mode: 'cors',
        method: 'GET'
      }

      fetch(proxy + url + latitude + ',' + longitude + urlParam, settings).then(function(response) {
        if(response.ok) {
          response.json().then(json => {
              console.log(json)
              resolve(json)
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
