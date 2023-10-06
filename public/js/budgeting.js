/* eslint-disable no-unused-vars */
async function addPlannedExpense() {
  const category = document.querySelector(".category").value;
  const amount = parseFloat(document.querySelector(".amount").value.trim());
  const date = new Date(document.getElementById("monthYear").value);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (category && amount && month && year) {
    const response = await fetch("/api/budget", {
      method: "POST",
      body: JSON.stringify({ category, amount, month, year }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      location.reload("/budget");
    } else {
      alert("Something went wrong!");
    }
  } else {
    alert("Please enter all values, then proceed to save");
  }
}

document
  .getElementById("save-btn")
  .addEventListener("click", addPlannedExpense);

(async function findTotal(e) {
  let sum = 0;
  const amountClass = await document.querySelectorAll(".budget_amount");
  for (let each of amountClass) {
    // console.log(parseInt(each.innerHTML));
    sum += parseInt(each.innerHTML);
  }
  // console.log(sum);
  document.getElementById("total-amount").innerText = `$ ${sum}`;
})();

// const budgetRecordsNode = document.querySelectorAll(".record-row");
// const budgetRecords = Array.from(budgetRecordsNode);
// for (let i = 0; i < budgetRecords.length; i++) {
//   budgetRecords[i].addEventListener("click", (e) => {
//     console.log("clicked");
//     if (e.target.classList.contains("delete-budget")) {
//       budgetRecords.splice(i, 1);
//     }
//   });
// }
