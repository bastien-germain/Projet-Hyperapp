import { h } from 'hyperapp'
import Chart from 'chart.js';

const previousForecast = (props) => {

  const dataObject = {
    type: 'bar',
    data: {
      labels: ['2009', '2011', '2013', '2015', '2017', '2019'], // Labels of time
      datasets: [{
        label: 'Evolution de la température sur les 10 dernières années',
        data: props.previousForecast, // The temperatures
        backgroundColor: 'rgba(3, 39, 58, 1)',
        borderColor: '#03273a',
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
        display: false,
        labels: {
          fontColor: '#03273a'
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
          console.log("updated")
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
