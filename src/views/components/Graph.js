import { h } from 'hyperapp'
import Chart from 'chart.js';

const Graph = (props) => {

  // var ville = props.savedCities
  // console.log(ville)
  // var coordinates = [ville[0].longitude, ville[0].latitude]
  // console.log(coordinates)
  // var info = actions.getOldWeatherData(coordinates);
  // console.log(info)

  // Fonction qui récupère les informations anciennes à partir de l'api

  return (
    <div>
      <canvas
        oncreate={element => {
          var myChart = new Chart(element.id, {
            type: 'line',
            data: {
              labels: ['1990', '1995', '2000', '2005', '2010', '2015'], // Labels of time 
              datasets: [{
                label: 'Evolution de la température sur les 10 dernières années',
                data: [12, 19, 3, 5, 2, 3], // The temperatures
                backgroundColor: [
                  'rgba(0, 0, 0, 0)'
                ],
                borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }}
        id='myChart'
        width='400'
        height="400">
      </canvas>
    </div>
  )
}

export default Graph