// DROPDOWNS
document.addEventListener('click', dropdown);
function dropdown(e) {
  if (e.target.matches('.dropdown-item')) {
    var temp = e.target.innerHTML;
    var current = e.target.parentNode.parentNode.querySelector('p').innerHTML;
    e.target.parentNode.parentNode.querySelector('p').innerHTML = temp;
    e.target.innerHTML = current;
  }
}

// AREA CHART
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
          display: true,
          drawTicks: true,
          tickMarkLength: 7,
          drawOnChartArea: false,
        },
        ticks: {
          fontColor: "#B4B4BD",
          padding: 3
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          drawBorder: false,
          color: "#F1F1F5",

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

// HORIZONTAL BAR GRAPH
var ctxHorizontalBar = document.getElementById('horizontalBarChart').getContext('2d');
var stackedBarHorizontal = new Chart(ctxHorizontalBar, {
    type: 'horizontalBar',
    data: {
      labels: ['Mark'],
      datasets: [
        {
       barThickness: 16,
       backgroundColor: '#8FDCE5',
       minBarLength: 2,
       data: [200],
     },
      {
     barThickness: 16,
     backgroundColor: '#FFD180',
     minBarLength: 2,
     data: [350],
   },
   {
  barThickness: 16,
  backgroundColor: '#FFA8A0',
  minBarLength: 2,
  data: [[40,480]],
},
{
barThickness: 16,
backgroundColor: '#F1F1F5',
minBarLength: 2,
data: [600],
}
    ]
    },
    options: {
      responsive: true,
      cornerRadius: 30,
      maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                  display: false
                },
                ticks: {
                  display:false
                }
            }],
            yAxes: [{
              stacked: true,
              display:false,
              ticks: {
                display:false
              }
            }]
        },
        legend: {
          display: false
        }
    }
});


//VERTICAL BAR CHART
var ctxBar = document.getElementById('barChart').getContext('2d');
var stackedBar = new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Mark', 'Smith', 'Mahesh', 'Jack', 'Ganesh'],
      datasets: [
        {
        barPercentage: 0.5,
       barThickness: 16,
       // maxBarThickness: 8,
       backgroundColor: '#FFA8A0',
       minBarLength: 2,
       data: [[40,250], [40,400], [40,380], [40,200], [40,290]],
       borderColor: '#8FDCE5',
     },
        {
        barPercentage: 0.5,
     barThickness: 16,
     // maxBarThickness: 8,
     backgroundColor: '#F1F1F5',
     minBarLength: 2,
     data: [[40,520], [40,600], [40,540], [40,550], [40,500]],
       borderColor: '#8FDCE5',
     }

    ]
    },
    options: {
      responsive: true,
          cornerRadius: 30,
      maintainAspectRatio: false,
        scales: {
            xAxes: [{
                stacked: true,
                gridLines: {
                  display: false
                },
                ticks: {
                  fontColor: "#B4B4BD",
                  padding: 1
                }
            }],
            yAxes: [{
              gridLines: {
                drawBorder: false,
                color: "#F1F1F5"
              },
              ticks: {
                beginAtZero: true,
                stepSize: 50,
                max: 600,
                callback: function(value, index, values) {
                  return ' '
                },
              }
            }]
        },
        legend: {
          display: false
        }
    }
});
