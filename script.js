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
            translation.classList.toggle("hidden");
        });
    });
});
