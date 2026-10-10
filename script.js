let formContact = document.querySelector("#contactForm")

formContact.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks For Contacting Us We Will Get Back To You Soon.")
    formContact.reset();
}, false)