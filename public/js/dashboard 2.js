// Sample data
const incomes1 = [10003, 15004, 12004];
const incomes2 = [10003, 15004, 12004];
const incomes3 = [1003, 15004, 16704];
const incomes4 = [10003, 12304, 12004];
const incomes5 = [10003, 23204, 12004];
const incomes6 = [10003, 19004, 12004];
const incomes7 = [10003, 34004, 12004];
const incomes8 = [10003, 12004, 12004];
const incomes9 = [10003, 19804, 12004];
const incomes10 = [10003, 52004, 12004];
const incomes11 = [10003, 35004, 12004];
const incomes12 = [10003, 34004, 12004];

const expense1 = [3004, 2004, 5004];
const expense2 = [3004, 2004, 5004];
const expense3 = [3504, 2004, 5004];
const expense4 = [3004, 2004, 5004];
const expense5 = [3004, 2004, 5004];
const expense6 = [30604, 2004, 5004];
const expense7 = [30604, 2004, 5004];
const expense8 = [3404, 2004, 5004];
const expense9 = [3004, 2004, 5044];
const expense10 = [3004, 2004, 51004];
const expense11 = [32004, 2004, 5004];
const expense12 = [3004, 23004, 5004];

// Calculate total income
const totalIncome1 = incomes1.reduce((total, income) => total + income, 0);
const totalIncome2 = incomes2.reduce((total, income) => total + income, 0);
const totalIncome3 = incomes3.reduce((total, income) => total + income, 0);
const totalIncome4 = incomes4.reduce((total, income) => total + income, 0);
const totalIncome5 = incomes5.reduce((total, income) => total + income, 0);
const totalIncome6 = incomes6.reduce((total, income) => total + income, 0);
const totalIncome7 = incomes7.reduce((total, income) => total + income, 0);
const totalIncome8 = incomes8.reduce((total, income) => total + income, 0);
const totalIncome9 = incomes9.reduce((total, income) => total + income, 0);
const totalIncome10 = incomes10.reduce((total, income) => total + income, 0);
const totalIncome11 = incomes11.reduce((total, income) => total + income, 0);
const totalIncome12 = incomes12.reduce((total, income) => total + income, 0);

// Calculate total expenses
const totalExpenses1 = expense1.reduce((total, expense) => total + expense, 0);
const totalExpenses2 = expense2.reduce((total, expense) => total + expense, 0);
const totalExpenses3 = expense3.reduce((total, expense) => total + expense, 0);
const totalExpenses4 = expense4.reduce((total, expense) => total + expense, 0);
const totalExpenses5 = expense5.reduce((total, expense) => total + expense, 0);
const totalExpenses6 = expense6.reduce((total, expense) => total + expense, 0);
const totalExpenses7 = expense7.reduce((total, expense) => total + expense, 0);
const totalExpenses8 = expense8.reduce((total, expense) => total + expense, 0);
const totalExpenses9 = expense9.reduce((total, expense) => total + expense, 0);
const totalExpenses10 = expense10.reduce(
  (total, expense) => total + expense,
  0
);
const totalExpenses11 = expense11.reduce(
  (total, expense) => total + expense,
  0
);
const totalExpenses12 = expense12.reduce(
  (total, expense) => total + expense,
  0
);

// Calculate average income
const averageIncome1 = totalIncome1 / incomes1.length;
const averageIncome2 = totalIncome2 / incomes2.length;
const averageIncome3 = totalIncome3 / incomes3.length;
const averageIncome4 = totalIncome4 / incomes4.length;
const averageIncome5 = totalIncome5 / incomes5.length;
const averageIncome6 = totalIncome6 / incomes6.length;
const averageIncome7 = totalIncome7 / incomes7.length;
const averageIncome8 = totalIncome8 / incomes8.length;
const averageIncome9 = totalIncome9 / incomes9.length;
const averageIncome10 = totalIncome10 / incomes10.length;
const averageIncome11 = totalIncome11 / incomes11.length;
const averageIncome12 = totalIncome12 / incomes12.length;

// Calculate average expenses
const averageExpenses1 = totalExpenses1 / expense1.length;
const averageExpenses2 = totalExpenses2 / expense2.length;
const averageExpenses3 = totalExpenses3 / expense3.length;
const averageExpenses4 = totalExpenses4 / expense4.length;
const averageExpenses5 = totalExpenses5 / expense5.length;
const averageExpenses6 = totalExpenses6 / expense6.length;
const averageExpenses7 = totalExpenses7 / expense7.length;
const averageExpenses8 = totalExpenses8 / expense8.length;
const averageExpenses9 = totalExpenses9 / expense9.length;
const averageExpenses10 = totalExpenses10 / expense10.length;
const averageExpenses11 = totalExpenses11 / expense11.length;
const averageExpenses12 = totalExpenses12 / expense12.length;

// Calculate budget (income - expenses)
const budget1 = totalIncome1 - totalExpenses1;
const budget2 = totalIncome2 - totalExpenses2;
const budget3 = totalIncome3 - totalExpenses3;
const budget4 = totalIncome4 - totalExpenses4;
const budget5 = totalIncome5 - totalExpenses5;
const budget6 = totalIncome6 - totalExpenses6;
const budget7 = totalIncome7 - totalExpenses7;
const budget8 = totalIncome8 - totalExpenses8;
const budget9 = totalIncome9 - totalExpenses9;
const budget10 = totalIncome10 - totalExpenses10;
const budget11 = totalIncome11 - totalExpenses11;
const budget12 = totalIncome12 - totalExpenses12;

// Determine if budget is positive, negative, or zero
let budgetStatus;
if (budget1 > 0) {
  budgetStatus = "Positive";
} else if (budget1 < 0) {
  budgetStatus = "Negative";
} else {
  budgetStatus = "Zero";
}

// ===================================================================================================================================

document.addEventListener("DOMContentLoaded", function () {
  const chart = Highcharts.chart("high-container", {
    title: {
      text: "Income/Savings breakdown",
      align: "center",
    },
    xAxis: {
      categories: [
        "January",
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
        "December",
      ],
    },
    yAxis: {
      title: {
        text: "Dollars",
      },
    },
    tooltip: {
      valueSuffix: "Dollars",
    },
    plotOptions: {
      series: {
        borderRadius: "25%",
      },
    },
    series: [
      {
        type: "column",
        name: "income",
        data: [
          totalIncome1,
          totalIncome2,
          totalIncome3,
          totalIncome4,
          totalIncome5,
          totalIncome6,
          totalIncome7,
          totalIncome8,
          totalIncome9,
          totalIncome10,
          totalIncome11,
          totalIncome12,
        ],
      },
      {
        type: "column",
        name: "expenses",
        data: [
          totalExpenses1,
          totalExpenses2,
          totalExpenses3,
          totalExpenses4,
          totalExpenses5,
          totalExpenses6,
          totalExpenses7,
          totalExpenses8,
          totalExpenses9,
          totalExpenses10,
          totalExpenses11,
          totalExpenses12,
        ],
      },
      {
        type: "column",
        name: "saving",
        data: [
          budget1,
          budget2,
          budget3,
          budget4,
          budget5,
          budget6,
          budget7,
          budget8,
          budget9,
          budget10,
          budget11,
          budget12,
        ],
      },
      {
        type: "spline",
        name: "Average",
        data: [
          averageIncome1,
          averageExpenses2,
          averageExpenses3,
          averageExpenses4,
          averageExpenses5,
          averageExpenses6,
          averageExpenses7,
          averageExpenses8,
          averageExpenses9,
          averageExpenses10,
          averageExpenses11,
          averageExpenses12,
        ],
        marker: {
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[3],
          fillColor: "white",
        },
      },
      {
        type: "pie",
        name: "Total",
        data: [
          {
            name: "jan",
            y: totalIncome1,
            color: Highcharts.getOptions().colors[0], // 2020 color
            dataLabels: {
              enabled: false,
              distance: -50,
              format: "{point.total} M",
              style: {
                fontSize: "15px",
              },
            },
          },
          {
            name: "feb",
            y: totalIncome2,
            color: Highcharts.getOptions().colors[1], // 2022 color
          },
          {
            name: "mar",
            y: totalIncome3,
            color: Highcharts.getOptions().colors[1], // 2022 color
          },
          {
            name: "aprl",
            y: totalIncome4,
            color: Highcharts.getOptions().colors[3], // 2022 color
          },
          {
            name: "may",
            y: totalIncome5,
            color: Highcharts.getOptions().colors[4], // 2022 color
          },
          {
            name: "jun",
            y: totalIncome6,
            color: Highcharts.getOptions().colors[5], // 2022 color
          },
          {
            name: "jul",
            y: totalIncome7,
            color: Highcharts.getOptions().colors[6], // 2022 color
          },
          {
            name: "aug",
            y: totalIncome8,
            color: Highcharts.getOptions().colors[7], // 2022 color
          },
          {
            name: "sept",
            y: totalIncome9,
            color: Highcharts.getOptions().colors[8], // 2022 color
          },
          {
            name: "oct",
            y: totalIncome10,
            color: Highcharts.getOptions().colors[9], // 2022 color
          },
          {
            name: "nov",
            y: totalIncome11,
            color: Highcharts.getOptions().colors[2], // 2022 color
          },
          {
            name: "dec",
            y: totalIncome12,
            color: Highcharts.getOptions().colors[4], // 2022 color
          },
        ],
        center: [75, 65],
        size: 100,
        innerSize: "70%",
        showInLegend: false,
        dataLabels: {
          enabled: false,
        },
      },
    ],
  });
});

// async function calculateTotalAmount() {
//   try {
//     const result = await Asset.findOne({
//       attributes: [
//         [sequelize.fn("SUM", sequelize.col("amount")), "totalAmount"],
//       ],
//     });

//     return result.getDataValue("totalAmount");
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// calculateTotalAmount()
//   .then((totalAmount) => {
//     console.log("Total Amount:", totalAmount);
//     document.getElementById("totalAsset").innerText(totalAmount);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   })();
