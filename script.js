// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  });
});

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

themeToggle.addEventListener("change", () => {
  const isDarkMode = themeToggle.checked;

  document.body.classList.toggle("dark-mode", isDarkMode);

  logo.src = isDarkMode
    ? "images/logo/logo-night.png"
    : "images/logo/logo-day.png";

  imageMappings.forEach(({ day, night, element }) => {
    if (element) {
      element.src = isDarkMode ? night : day;
    }
  });

  document.querySelectorAll(".download-cv").forEach((button) => {
    button.style.backgroundColor = isDarkMode ? "#6b5e53" : "#e4c5a7";
  });
});

// Form Validation and Submission
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Your message has been submitted. Thank you!");
  contactForm.reset();
});

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
