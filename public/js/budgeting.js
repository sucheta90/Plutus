async function addPlannedExpense() {
  const category = document.querySelector(".category").value;
  const amount = parseFloat(document.querySelector(".amount").value.trim());
  console.log(amount);
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

// Initialize all input of type date
var calendars = bulmaCalendar.attach('[type="date"]', options);

// Loop on each calendar initialized
for (var i = 0; i < calendars.length; i++) {
  // Add listener to select event
  calendars[i].on("select", (date) => {
    console.log(date);
  });
}

// var calendars = new bulmaCalendar(".bulmaCalendar", {
//   dateFormat: "dd.MM.yyyy", // 01.01.2021
// });
// // Initialize all input of type date
// // var calendars = bulmaCalendar.attach('[type="date"]', options);

// // Loop on each calendar initialized
// for (var i = 0; i < calendars.length; i++) {
//   // Add listener to select event
//   calendars[i].on("select", (date) => {
//     console.log(date);
//   });
// }

// // To access to bulmaCalendar instance of an element
// var element = document.querySelector("#my-element");
// if (element) {
//   // bulmaCalendar instance is available as element.bulmaCalendar
//   element.bulmaCalendar.on("select", function (datepicker) {
//     console.log(datepicker.data.value());
//   });
// }
