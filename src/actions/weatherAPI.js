// Fonctions relatives à l'API de météo

export const weatherAPI = {
  getWeatherData: (coordinates) => {
    return new Promise((resolve, reject) => {

      const longitude = coordinates[0]
      const latitude = coordinates[1]

      const proxy = 'https://thingproxy.freeboard.io/fetch/'
      const url = 'https://api.darksky.net/forecast/4be7a39d36c8c138d23fd8c2bd29bd0a/'
      const urlParam = '?units=ca&lang=fr'

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
  },
  getPreviousForecast: (coordinates, index) => {
    console.log("On est dans la putain de fonction de tes grands morts")
    console.log(coordinates)
    return new Promise((resolve, reject) => {

      const longitude = coordinates[0]
      const latitude = coordinates[1]

      const proxy = 'https://thingproxy.freeboard.io/fetch/'
      const url = 'https://api.darksky.net/forecast/4be7a39d36c8c138d23fd8c2bd29bd0a/'
      const urlParam = '?units=ca&lang=fr&exclude=minutely,hourly,alerts,flags'

      const settings = {
        mode: 'cors',
        method: 'GET'
      }

      const i = index
      console.log("Index = "+i)

      let time = 1494707180 - (63072000 * i)

      fetch(proxy + url + latitude + ',' + longitude + ',' + time + urlParam, settings).then(function(response) {
        if (response.ok) {
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
  },
  
  //   for (let i = 0; i < 5; i++) { // On va envoyer 5 requêtes
  //     datas = [...datas, weatherAPI.getPreviousWheather(coordinates, /** time en UNIX */null,)]
  //   }
  //   return datas
  // }
}

// https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]