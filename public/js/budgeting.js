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
    alert(`Something went wrong!`);
  }
}

document
  .getElementById("save-btn")
  .addEventListener("click", addPlannedExpense);
