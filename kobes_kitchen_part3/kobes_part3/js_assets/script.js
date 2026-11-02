// Kobe's Kitchen - JavaScript File
// This script handles form validation, filters, and page interactions


// ---- Enquiry Form Validation ----

function validateEnquiryForm() {

    var name = document.getElementById("enquiry-name").value.trim();
    var email = document.getElementById("enquiry-email").value.trim();
    var topic = document.getElementById("enquiry-topic").value;
    var message = document.getElementById("enquiry-message").value.trim();

    clearEnquiryErrors();

    var isValid = true;

    if (name === "") {
        showError("name-error", "Please enter your name.");
        isValid = false;
    }

    if (email === "") {
        showError("email-error", "Please enter your email address.");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError("email-error", "Please enter a valid email address.");
        isValid = false;
    }

    if (topic === "") {
        showError("topic-error", "Please select an enquiry topic.");
        isValid = false;
    }

    if (message === "") {
        showError("message-error", "Please enter your message.");
        isValid = false;
    }

    if (isValid) {
        submitEnquiryForm(name, email, topic, message);
    }

    return false;
}

// Send the enquiry form using AJAX so the page does not reload
function submitEnquiryForm(name, email, topic, message) {

    var fullMessage = "Topic: " + topic + "\n\n" + message;

    var formData = {
        name: name,
        email: email,
        message: fullMessage
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formsubmit.co/ajax/kobes.kitchen@gmail.com", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            document.getElementById("form-success").style.display = "block";
            document.getElementById("enquiry-form").reset();
        }
    };

    xhr.onerror = function () {
        document.getElementById("form-success").style.display = "block";
        document.getElementById("enquiry-form").reset();
    };

    xhr.send(JSON.stringify(formData));
}


// ---- Contact Form Validation ----

function validateContactForm() {

    var name = document.getElementById("contact-name").value.trim();
    var email = document.getElementById("contact-email").value.trim();
    var type = document.getElementById("contact-type").value;
    var message = document.getElementById("contact-message").value.trim();

    clearContactErrors();

    var isValid = true;

    if (name === "") {
        showError("contact-name-error", "Please enter your name.");
        isValid = false;
    }

    if (email === "") {
        showError("contact-email-error", "Please enter your email address.");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError("contact-email-error", "Please enter a valid email address.");
        isValid = false;
    }

    if (type === "") {
        showError("contact-type-error", "Please select a message type.");
        isValid = false;
    }

    if (message === "") {
        showError("contact-message-error", "Please enter your message.");
        isValid = false;
    }

    if (isValid) {
        submitContactForm(name, email, type, message);
    }

    return false;
}

// Send the contact form using AJAX so the page does not reload
function submitContactForm(name, email, type, message) {

    var fullMessage = "Message Type: " + type + "\n\n" + message;

    var formData = {
        name: name,
        email: email,
        message: fullMessage
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formsubmit.co/ajax/kobes.kitchen@gmail.com", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            document.getElementById("contact-form-success").style.display = "block";
            document.getElementById("contact-form").reset();
        }
    };

    xhr.onerror = function () {
        document.getElementById("contact-form-success").style.display = "block";
        document.getElementById("contact-form").reset();
    };

    xhr.send(JSON.stringify(formData));
}


// ---- Helper Functions ----

function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function showError(elementId, message) {
    var errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }
}

function clearEnquiryErrors() {
    var ids = ["name-error", "email-error", "topic-error", "message-error"];
    for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (el) { el.textContent = ""; el.style.display = "none"; }
    }
    var success = document.getElementById("form-success");
    if (success) { success.style.display = "none"; }
}

function clearContactErrors() {
    var ids = ["contact-name-error", "contact-email-error", "contact-type-error", "contact-message-error"];
    for (var i = 0; i < ids.length; i++) {
        var el = document.getElementById(ids[i]);
        if (el) { el.textContent = ""; el.style.display = "none"; }
    }
    var success = document.getElementById("contact-form-success");
    if (success) { success.style.display = "none"; }
}


// ---- Highlight Active Navigation Link ----

function setActiveNavLink() {
    var currentPage = window.location.pathname.split("/").pop();
    var navLinks = document.querySelectorAll("nav ul li a");

    for (var i = 0; i < navLinks.length; i++) {
        var linkPage = navLinks[i].getAttribute("href");
        if (linkPage === currentPage) {
            navLinks[i].classList.add("active-link");
        }
    }
}


// ---- Services Menu Filter ----

// This lets users click a category button to show only those menu items
function initMenuFilter() {

    var filterButtons = document.querySelectorAll(".filter-btn");
    var serviceCards = document.querySelectorAll(".service-card");

    for (var i = 0; i < filterButtons.length; i++) {

        filterButtons[i].addEventListener("click", function () {

            // Remove active class from all buttons
            for (var j = 0; j < filterButtons.length; j++) {
                filterButtons[j].classList.remove("active");
            }

            // Add active class to the clicked button
            this.classList.add("active");

            var filter = this.getAttribute("data-filter");

            // Show or hide cards based on the selected category
            for (var k = 0; k < serviceCards.length; k++) {
                var category = serviceCards[k].getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    serviceCards[k].style.display = "block";
                } else {
                    serviceCards[k].style.display = "none";
                }
            }
        });
    }
}


// ---- Service Card Click Interaction ----

function initServiceCards() {

    var cards = document.querySelectorAll(".service-card");

    for (var i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function () {
            var enquiryLink = document.querySelector("nav a[href='enquiries.html']");
            if (enquiryLink) {
                enquiryLink.style.background = "#1a1a1a";
                enquiryLink.style.color = "#e8a020";

                setTimeout(function () {
                    enquiryLink.style.background = "";
                    enquiryLink.style.color = "";
                }, 2000);
            }
        });
    }
}


// ---- Back to Top Button ----

// Show the button when the user scrolls down and scroll back to top when clicked
function initBackToTop() {

    var btn = document.getElementById("back-to-top");

    if (btn) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                btn.style.display = "block";
            } else {
                btn.style.display = "none";
            }
        });

        btn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}


// ---- Run Everything When the Page Loads ----

document.addEventListener("DOMContentLoaded", function () {

    // Highlight the active nav link on every page
    setActiveNavLink();

    // Set up the back to top button on every page
    initBackToTop();

    // Set up the menu filter if we are on the services page
    if (document.querySelector(".filter-btn")) {
        initMenuFilter();
    }

    // Set up service card interactions if we are on the services page
    if (document.querySelector(".service-card")) {
        initServiceCards();
    }

    // Set up enquiry form validation if we are on the enquiries page
    var enquiryForm = document.getElementById("enquiry-form");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", function (e) {
            e.preventDefault();
            validateEnquiryForm();
        });
    }

    // Set up contact form validation if we are on the contact page
    var contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            validateContactForm();
        });
    }

});
