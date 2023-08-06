// Highcharts.chart('container', {
//     chart: {
//         animation: true // Enable overall animation for the chart
//     },
//     // Other chart options...
// });

// 12. Heatmap: A heatmap displays data using color gradients to represent different values within a matrix.

// Please provide more context or clarify the term "hgih charts" if you meant something specific that is not covered above.
var Highcharts = require('highcharts');  
// Load module after Highcharts is loaded
require('highcharts/modules/exporting')(Highcharts);  
// Create the chart
Highcharts.chart('container', { /*Highcharts options*/ });
document.addEventListener('DOMContentLoaded', function () {
	Highcharts.chart(chart-container, {
    title: {
        text: 'Sales of petroleum products March, Norway',
        align: 'left'
    },
    xAxis: {
        categories: ['Jet fuel', 'Duty-free diesel', 'Petrol', 'Diesel', 'Gas oil']
    },
    yAxis: {
        title: {
            text: 'Million liters'
        }
    },
    tooltip: {
        valueSuffix: ' million liters'
    },
    plotOptions: {
        series: {
            borderRadius: '25%'
        }
    },
    series: [{
        type: 'column',
        name: '2020',
        data: [59, 83, 65, 228, 184]
    }, {
        type: 'column',
        name: '2021',
        data: [24, 79, 72, 240, 167]
    }, {
        type: 'column',
        name: '2022',
        data: [58, 88, 75, 250, 176]
    }, {
        type: 'spline',
        name: 'Average',
        data: [47, 83.33, 70.66, 239.33, 175.66],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    }, {
        type: 'pie',
        name: 'Total',
        data: [{
            name: '2020',
            y: 619,
            color: Highcharts.getOptions().colors[0], // 2020 color
            dataLabels: {
                enabled: true,
                distance: -50,
                format: '{point.total} M',
                style: {
                    fontSize: '15px'
                }
            }
        }, {
            name: '2021',
            y: 586,
            color: Highcharts.getOptions().colors[1] // 2021 color
        }, {
            name: '2022',
            y: 647,
            color: Highcharts.getOptions().colors[2] // 2022 color
        }],
        center: [75, 65],
        size: 100,
        innerSize: '70%',
        showInLegend: false,
        dataLabels: {
            enabled: false
        }
    }]
})});

particlesJS('tsparticles-container', {
    particles: {
      shape: {
        type: 'image',
        image: {
          src: 'path/to/money-icon.png', // Replace with the path to your money icon image
          width: 100, // Set the width of the custom particle
          height: 100, // Set the height of the custom particle
        },
      },
    },
  });
  document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('chart-container', {
        chart: {
            type: 'line' // You can choose the chart type you want (line, bar, pie, etc.)
        },
        title: {
            text: 'My Highcharts Example'
        },
        series: [{
            data: [1, 3, 2, 4, 6, 5] // Example data for the chart
        }]
    });
});
let chart; // globally available
document.addEventListener('DOMContentLoaded', function() {
    chart = Highcharts.stockChart('container', {
        rangeSelector: {
            selected: 1
        },
        series: [{
            name: 'USD to EUR',
            data: usdtoeur // predefined JavaScript array
       }]
   });
});