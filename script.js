const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = bookingForm.querySelector('input[type="text"]');
  const emailInput = bookingForm.querySelector('input[type="email"]');
  const serviceSelect = bookingForm.querySelector("select");

  clearErrors();

  let isValid = true;

  if (nameInput.value.trim() === "") {
    showError(nameInput);
    isValid = false;
  }

  if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
    showError(emailInput);
    isValid = false;
  }

  if (serviceSelect.value === "") {
    showError(serviceSelect);
    isValid = false;
  }

  if (isValid) {
    showSuccessMessage();
    bookingForm.reset();
  }
});

function showError(input) {
  input.classList.add("error");
}

function clearErrors() {
  const fields = bookingForm.querySelectorAll("input, select, textarea");

  fields.forEach(function (field) {
    field.classList.remove("error");
  });

  const oldMessage = document.querySelector(".success-message");

  if (oldMessage) {
    oldMessage.remove();
  }
}

function showSuccessMessage() {
  const message = document.createElement("p");
  message.className = "success-message";
  message.textContent = "Thank you! Your booking request has been received.";

  bookingForm.appendChild(message);
}