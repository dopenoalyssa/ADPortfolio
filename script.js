const themeToggle = document.getElementById("theme-toggle");
const logo = document.getElementById("logo");

themeToggle.addEventListener("change", () => {
    const isDarkMode = themeToggle.checked;
    document.body.classList.toggle("dark-mode", isDarkMode);

    // Change the logo
    
    logo.src = isDarkMode ? "images/logo/logo-night.png" : "images/logo/logo-day.png";
    document.querySelectorAll(".download-cv").forEach(button => {
        button.style.backgroundColor = isDarkMode ? "#6b5e53" : "#e4c5a7";
    });
    
});