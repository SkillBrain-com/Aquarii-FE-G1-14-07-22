const form = document.getElementById("sign-up-form");

console.log("Form elements:", form.elements);

form.elements.email.addEventListener("change", (event) => {
  console.log("Email:", event.target.value);
});

form.elements.password.addEventListener("keyup", (event) => {
  const password = event.target.value;
  const errorsBox = document.querySelector(".errors-box");

  if (errorsBox.childNodes.length < 1 && password.length < 8) {
    console.log("Eroare:", password);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Parola nu este valida";

    errorsBox.append(paragraph);
    return;
  }

  if (password.length >= 8) {
    const error = errorsBox.querySelector("p");

    error.remove();
  }

  console.log("Password:", event.target.value);
});

form.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();

  const formData = new FormData(event.target);
  console.log(formData.get("email"));

  console.log("Keys:", [...formData.keys()]);
  console.log("Values:", [...formData.values()]);

  console.log("Object:", Object.fromEntries([...formData.entries()]));

  formData.append("password", "test");

  console.log("formData.getAll():", formData.getAll("password"));
});
