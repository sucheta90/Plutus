async function addPlannedExpense() {
  const category = document.querySelector(".category").value;
  const amount = parseFloat(document.querySelector(".amount").value.trim());
  const date = new Date(document.getElementById("monthYear").value);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
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
}

document
  .getElementById("save-btn")
  .addEventListener("click", addPlannedExpense);

// eslint-disable-next-line no-unused-vars
(async function findTotal(e) {
  let sum = 0;
  const amountClass = await document.querySelectorAll(".budget_amount");
  for (let each of amountClass) {
    console.log(parseInt(each.innerHTML));
    sum += parseInt(each.innerHTML);
  }
  // console.log(sum);
  document.getElementById("total-amount").innerText = `$ ${sum}`;
})();
