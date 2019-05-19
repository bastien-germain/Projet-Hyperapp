import { h } from 'hyperapp'
import Chart from 'chart.js';

const previousForecast = (props) => {

  // var ville = props.savedCities
  // console.log(ville)
  // var coordinates = [ville[0].longitude, ville[0].latitude]
  // console.log(coordinates)
  // var info = actions.getOldWeatherData(coordinates);
  // console.log(info)

  // Fonction qui récupère les informations anciennes à partir de l'api

  const dataObject = {
    type: 'line',
    data: {
      labels: ['2009', '2011', '2013', '2015', '2017', '2019'], // Labels of time
      datasets: [{
        label: 'Evolution de la température sur les 10 dernières années',
        data: props.previousForecast, // The temperatures
        backgroundColor: 'rgba(255, 255, 255, 0.48)',
        borderColor: '#f1c40f',
        fill: false
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      },
      legend: {
        labels: {
          fontColor: '#f1c40f'
        }
      }
    }
  }




  return (
    <div class="chart-container">
      <canvas
        id='tempChart'
        oncreate={element => {
          var myChart = new Chart(element.id, dataObject);
        }}
        
        onupdate={element => {
          console.log("Updated")
        }}

        onremove={element => {
          console.log("Removed")
        }}  
        >
      </canvas>
    </div>
  )
}

export default previousForecast
