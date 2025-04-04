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
            this.textContent = translation.classList.contains("hidden") ? "🔍 Show Translation" : "🔽 Hide Translation";
        });
    });

    // Load user-submitted poems/shlokas
    loadPoems();

    // Poem/Shloka Submission
    document.getElementById("poemForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let title = document.getElementById("poemTitle").value.trim();
        let content = document.getElementById("poemContent").value.trim();
        let author = document.getElementById("poetName").value.trim() || "Anonymous";

        if (title === "" || content === "") {
            alert("Please enter both title and content.");
            return;
        }

        let poem = { title, content, author };
        let poems = JSON.parse(localStorage.getItem("poems")) || [];
        poems.push(poem);
        localStorage.setItem("poems", JSON.stringify(poems));

        document.getElementById("poemForm").reset();
        loadPoems();
    });
});

// Function to Load and Display Submitted Poems/Shlokas
function loadPoems() {
    let poems = JSON.parse(localStorage.getItem("poems")) || [];
    let poemList = document.getElementById("poemList");
    poemList.innerHTML = "";

    poems.forEach((poem, index) => {
        let poemDiv = document.createElement("div");
        poemDiv.classList.add("shloka-item");
        poemDiv.innerHTML = `
            <h4>${poem.title}</h4>
            <p>${poem.content}</p>
            <i>- ${poem.author}</i> 
            <button onclick="deletePoem(${index})">🗑 Delete</button>
        `;
        poemList.appendChild(poemDiv);
    });
}

// Function to Delete a Submitted Poem/Shloka
function deletePoem(index) {
    let poems = JSON.parse(localStorage.getItem("poems")) || [];
    poems.splice(index, 1);
    localStorage.setItem("poems", JSON.stringify(poems));
    loadPoems();
}
