// Typewriter effect
const words = ["Backend Engineer","Cloud Developer","Machine Learning Enthusiast","AWS Certified"];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typewriterElement = document.getElementById("typewriter");

function type() {
  const currentWord = words[wordIndex];
  typewriterElement.textContent = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true; setTimeout(type, 1200);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false; wordIndex = (wordIndex + 1) % words.length; setTimeout(type, 500);
  } else { setTimeout(type, isDeleting ? 50 : 100); }
}
if (typewriterElement) type();

// Project card click
function openProject(url) { window.open(url, "_blank"); }

// Dark/light toggle
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeToggle.textContent = document.body.classList.contains("light") ? "☀️" : "🌙";
  });
}

// Contact form submit
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("✅ Thank you! Your message has been sent.");
    contactForm.reset();
  });
}
