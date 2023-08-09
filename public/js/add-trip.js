// This function will add additional trip expenses
async function addTripExpense(event) {
  // event.preventDefault();
  const description = document.querySelector("#description").value;
  const category = document.querySelector("#category").value;
  const quantity = document.querySelector("#quantity").value;
  const unit_cost = document.querySelector("#unit-cost").value;
  // const amount = document.querySelector('#amount').value;
  const amount = calculateAmount(quantity, unit_cost);
  console.log(amount);
  // Send fetch request to add a new trip
  const response = await fetch(`/api/trip`, {
    method: "POST",
    body: JSON.stringify({
      description,
      category,
      quantity,
      unit_cost,
      amount,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the trip is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.reload("/trip");
  } else {
    alert("Failed to add trip");
  }
}

document
  .querySelector("#submit-trip")
  .addEventListener("click", addTripExpense);
// ===============================================================================================
const tripChart = async () => {
  const response = await fetch("/api/trip");
  const trips = await response.json();
  console.log(parseInt(trips[0].unit_cost));

  const customColors = [
    "#FF5733",
    "#3399FF",
    "#33FF77",
    "#FFCC33",
    "#FF33E9",
    "#AABBCC",
  ];

  Highcharts.setOptions({
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7,
        },
        stops: [
          [0, color],
          [1, Highcharts.color(color).brighten(-0.3).get("rgb")], // darken
        ],
      };
    }),
  });

  // Create the chart
  Highcharts.chart("container", {
    chart: {
      plotBackgroundColor: null,
      plotBackgroundColor: null,
      plotShadow: true,
      colorCount: [10],
      type: "pie",
    },
    title: {
      text: "trip",
      align: "left",
    },
    subtitle: {
      text: "Click the slices to view versions.",
      align: "left",
    },

    accessibility: {
      announceNewData: {
        enabled: true,
      },
      point: {
        valueSuffix: "%",
      },
    },

    plotOptions: {
      series: {
        colorAxis: customColors,
        borderRadius: 5,
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.y:.1f}%",
          style: {
            color: "#FF5733", // Change to your desired color
          },
        },
        // colors: customColors,
      },
    },
    series: [
      {
        name: "expenses",
        colorByPoint: true,
        data: trips.map((trip, i) => {
          return {
            name: trips[i].description,
            y: parseInt(trips[i].amount),
            drilldown: trips[i].description,
          };
        }),
      },
    ],
    drilldown: {
      series: trips.map((trip, i) => {
        return {
          name: trips[i].id,
          y: parseInt(trips[i].amount),
          drilldown: trips[i].description,
        };
      }),
    },
  });
  // ======================================================================================

  // //
  // // Compile the Handlebars template
  // const template = Handlebars.compile(document.querySelector('#chart-template').innerHTML);
  // const compiledHtml = template();

  // // Insert the compiled HTML into your document
  // document.querySelector('#container').innerHTML = compiledHtml;

  // // Create the Highcharts pie chart using the extracted data
  // const chart = new Highcharts.Chart({
  //   chart: {
  //     renderTo: 'highcharts-container', // Use the container ID
  //     type: 'pie' // Pie chart type
  //   },
  //   title: {
  //     text: 'Expense Distribution by Description'
  //   },
  //   series: [
  //     {
  //       name: 'Expenses',
  //       data: expenses.map(expenses => ({ name: description, y: parseFloat(amount) })) // Use descriptions as names and amounts as data points
  //     }
  //   ]
  // });
};
tripChart();

function calculateAmount(q, u) {
  // q = document.querySelector('#quantity').value;
  // u = document.querySelector('#unit-cost').value;
  let a = parseFloat(q) * parseFloat(u);
  console.log(a);
  return a;
}

document
  .querySelector("#submit-trip")
  .addEventListener("click", addTripExpense);
