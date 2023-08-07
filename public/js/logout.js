const logout = async () => {
    const response = await fetch("/api/user/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/login");
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector("#logout").addEventListener("click", logout);
  

  // chart info=========================================================================================================================================================================

  document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
      title: {
          text: 'budegting breakdown',
          align: 'center'
      },
      xAxis: {
          categories: ["January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",]
      },
      yAxis: {
          title: {
              text: 'Dollars'
          }
      },
      tooltip: {
          valueSuffix: 'Dollars'
      },
      plotOptions: {
          series: {
              borderRadius: '25%'
          }
      },
      series: [{
          type: 'column',
          name: '2020',
          data: [59, 83, 65, 228, 184,59, 83, 65, 228, 184,748,378]
      }, {
          type: 'column',
          name: '2021',
          data: [59, 83, 65, 228, 184,59, 83, 65, 228, 184,748,378]
      }, {
          type: 'column',
          name: '2022',
          data: [59, 83, 65, 228, 184,59, 83, 65, 228, 184,748,378]
      }, {
          type: 'spline',
          name: 'Average',
          data: [59, 83, 65, 228, 184,59, 83, 65, 228, 184,748,378],
          marker: {
              lineWidth: 2,
              lineColor: Highcharts.getOptions().colors[3],
              fillColor: 'white'
          }
      }, {
          type: 'pie',
          name: 'Total',
          data: [{
              name: 'jan',
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
              name: 'feb',
              y: 647,
              color: Highcharts.getOptions().colors[1] // 2022 color
          },
          {
            name: 'aprl',
            y: 647,
            color: Highcharts.getOptions().colors[3] // 2022 color
        },
        {
          name: 'may',
          y: 647,
          color: Highcharts.getOptions().colors[4] // 2022 color
      },{
        name: 'jun',
        y: 647,
        color: Highcharts.getOptions().colors[5] // 2022 color
    },{
      name: 'jul',
      y: 647,
      color: Highcharts.getOptions().colors[6] // 2022 color
  },{
    name: 'aug',
    y: 647,
    color: Highcharts.getOptions().colors[7] // 2022 color
},{
  name: 'sept',
  y: 647,
  color: Highcharts.getOptions().colors[8] // 2022 color
},{
  name: 'oct',
  y: 647,
  color: Highcharts.getOptions().colors[9] // 2022 color
},{
  name: 'nov',
  y: 647,
  color: Highcharts.getOptions().colors[10] // 2022 color
},{
  name: 'dec',
  y: 647,
  color: Highcharts.getOptions().colors[11] // 2022 color
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