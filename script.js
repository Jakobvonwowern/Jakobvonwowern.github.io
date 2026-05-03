const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

if (bookingForm) {
  bookingForm.addEventListener("submit", function (event) {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const serviceSelect = document.getElementById("service");
    const messageInput = document.getElementById("message");

    clearErrors();

    let isValid = true;

    if (nameInput.value.trim() === "") {
      showError(nameInput);
      isValid = false;
    }

    if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput);
      isValid = false;
    }

    if (serviceSelect.value === "") {
      showError(serviceSelect);
      isValid = false;
    }

    if (messageInput.value.trim().length > 300) {
      showError(messageInput);
      formMessage.textContent = "Message must be under 300 characters.";
      formMessage.className = "form-message error-text";
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();

      if (formMessage.textContent === "") {
        formMessage.textContent = "Please fill in all required fields correctly.";
        formMessage.className = "form-message error-text";
      }
    }
  });
}

function showError(field) {
  field.classList.add("error");
}

function clearErrors() {
  const fields = bookingForm.querySelectorAll("input, select, textarea");

  fields.forEach(function (field) {
    field.classList.remove("error");
  });

  formMessage.textContent = "";
  formMessage.className = "form-message";
}

function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}