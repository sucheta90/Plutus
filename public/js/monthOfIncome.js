const monthsOfYear = [
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
];

async function monthOfIncome() {
  const month = document.getElementById("month-of-income");
  const monthIndex = new Date().getMonth();
  month.innerText = monthsOfYear[monthIndex].toString();
}

monthOfIncome();

// This function will add additional income fields
async function addIncome(e) {
  const incomeList = document.querySelector(".income-list"); // the ul

  const list = document.createElement("li");
  list.setAttribute("class", "is-flex is-justify-content-space-evenly mb-3 ");

  // input category
  const category = document.createElement("input");
  category.setAttribute("placeholder", "income category");
  category.setAttribute("type", "text");
  category.setAttribute("class", "category input is-small is-three-quarters");
  list.appendChild(category);

  // Input field for amount
  const amount = document.createElement("input");
  amount.setAttribute("placeholder", "amount");
  amount.setAttribute("type", "number");
  amount.setAttribute("class", "income input is-small ml-3 is-three-quarters");
  list.appendChild(amount);

  // Add button to save to database
  const addBtn = document.createElement("button");
  addBtn.innerHTML = `Add`;
  addBtn.setAttribute("class", "add-item  button is-primary is-small ml-3");
  addBtn.addEventListener("click", addToDataBase);
  list.appendChild(addBtn);

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = `Remove Item`;
  removeBtn.setAttribute("class", "remove-list-item  button is-small ml-3");
  removeBtn.addEventListener("click", handleDeleteIncome);
  list.appendChild(removeBtn);

  incomeList.appendChild(list);
}

// Function to remove a list item
function handleDeleteIncome(e) {
  const incomeList = document.querySelector(".income-list"); // the ul
  let item = e.target.parentElement;
  incomeList.removeChild(item);
}

document.getElementById("add").addEventListener("click", addIncome);

// Saves each amount to database
async function addToDataBase(e) {
  let listItem = this.parentElement;
  let name = listItem.firstChild.value.trim();
  let amount = parseInt(listItem.firstChild.nextSibling.value.trim());

  const response = await fetch("/api/transaction/asset", {
    method: "POST",
    body: JSON.stringify({ name, amount }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    location.reload("/transaction");
  } else {
    alert(response.statusText);
  }
}

(async function findTotal(e) {
  let sum = 0;
  const amountClass = await document.querySelectorAll(".actual_income");
  for (let each of amountClass) {
    console.log(parseInt(each.innerHTML));
    sum += parseInt(each.innerHTML);
  }
  console.log(sum);
  document.getElementById("total-amount").innerText = `$ ${sum}`;
})();
export async function findTotal() {
  let sum = 0;
  const amountClass = await document.querySelectorAll(".actual_income");
  for (let each of amountClass) {
    sum += parseInt(each.innerHTML);
  }
  return sum;
};