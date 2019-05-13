import { h } from 'hyperapp'
import Chart from 'chart.js';

const RainChart = (props) => {

  return (
    <div>
      <canvas id="rainChart" oncreate={element => {
        var myChart = new Chart(element.id, {
          type: 'doughnut',
          data: {
            datasets: [
              {
                backgroundColor: ["#3e95cd", "rgba(255, 255, 255, 0.5)"],

                data: [props.precipProbability, 100 - props.precipProbability]
              }
            ]
          },
          options: {
            cutoutPercentage : 80,
            elements: {
              arc: {
                borderWidth: 0,
              }
            },
            tooltips: {
              enabled: false
            },
          }
        });
      }}>
      </canvas>
    </div>
  )
}

export default RainChart
