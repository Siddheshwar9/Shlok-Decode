document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Translation Toggle
    document.querySelectorAll(".show-translation-btn").forEach(button => {
        button.addEventListener("click", function () {
            let translation = this.nextElementSibling;

            // Toggle hidden class
            translation.classList.toggle("hidden");

            // Change button text based on visibility
            if (translation.classList.contains("hidden")) {
                this.textContent = "🔍 Show Translation";
            } else {
                this.textContent = "🔽 Hide Translation";
            }
        });
    });
});
