// Scroll to Top Button
const scrollToTopButton = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollToTopButton.classList.remove("hidden");
  } else {
    scrollToTopButton.classList.add("hidden");
  }
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Dark and Light Mode Toggle
const themeToggle = document.getElementById("theme-toggle");
const logo = document.getElementById("logo");

// List of images to toggle
const imageMappings = [
  {
    day: "images/miscellaneous/contact-section-day.png",
    night: "images/miscellaneous/contact-section-night.png",
    element: document.querySelector("img[alt='Contact Message']"),
  },
  {
    day: "images/miscellaneous/product-mockups-day.png",
    night: "images/miscellaneous/product-mockups-night.png",
    element: document.querySelector("img[alt='Product Mockups']"),
  },
  {
    day: "images/miscellaneous/social-media-creatives-day.png",
    night: "images/miscellaneous/social-media-creatives-night.png",
    element: document.querySelector("img[alt='Social Media Creatives']"),
  },
  {
    day: "images/miscellaneous/ux-design-day.png",
    night: "images/miscellaneous/ux-design-night.png",
    element: document.querySelector("img[alt='UX/UI Design']"),
  },
];

// Toggle dark and light mode
themeToggle.addEventListener("change", () => {
  const isDarkMode = themeToggle.checked;

  // Toggle body class for dark mode
  document.body.classList.toggle("dark-mode", isDarkMode);

  // Update the logo based on the mode
  logo.src = isDarkMode
    ? "images/logo/logo-night.png"
    : "images/logo/logo-day.png";

  // Update images based on the mode
  imageMappings.forEach(({ day, night, element }) => {
    if (element) {
      element.src = isDarkMode ? night : day;
    }
  });

  // Update Download CV button colors
  document.querySelectorAll(".download-cv").forEach((button) => {
    button.style.backgroundColor = isDarkMode ? "#6b5e53" : "#e4c5a7";
  });
});

// Contact Form Submission
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been submitted. Thank you!");
});
