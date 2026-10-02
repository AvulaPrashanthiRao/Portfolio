/* =========================================
   DARK / LIGHT THEME
========================================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';

    } else {

        themeBtn.innerHTML = '<i class="bi bi-moon-fill"></i>';

    }

});


/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project-item");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        projects.forEach(project => {

            const category = project.dataset.category;

            if (filter === "all" || category === filter) {

                project.style.display = "block";

            } else {

                project.style.display = "none";

            }

        });


        // Change active button

        filterButtons.forEach(btn => {

            btn.classList.remove("btn-primary");
            btn.classList.add("btn-outline-primary");

        });

        button.classList.remove("btn-outline-primary");
        button.classList.add("btn-primary");

    });

});


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get values

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();


    // Error elements

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    const formSuccess = document.getElementById("formSuccess");


    // Clear previous messages

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    formSuccess.classList.add("d-none");


    let valid = true;


    // Name validation

    if (name === "") {

        nameError.textContent = "Please enter your name.";
        valid = false;

    } else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        valid = false;
    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent =
            "Please enter your email.";

        valid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;
    }


    // Message validation

    if (message === "") {

        messageError.textContent =
            "Please enter your message.";

        valid = false;

    } else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        valid = false;
    }


    // Success

    if (valid) {

        formSuccess.classList.remove("d-none");

        contactForm.reset();

    }

});


/* =========================================
   CURRENT YEAR
========================================= */

const currentYear = new Date().getFullYear();

console.log("Portfolio loaded successfully.");
console.log("Current year:", currentYear);
/* =========================================
   PAGE-LIKE SECTION NAVIGATION
========================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            window.scrollTo({
                top: targetSection.offsetTop - 65,
                behavior: "auto"
            });

        }

    });

});