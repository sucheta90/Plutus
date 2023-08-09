


    document.addEventListener('DOMContentLoaded', function () {
        const chart = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'emergency funds'
            },
            xAxis: {
                categories: ['1 Month', '3 Months', '6 Months', '1 year']
            },
            yAxis: {
                title: {
                    text: 'Dollar amount'
                }
            },
            series: [{
                name: 'income',
                data: [10000, 90000, 40000, 30000]
            },
             {
                name: 'expenses',
                data: [10000, 90000, 40000, 56992]
            }]
        });
    });
 
