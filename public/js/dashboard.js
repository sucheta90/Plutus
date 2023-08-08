
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
  const budgetTotal = parseFloat(document.getElementById('budgetTotal').textContent);
const assetTotal = parseFloat(document.getElementById('assetTotal').textContent);
const liabilitiesTotal = parseFloat(document.getElementById('liabilitiesTotal').textContent);
Highcharts.chart('high-container', {
  chart: {
    type: 'pie',
    options3d: {
      enabled: true,
      alpha: 45,
    },
  },
  title: {
    text: 'Total Overview',
    align: 'left',
  },
  subtitle: {
    text: '3D donut in Highcharts',
    align: 'left',
  },
  plotOptions: {
    pie: {
      innerSize: 75,
      depth: 65,
      dataLabels: {
        style: {
          color: '#4169E1', // Set the color for the series labels
        },
      },
    },
  },
  series: [
    {
      name: 'total overview',
      data: [
        ['total income', assetTotal],
        ['total expenses', liabilitiesTotal],
        ['savings', budgetTotal],
      ],
    },
  ],
})});