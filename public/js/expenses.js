async function addExpense(e) {
  const category = document.querySelector(".category").value;
  const amount = parseFloat(document.getElementById("amount").value.trim());

  const response = await fetch("/api/transaction/liabilities", {
    method: "POST",
    body: JSON.stringify({ category, amount }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    location.reload("/transaction/liabilities");
  } else {
    alert(`Something went wrong!`);
  }
}

document.querySelector("#add-expense").addEventListener("click", addExpense);
