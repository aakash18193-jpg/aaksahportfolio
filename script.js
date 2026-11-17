// Mobile Menu

const menuIcon = document.getElementById("menuIcon");

const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


// Close Menu After Clicking

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});