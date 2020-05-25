document.addEventListener('click', dropdown);

function dropdown(e) {
  if (e.target.matches('.dropdown-item')) {
    var temp = e.target.innerHTML;
    var current = e.target.parentNode.parentNode.querySelector('p').innerHTML;
    e.target.parentNode.parentNode.querySelector('p').innerHTML = temp;
    e.target.innerHTML = current;
  }
}

// Area Chart
var ctx = document.getElementById('areaChart').getContext('2d');

const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, 'rgba(208, 240, 244, 1)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'March', 'Apr', 'May'],
    datasets: [{
      data: [350, 480, 280, 350, 220, 550, 340, 290, 400],
      backgroundColor: gradient,
      borderColor: '#8FDCE5',
      borderWidth: 2,
      pointBackgroundColor: "#8FDCE5",
      pointBorderColor: 'rgba(143, 220, 229, 0.2)',
      pointBorderWidth: 5,
      pointStrokeColor: "#ff6c23",
      lineTension: 0.2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          fontColor: "#B4B4BD",
          padding: 1
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          color: "#F1F1F5"
        },
        ticks: {
          beginAtZero: true,
          stepSize: 50,
          max: 600,
          callback: function(value, index, values) {
            if (value === 0) {
              return ''
            }
            if (index % 2 === 0)
              return value;
            else
              return ''
          },
          fontFamily: "'Roboto', sans-serif",
          fontColor: "#B4B4BD",
          padding: 10
        }
      }]
    },
    legend: {
      display: false
    }
  }
});

//Horizontal bar Chart
