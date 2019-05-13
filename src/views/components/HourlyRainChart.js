import { h } from 'hyperapp'
import Chart from 'chart.js';

const HourlyRainChart = (props) => {

  return (
    <div class="chart-container">
      <canvas
        oncreate={element => {
          var myChart = new Chart(element.id, {
            type: 'line',
            data: {
              labels: ['1h', '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', '11h', '12h'], // Labels of time
              datasets: [{
                label: 'Risque de pluie sur les 12 prochaines heures',
                data: props.hourlyData,
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
          });
        }}
        id='hourlyRainChart'
        >
      </canvas>
    </div>
  )
}

export default HourlyRainChart
