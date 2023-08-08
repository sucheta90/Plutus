// This function will add additional trip expenses
async function addTripExpense(event) {
  // event.preventDefault();
  const description = document.querySelector('#description').value;
  const category = document.querySelector('#category').value;
  const quantity = document.querySelector('#quantity').value;
  const unit_cost = document.querySelector('#unit-cost').value;
  // const amount = document.querySelector('#amount').value;
  const amount = calculateAmount(quantity, unit_cost);
  console.log(amount);
  // Send fetch request to add a new trip
  const response = await fetch(`/api/trip`, {
    method: 'POST',
    body: JSON.stringify({
      description,
      category,
      quantity,
      unit_cost,
      amount
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  //if the trip is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.reload('/trip');
  } else {
    alert('Failed to add trip');
  }
}

function calculateAmount(q, u) {
  // q = document.querySelector('#quantity').value;
  // u = document.querySelector('#unit-cost').value;
  let a = parseFloat(q) * parseFloat(u);
  console.log(a);
  return a;
}

document.querySelector('#submit-trip').addEventListener('click', addTripExpense);