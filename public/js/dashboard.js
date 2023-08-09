// ===================================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
  const budgetTotal = parseFloat(
    document.getElementById("budgetTotal").textContent,
  );
  const assetTotal = parseFloat(
    document.getElementById("assetTotal").textContent,
  );
  const liabilitiesTotal = parseFloat(
    document.getElementById("liabilitiesTotal").textContent,
  );
  Highcharts.chart("high-container", {
    chart: {
      type: "pie",
      options3d: {
        enabled: true,
        alpha: 45,
      },
    },
    title: {
      text: "Total Overview",
      align: "left",
    },
    subtitle: {
      text: "3D donut in Highcharts",
      align: "left",
    },
    plotOptions: {
      pie: {
        innerSize: 75,
        depth: 65,
        dataLabels: {
          style: {
            color: "#4169E1", // Set the color for the series labels
          },
        },
      },
    },
    series: [
      {
        name: "total overview",
        data: [
          ["total income", assetTotal],
          ["total expenses", liabilitiesTotal],
          ["savings", budgetTotal],
        ],
      },
    ],
  });
});
