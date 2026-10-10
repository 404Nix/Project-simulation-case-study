const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    formMessage.textContent = "";
    formMessage.style.color = "red";

    const phone = contactForm.elements["phone"].value.trim();
    const email = contactForm.elements["email"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    if (!phone || !email || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    if (!contactForm.elements["email"].checkValidity()) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Thank you! Your message has been submitted.";

    contactForm.reset();
});
