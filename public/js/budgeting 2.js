async function addPlannedExpense() {
  const category = document.querySelector(".category").value;
  const amount = parseFloat(document.querySelector(".amount").value.trim());

  const response = await fetch("/api/budget", {
    method: "POST",
    body: JSON.stringify({ category, amount }),
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

(async function findTotal(e) {
  let sum = 0;
  const amountClass = await document.querySelectorAll(".limit_amount");
  for (let each of amountClass) {
    console.log(parseInt(each.innerHTML));
    sum += parseInt(each.innerHTML);
  }
  console.log(sum);
  document.getElementById("total-amount").innerText = `$ ${sum}`;
})();
