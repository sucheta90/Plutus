// This function will add additional trip expenses
async function addTripExpense(event) {
  // event.preventDefault();
  const description = document.querySelector('#description').value;
  const category = document.querySelector('#category').value;
  const quantity = document.querySelector('#quantity').value;
  const unit_cost = document.querySelector('#unit-cost').value;
  const amount = document.querySelector('#amount').value;
  // Send fetch request to add a new trip
  const response = await fetch(`/api/trip`, {
    method: 'POST',
    body: JSON.stringify({
      description,
      category,
      quantity,
      unit_cost,
      amount
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the trip is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.reload('/trip');
  } else {
    alert('Failed to add trip');
  }
}

document.querySelector('#submit-trip').addEventListener('click', addTripExpense);
// ===============================================================================================
const tripChart = async ()=> {
  const response = await fetch('/api/trip')
  const trips = await response.json()
  console.log(trips[0].unit_cost);
  const expenses = [
    { description, amount},
    { description, amount},
    // Add more data objects here as needed
  ];
  
  
  // Create the chart
  Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'trip',
        align: 'left'
    },
    subtitle: {
        text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
        align: 'left'
    },
  
    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },
  
    plotOptions: {
        series: {
            borderRadius: 5,
            dataLabels: {
                enabled: true,
                format: '{point.name}: {point.y:.1f}%'
            }
        }
    },
  
    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },
  
    series: [
        {
            name: 'expenses',
            colorByPoint: true,
            data: [
                {
                    name: trips[0].description,
                    y: 34.87,
                    drilldown: trips[0].description
                },
                {
                    name: 'Safari',
                    y: 9.47,
                    drilldown: 'Safari'
                },
                {
                    name: 'Edge',
                    y: 9.32,
                    drilldown: 'Edge'
                },
                {
                    name: 'Firefox',
                    y: 8.15,
                    drilldown: 'Firefox'
                },
                {
                    name: 'Other',
                    y: 11.02,
                    drilldown: null
                }
            ]
        }
    ],
    drilldown: {
      series: [
      {
        name: 'drilldown',
        data: expenses.map(expenses => ({ name: description, y: parseFloat(amount) })) // Use descriptions as names and amounts as data points
      }
    ]
    }
  });
  // ======================================================================================
  
  
  // Compile the Handlebars template
  const template = Handlebars.compile(document.querySelector('#chart-template').innerHTML);
  const compiledHtml = template();
  
  // Insert the compiled HTML into your document
  document.querySelector('#container').innerHTML = compiledHtml;
  
  
  // Create the Highcharts pie chart using the extracted data
  const chart = new Highcharts.Chart({
    chart: {
      renderTo: 'highcharts-container', // Use the container ID
      type: 'pie' // Pie chart type
    },
    title: {
      text: 'Expense Distribution by Description'
    },
    series: [
      {
        name: 'Expenses',
        data: expenses.map(expenses => ({ name: description, y: parseFloat(amount) })) // Use descriptions as names and amounts as data points
      }
    ]
  });
}
tripChart()



