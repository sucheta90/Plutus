async function signupNewUser(event) {
  event.preventDefault();
  const name = document.getElementById("name-signup").value.trim();
  const email = document.getElementById("email-signup").value.trim();
  const password = document.getElementById("email-signup").value.trim();

  if (name && email && password) {
    console.log(`inside signup`);
    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dasboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupNewUser);
