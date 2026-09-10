// ===============================
// MOBILE NAVIGATION MENU
// ===============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open and close mobile menu
menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    // Change menu icon
    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// ===============================
// CLOSE MENU WHEN LINK IS CLICKED
// ===============================

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        // Change icon back to hamburger
        menuToggle.textContent = "☰";

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get user's name
    const nameInput = contactForm.querySelector(
        'input[name="name"]'
    );

    const name = nameInput.value.trim();

    // Display success message
    if (name) {
        alert(
            "Thank you, " + name +
            "! Your message has been submitted successfully."
        );
    } else {
        alert(
            "Thank you! Your message has been submitted successfully."
        );
    }

    // Clear the form
    contactForm.reset();

});
