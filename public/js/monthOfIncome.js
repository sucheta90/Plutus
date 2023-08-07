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
// const month = document.getElementById("month-of-income");
//  = monthOfIncome();

monthOfIncome();

// This function will add additional income fields
async function addIncome(e) {
  const incomeList = document.querySelector(".income-list"); // the ul

  const list = document.createElement("li");
  list.setAttribute("class", "is-flex is-justify-content-space-evenly ");
  const category = document.createElement("input");
  category.setAttribute("placeholder", "income category");
  category.setAttribute("type", "text");
  category.setAttribute("class", "category input is-small is-three-quarters");
  list.appendChild(category);

  const amount = document.createElement("input");
  amount.setAttribute("placeholder", "amount");
  amount.setAttribute("type", "number");
  amount.setAttribute("class", "income input is-small ml-3 is-three-quarters");
  list.appendChild(amount);

  const removeBtn = document.createElement("button");
  removeBtn.innerHTML = `Remove Item`;
  removeBtn.setAttribute("class", "remove-list-item is-small button ml-3");
  removeBtn.addEventListener("click", handleDeleteIncome);
  list.appendChild(removeBtn);

  incomeList.appendChild(list);
}

function handleDeleteIncome(e) {
  const incomeList = document.querySelector(".income-list"); // the ul
  let item = e.target.parentElement;
  incomeList.removeChild(item);
}

document.getElementById("add").addEventListener("click", addIncome);
